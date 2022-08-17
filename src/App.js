import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '~/App.scss';
import Blogs from '~/pages/Blogs';
import Home from '~/pages/Home/Home';

function App() {
 return (
  <Router>
   <div>
    <Routes>
     <Route path="/">
      <Route index element={<Home />} />
      <Route path="blogs" element={<Blogs />} />
     </Route>
    </Routes>
   </div>
  </Router>
 );
}

export default App;
