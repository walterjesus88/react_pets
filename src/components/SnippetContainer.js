// components/SnippetContainer.js
import React, { useState } from 'react';
import SnippetList from './SnippetList';
import SnippetAddModal from './SnippetAddModal';
import SnippetDetailModal from './SnippetDetailModal';
import { logout } from '../actions/authAction.js'
import { useDispatch } from 'react-redux';

const SnippetContainer = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedSnippet, setSelectedSnippet] = useState(null);
  const dispatch = useDispatch();

  const handleAddSnippet = () => setShowAddModal(true);
  const handleCloseModal = () => {
    setShowAddModal(false);
    setSelectedSnippet(null);
  };
  const handleSnippetSelect = (snippet) => setSelectedSnippet(snippet);
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <SnippetList onSnippetSelect={handleSnippetSelect} />
      <button onClick={handleAddSnippet}>Add Snippet</button>

      {showAddModal && <SnippetAddModal onClose={handleCloseModal} />}
      {selectedSnippet && (
        <SnippetDetailModal snippetDetail={selectedSnippet} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default SnippetContainer;
