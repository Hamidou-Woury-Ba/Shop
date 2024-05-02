import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './auth/Login.tsx'
import Register from './auth/Register.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> {/** activer le mode strict de React, qui effectue des vérifications supplémentaires et avertit sur les pratiques déconseillées */}
    <BrowserRouter>   {/** permet de définir des routes pour l'application */}
      <Routes> {/** Définit un conteneur pour toutes les routes de l'application */}
        <Route path='/*' element={<App />}/> {/** Définit une route pour le composant App qui sera affiché lorsque n'importe quel chemin est correspondant (/*) dans l'URL */}
        <Route path='/login' element={<Login/>}/> {/**  Définit une route pour le composant Login qui sera affiché lorsque le chemin dans l'URL correspond à /login */}
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)