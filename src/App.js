import { useEffect, useState } from 'react';
import './App.css';
import Author from './components/Author';
import AuthorsBook from './components/AuthorsBook';
import CopyToday from './components/CopyToday';
import Customers from './components/Customers';
import Header from './components/Header';
import { getBooks, getPartners } from './requests';


function App() {

  const [book, setBook] = useState([])
  const [partner, setPartner] = useState([])

  useEffect(()=>{
    getBooks(setBook)
  },[])

  useEffect(()=>{
    getPartners(setPartner)
  },[])

  return (
    <div className='root'>
      <Header />
      <AuthorsBook books={book}/>
      <Author />
      <Customers customers={partner}/>
      <CopyToday />
    </div>
  );
}

export default App;
