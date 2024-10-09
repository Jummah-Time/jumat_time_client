import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home.jsx';
import AddMosque from './pages/AddMosque.jsx';

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path='*' element={<Home />} />
            <Route path='add-new-mosque' element={<AddMosque />} />
        </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
// root.render(
//   <React.StrictMode>
//     <App />
//     <Header />
//     <Search />
//   </React.StrictMode>
// );
