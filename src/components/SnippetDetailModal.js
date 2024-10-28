// components/SnippetDetailModal.js
import React from 'react';

const SnippetDetailModal = ({ snippetDetail, onClose }) => {
  if (!snippetDetail) return null; // No mostrar nada si no hay detalles

  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.modal}>
        <button onClick={onClose} style={modalStyles.closeButton}>X</button>
        
        <h2>Snippet Details</h2>
        <h3>{snippetDetail.title}</h3>
        <p>{snippetDetail.code}</p>
        <p>Language: {snippetDetail.language}</p>
        <p>Style: {snippetDetail.style}</p>
      </div>
    </div>
  );
};

export default SnippetDetailModal;

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
    fontSize: '18px', // Un poco más grande para mejor visibilidad
    cursor: 'pointer',
    color: '#333', // Asegura que el color sea visible
  },
};
