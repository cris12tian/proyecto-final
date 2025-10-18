import React, { useState } from 'react';
import BibliotecaJuegos from './components/BibliotecaJuegos';
import Login from './components/Login';
export default function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('gt_user') || 'null'));
  return 
   ( <div className="app-container">
      <header>
        <h1>GameTracker</h1>
        <p>Tu biblioteca personal de videojuegos</p>
        <div style={{position:'absolute', right:20, top:20}}>
          {user ? <div>Hola, {user.name} <button onClick={()=>{localStorage.removeItem('gt_token'); localStorage.removeItem('gt_user'); setUser(null);}}>Cerrar</button></div> : <Login onLogin={(u)=>setUser(u)} />}
        </div>
      </header>
      <main>
        <BibliotecaJuegos />
      </main>
    </div>
   )
  ;
}
