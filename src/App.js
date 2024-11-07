// App.js
import React, { useEffect,useState } from 'react';
//import TodoList from './components/TodoList';
//import UsuarioList from './components/UsuarioList';
// import SnippetList from './components/SnippetList';
// import SnippetAddModal from './components/SnippetAddModal';
// import SnippetDetailModal from './components/SnippetDetailModal';
// import Login from './components/Login';
// import Register from './components/Register';
import SnippetContainer from './components/SnippetContainer';
import { useDispatch, useSelector } from 'react-redux';
//import { getToken } from './actions/snippetAction';
import Auth from './components/Auth';



const App = () => {

  const dispatch = useDispatch();
  // const [showAddModal, setShowAddModal] = useState(false);
  // const [selectedSnippet, setSelectedSnippet] = useState(null);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  // const [isRegistering, setIsRegistering] = useState(false);

  // console.log(isRegistering)

  // useEffect(() => {
  //   dispatch(getToken("walter","123456"));
  // }, [dispatch]);

/*   const handleAddSnippet = () => {
    setShowAddModal(true);
  };

  const handleCloseModal = () => {
    setSelectedSnippet(null);
    setShowAddModal(false);
  };

  const handleSnippetSelect = (snippet) => {
    setSelectedSnippet(snippet);
  }; */

  return (
    <div>
      
      {isAuthenticated ? (
        <SnippetContainer /> // Muestra los snippets cuando está autenticado
        // <>
        //   <SnippetList onSnippetSelect={handleSnippetSelect} />

        //   <button onClick={handleAddSnippet}>Add Snippet</button>
        //   {showAddModal && <SnippetAddModal onClose={handleCloseModal} />}

        //   {selectedSnippet && (
        //       <SnippetDetailModal
        //         snippetDetail={selectedSnippet}
        //         onClose={handleCloseModal}
        //       />
        //   )}
        // </>
      ):(
        <Auth /> // Muestra los formularios de autenticación
        // <>
        // {/* Si el usuario no está autenticado, muestra los formularios de login/registro */}
        // {isRegistering ? (
        //   <Register />
        // ) : (
        //   <Login />
        // )}
        // {/* Botón para alternar entre login y registro */}
        //   <button onClick={() => setIsRegistering(!isRegistering)}>
        //     {isRegistering ? 'Already have an account? Login' : 'No account? Register'}
        //   </button>
        // </>
      )}

    </div>
  );
};

export default App;
