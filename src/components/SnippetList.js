// /components/TodoList.js
import React, {  useState , useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchSnippets,addSnippet,getSnippetDetail } from '../actions/snippetAction';

import { useNavigate } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SnippetList = ({ onSnippetSelect }) => {    

    // const [searchQuery, setSearchQuery] = useState('');
    // const handleSearch = (event) => {
    //   setSearchQuery(event.target.value);
    // };

    // const filteredSnippets = snippets.filter(snippet =>
    //   snippet.title.toLowerCase().includes(searchQuery.toLowerCase())
    // );

    const [cart, setCart] = useState([]);
    const snippets = useSelector((state) => state.snippets.snippets);
    const loading = useSelector((state) => state.snippets.loading);
    const error = useSelector((state) => state.snippets.error);
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const Total = useSelector((state) => state.cart.cartItems);

    const navigate = useNavigate();

    console.log(Total)
    console.log(snippets)
    console.log(isAuthenticated)
    const dispatch = useDispatch(); 

    useEffect(() => {
      if (isAuthenticated) {
        navigate('/snippets'); // O cualquier otra ruta
        dispatch(fetchSnippets());

        }

    }, [dispatch,isAuthenticated, navigate]);

    useEffect(() => {
      if (error) {
        toast.error('Error loading snippets');
      }
    }, [error]);

    const handleAddToCart = (snippet) => {
      // Agregar snippet al carrito
      console.log(snippet)
      dispatch(addToCart(snippet));
      setCart([...cart, snippet]);
      toast.success(`${snippet.title} added to cart!`);
    };
  
    const handleRemoveFromCart = (snippet) => {
      // Eliminar snippet del carrito
      console.log(snippet.id)
      dispatch(removeFromCart(snippet.id));
      setCart(cart.filter(item => item.id !== snippet.id));
      toast.info(`${snippet.title} removed from cart!`);
    };
  
    const renderCartSummary = () => {
      return (
        <div style={cartSummaryStyles}>
          <h3>Carrito de Compras</h3>
          {cart.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.title}
                  <button onClick={() => handleRemoveFromCart(item)}>Eliminar</button>
                </li>
              ))}
            </ul>
          )}
          <p>Total de artículos: {cart.length}</p>
        </div>
      );
    };

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
      <div>
 
        <h1>Snippet List</h1>
        <div style={listContainerStyles}>
          {snippets && snippets.length > 0 ? (
            snippets.map((snippet, index) => (
              <div key={index} style={cardStyles} onClick={() => onSnippetSelect(snippet)}>
                <img
                  src="https://via.placeholder.com/150"
                  alt="Snippet"
                  style={imageStyles}
                />
                <h2 style={titleStyles}>{snippet.title}</h2>
           
                <button style={buttonStyles} onClick={() => handleAddToCart(snippet)}>Agregar al carrito</button>
                <button onClick={() => navigate(`/snippets/${snippet.id}`)}>Ver detalles</button>
              </div>
            ))
          ) : (
            <p>No snippets found</p>
          )}
        </div>
        {renderCartSummary()}
        <ToastContainer />
      </div>
    );

  };

export default SnippetList;


const listContainerStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '16px',
  padding: '16px',
};

const cardStyles = {
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  padding: '16px',
  background: '#fff',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  cursor: 'pointer',
};

const imageStyles = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  marginBottom: '12px',
};

const titleStyles = {
  margin: '0',
  color: '#333',
  fontWeight: '500',
  marginBottom: '8px',
};

const buttonStyles = {
  backgroundColor: '#ff6b6b',
  color: '#fff',
  padding: '10px 16px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
};

const cartSummaryStyles = {
  marginTop: '20px',
  padding: '16px',
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  background: '#f9f9f9',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

buttonStyles[':hover'] = {
  backgroundColor: '#e65a5a',
};