// /components/TodoList.js
import React, {  useState , useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchSnippets,addSnippet,getSnippetDetail } from '../actions/snippetAction';
import SnippetDetailModal from './SnippetDetailModal';
import { useNavigate } from 'react-router-dom';

const SnippetList = ({ onSnippetSelect }) => {

    const snippets = useSelector((state) => state.snippets.snippets);
    const loading = useSelector((state) => state.snippets.loading);
    const error = useSelector((state) => state.snippets.error);
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const navigate = useNavigate();


    console.log(snippets)
    console.log(isAuthenticated)
    const dispatch = useDispatch(); 

    useEffect(() => {
      if (isAuthenticated) {
        navigate('/snippets'); // O cualquier otra ruta
        dispatch(fetchSnippets());

        }

    }, [dispatch,isAuthenticated, navigate]);


    //Efecto para redirigir cuando el usuario se autentica
    // useEffect(() => {
    //       console.log(isAuthenticated)
  
    //       if (isAuthenticated) {
    //       navigate('/snippets'); // O cualquier otra ruta
    //       }
    //   }, [isAuthenticated, navigate]);


    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
      <div>
        <h1>Snippet List</h1>
 
        <ul style={listStyles}>
            {snippets && snippets.length > 0 ? ( 
              snippets.map((snippet,index) => (
                // <li key={snippet.id} onClick={() => handleSnippetClick(snippet.id)} style={styles.snippetItem}>
                <li key={index} style={itemStyles} onClick={() => onSnippetSelect(snippet)}>
                    <h2>{snippet.title}</h2>
                </li>
            ))) : (
              <p>No snippets found</p>
            )}
        </ul>  
      </div>
    );
  };

export default SnippetList;
const listStyles = {
  listStyleType: 'none',
  padding: 0,
};

const itemStyles = {
  padding: '10px',
  marginBottom: '8px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  cursor: 'pointer',
  backgroundColor: '#f9f9f9',
};