// App.js
import React, { useEffect,useState } from 'react';

import SnippetContainer from './components/SnippetContainer';
import { useDispatch, useSelector } from 'react-redux';
//import { getToken } from './actions/snippetAction';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { setAuthenticated } from './actions/authAction';
import CartSummary from './components/CartSummary'; // Ajusta la ruta si es necesario
import CartPage from './components/CartPage';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const App = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();
  //const [isAuthenticated,setIsAuthenticated] = useState(false);


useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
        dispatch(setAuthenticated(true)); // Usar la acción de Redux
    }
}, [dispatch]);



  return (
    <Router>
      <div>
        <CartSummary />

        <Routes>
          {/* Ruta pública para el componente Auth (Login/Register) */}
          <Route path="/auth" element={<Auth />} />
          <Route path="/cart" element={<CartPage />} />
          {/* Ruta privada para el SnippetContainer */}
          <Route
            path="/snippets"
            element={
              isAuthenticated ? <SnippetContainer /> : <Navigate to="/auth" replace />
            }
          />

          {/* Ruta privada para el UserProfile */}
          <Route
            path="/profile"
            element={
              isAuthenticated ? <UserProfile /> : <Navigate to="/auth" replace />
            }
          />

          {/* Redirección por defecto al Login */}
          <Route path="/" element={<Navigate to="/auth" replace />} />
        </Routes>
      </div>
    </Router>
  );

};

export default App;
