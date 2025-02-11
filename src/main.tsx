import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SimpleCounter from './pages/Home/SimpleCounter'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

<BrowserRouter>
<Header />
<Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/" element={<SimpleCounter/>}/> 
</Routes>

</BrowserRouter>

    
   
  </React.StrictMode>,
)
