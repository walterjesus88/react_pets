import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import {addSnippet } from '../actions/snippetAction';

const SnippetAddModal = ({ onClose }) => {
  // Estado local para almacenar los valores del formulario
  const dispatch = useDispatch();
//   const [snippetData, setSnippetData] = useState({
//     title: '',
//     code: '',
//     language: '',
//     style: '',
//   });
  const [newSnippet, setNewSnippet] = useState({
    title: '',
    code: '',
    language: '',
    style: '',      
  })

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSnippet((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Llama a la función para agregar el snippet cuando se envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // onAddSnippet(snippetData);
    dispatch(addSnippet(newSnippet));
    setNewSnippet({ title: '', code: '', language: '', style: '' });
    onClose(); // Cierra el modal después de agregar el snippet
  };


  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.modal}>
        <button onClick={onClose} style={modalStyles.closeButton}>X</button>
        
        <h2>Add New Snippet</h2>
        <form onSubmit={handleSubmit}>
          <div style={modalStyles.formGroup}>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={newSnippet.title}
              onChange={handleChange}
              required
              style={modalStyles.input}
            />
          </div>
          <div style={modalStyles.formGroup}>
            <label>Code:</label>
            <textarea
              name="code"
              value={newSnippet.code}
              onChange={handleChange}
              required
              style={modalStyles.textarea}
            />
          </div>
          <div style={modalStyles.formGroup}>
            <label>Language:</label>
            <input
              type="text"
              name="language"
              value={newSnippet.language}
              onChange={handleChange}
              required
              style={modalStyles.input}
            />
          </div>
          <div style={modalStyles.formGroup}>
            <label>Style:</label>
            <input
              type="text"
              name="style"
              value={newSnippet.style}
              onChange={handleChange}
              style={modalStyles.input}
            />
          </div>
          <button type="submit" style={modalStyles.submitButton}>Add Snippet</button>
        </form>
      </div>
    </div>
  );
};

export default SnippetAddModal;

const modalStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    },
    modal: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '4px',
      maxWidth: '500px',
      width: '100%',
      position: 'relative',
    },
    closeButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'none',
      border: 'none',
      fontSize: '16px',
      cursor: 'pointer',
      color: '#333',
    },
    formGroup: {
      marginBottom: '15px',
    },
    input: {
      width: '100%',
      padding: '8px',
      margin: '5px 0',
      boxSizing: 'border-box',
    },
    textarea: {
      width: '100%',
      padding: '8px',
      height: '80px',
      margin: '5px 0',
      boxSizing: 'border-box',
    },
    submitButton: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
  };