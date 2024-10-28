// App.js
import React, { useEffect,useState } from 'react';
//import TodoList from './components/TodoList';
//import UsuarioList from './components/UsuarioList';
import SnippetList from './components/SnippetList';
import SnippetAddModal from './components/SnippetAddModal';
import SnippetDetailModal from './components/SnippetDetailModal';
import { useDispatch } from 'react-redux';
import { getToken } from './actions/snippetAction';


const App = () => {

  const dispatch = useDispatch();
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedSnippet, setSelectedSnippet] = useState(null);

  useEffect(() => {
    dispatch(getToken("walter","123456"));
  }, [dispatch]);

  const handleAddSnippet = () => {
    setShowAddModal(true);
  };

  const handleCloseModal = () => {
    setSelectedSnippet(null);
    setShowAddModal(false);
  };

  const handleSnippetSelect = (snippet) => {
    setSelectedSnippet(snippet);
  };

  return (
    <div>
      <SnippetList onSnippetSelect={handleSnippetSelect} />

      <button onClick={handleAddSnippet}>Add Snippet</button>
      {showAddModal && <SnippetAddModal onClose={handleCloseModal} />}

      {selectedSnippet && (
          <SnippetDetailModal
            snippetDetail={selectedSnippet}
            onClose={handleCloseModal}
          />
        )}
    </div>
  );
};

export default App;
