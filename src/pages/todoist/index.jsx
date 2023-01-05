import './App.css';
import React, {useState} from 'react'
import Navbar from './components/navbar';

function App() {

  const [todo, setTodo] = useState('Mercado')

  return (
    <>
      <div className="list-container">
        <div className="list-content">
          <h1>Lista de Afazeres</h1>
          <label>
            <input type='checkbox' name='checkbox'/>
            <span>{todo}</span>
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
