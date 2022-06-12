import { useEffect, useState } from 'react';
import './App.css';
import Author from './components/Author';
import AuthorsBook from './components/AuthorsBook';
import Header from './components/Header';
import { getBooks } from './requests';


function App() {

  const [state, setState] = useState([])

  useEffect(()=>{
    getBooks(setState)
  },[])

  return (
    <div className='root'>
      <Header />
      <AuthorsBook books={state}/>
      <Author />
    </div>
  );
}

export default App;
