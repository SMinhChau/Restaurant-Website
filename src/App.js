import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import '~/App.scss';
import Blogs from '~/pages/Blogs';
import Home from '~/pages/Home/Home';
import { Singup } from './container';
import Signin from './container/Signin/Signin';
import { AuthContextProvider } from './contexts/AuthContext';
import ProtectRouter from '~/pages/ProtectRouter';

function App() {
 return (
  <div>
   <AuthContextProvider>
    <Routes>
     <Route path="/">
      <Route index element={<Signin />} />
      <Route path="register" element={<Singup />} />
      <Route
       path="home"
       element={
        <ProtectRouter>
         <Home />
        </ProtectRouter>
       }
      />
      <Route
       path="blogs"
       element={
        <ProtectRouter>
         <Blogs />
        </ProtectRouter>
       }
      />
     </Route>
    </Routes>
   </AuthContextProvider>
  </div>
 );
}

export default App;
