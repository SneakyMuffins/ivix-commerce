import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MiniDrawer from './components/Drawer/MiniDrawer';
import ProductListPage from './routes/ProductListPage';
import HomePage from './routes/HomePage';
import { menuItems } from './config/menu';
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="content">
          <MiniDrawer menuItems={menuItems}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/productlist" element={<ProductListPage />} />
            </Routes>
          </MiniDrawer>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
