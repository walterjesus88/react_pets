// /components/TodoList.js
import React, {  useState , useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchSnippets,addSnippet,getSnippetDetail } from '../actions/snippetAction';
import SnippetDetailModal from './SnippetDetailModal';

const SnippetList = ({ onSnippetSelect }) => {
    //const [snippets, setSnippets] = useState([]);
    //const [loading, setLoading] = useState(true);
    //const snippets = useSelector((state) => state.snippets); // Acceder al estado global

    //const { snippets,  loading, error } = useSelector((state) => state.snippets);
    const snippets = useSelector((state) => state.snippetReducer.snippets);
    console.log(snippets)
    //const [newSnippet, setNewSnippet] = useState({ title: '', code: '', language: '', style: '' });
    //const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch(); 
    //const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);

    useEffect(() => {
      dispatch(fetchSnippets());
    }, [dispatch]);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;
  
    // const handleAddSnippet = () => {
    //   dispatch(addSnippet(newSnippet));
    //   setNewSnippet({ title: '', code: '', language: '', style: '' });
    // };

    // const handleAddSnippet = (newSnippet) => {
    //   setSnippets((prevSnippets) => [...prevSnippets, newSnippet]);
    // };

    // const handleChange = (e) => {
    //   setNewSnippet({ ...newSnippet, [e.target.name]: e.target.value });
    // };



    // const handleSnippetClick = (snippetId) => {
    //   dispatch(getSnippetDetail(snippetId));
    //   setIsModalOpen(true); // Abrir el modal
    // };

    // const closeModal = () => {
    //   setIsModalOpen(false); // Cerrar el modal
    // };

    return (
      <div>
        <h1>Snippet List</h1>
        {/* <ul>
          {snippets && snippets.length > 0 ? (
            snippets.map((snippet) => <p key={snippet.id}>{snippet.title}</p>)
          ) : (
            <p>No snippets found</p>
          )}
        </ul> */}
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
          {/* {snippetDetail && (
                <div>
                    <h2>Snippet Details</h2>
                    <h3>{snippetDetail.title}</h3>
                    <p>{snippetDetail.code}</p>
                    <p>Language: {snippetDetail.language}</p>
                    <p>Style: {snippetDetail.style}</p>
                </div>
            )} */}
          {/* <button onClick={() => handleAddSnippet({title: '.netjs', code: 'micro'})}>Nuevo</button> */}
               
        
              {/* Condicional para mostrar el modal solo si isModalOpen es true */}
          {/* {isModalOpen && (
            <SnippetDetailModal snippetDetail={snippetDetail} onClose={closeModal} />
          )} */}

        {/* <div styles={styles.form}>
          <input type="text" name="title" placeholder="Título" value={newSnippet.title} onChange={handleChange} style={styles.input} />
          <input type="text" name="code" placeholder="code" value={newSnippet.code} onChange={handleChange} style={styles.input} />
          <input type="text" name="language" placeholder="language" value={newSnippet.language} onChange={handleChange} style={styles.input} />
          <input type="text" name="style" placeholder="style" value={newSnippet.style} onChange={handleChange} style={styles.input} />
          <button onClick={handleAddSnippet} style={styles.button}>Add Snippet</button>
        </div> */}
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

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '20px',
//     fontFamily: 'Arial, sans-serif',
//   },
//   snippetList: {
//     listStyleType: 'none',
//     padding: 0,
//     width: '100%',
//     maxWidth: '500px',
//   },
//   snippetItem: {
//     padding: '10px',
//     borderBottom: '1px solid #ddd',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     width: '100%',
//     maxWidth: '300px',
//     marginTop: '20px',
//   },
//   input: {
//     padding: '10px',
//     margin: '5px 0',
//     fontSize: '16px',
//     border: '1px solid #ddd',
//     borderRadius: '4px',
//   },
//   button: {
//     padding: '10px',
//     marginTop: '10px',
//     fontSize: '16px',
//     backgroundColor: '#28a745',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
// };




// return (
    //   <div>
    //     <h1>snippet List</h1>
    //     <form onSubmit={handleSubmit}>
    //       <input
    //         type="text"
    //         value={snippet}
    //         onChange={(e) => setSnippet(e.target.value)}
    //         placeholder="Add a new snippet"
    //       />
    //       <button type="submit">Add</button>
    //     </form>
    //     <ul>
    //       {snippets.map((snippet) => (
    //         <SnippetDetail key={snippet.id} snippet={snippet} />
    //       ))}
    //     </ul>        
    //   </div>
    // );

       // const handleSubmit = (e) => {
      //   e.preventDefault();
      //   if (snippet.trim()) {
      //     dispatch(addSnippet(snippet));
      //     setSnippet('');
      //   }
      // };

      // useEffect(() => {
      //   // Llama al servicio cuando el componente se monte
      //   const getSnippets = async () => {
      //     try {
      //       const data = await fetchData();
      //       setSnippets(data);
      //     } catch (error) {
      //       console.error('Error al cargar las tareas:', error);
      //     } finally {
      //       setLoading(false);
      //     }
      //   };
    
      //   getSnippets();
      // }, []);