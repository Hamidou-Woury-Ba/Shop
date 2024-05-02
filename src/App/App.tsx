import { Routes, Route } from "react-router-dom"
import Layout from "./Layout"
function App() {

  return (<>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<div>Vitrine</div>}/> {/** qui affiche le contenu <div>Vitrine</div> dans le composant Layout */} 
        <Route path="/marketplace" element={<div>MarKet Place</div>}/>
        <Route path="/profile" element={<div>Profile</div>}/>
        <Route path="/panier" element={<div>Panier</div>}/>
        <Route path='*' element={<div>404! Page not found</div>}/> {/** Définit une route de secours qui affiche <div>404! Page not found</div> lorsque l'URL ne correspond à aucune des routes définies précédemment. */}
      </Route>
    </Routes>
  </>)
}

export default App
