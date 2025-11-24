import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './layout/Layout';
import Home from './components/Home';
import About from './components/About';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App