import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header.jsx';
import Search from './components/Search.jsx';
import Home from './pages/Home.jsx';

import App from './App';

const element = <h1>Omo mehn</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);
// root.render(
//   <React.StrictMode>
//     <App />
//     <Header />
//     <Search />
//   </React.StrictMode>
// );
