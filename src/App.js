import { useEffect, useState } from 'react';
import './App.css';
import Author from './components/Author';
import AuthorsBook from './components/AuthorsBook';
import CopyToday from './components/CopyToday';
import Customers from './components/Customers';
import Header from './components/Header';
import Skills from './components/Skills';
import { getBooks, getPartners, getSkills } from './requests';


function App() {

  const [book, setBook] = useState([])
  const [partner, setPartner] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(()=>{
    getBooks(setBook)
  },[])

  useEffect(()=>{
    getPartners(setPartner)
  },[])

  useEffect(()=>{
    getSkills(setSkills)
  },[])

  return (
    <div className='root'>
      <Header />
      <AuthorsBook books={book}/>
      <Author />
      <Customers customers={partner}/>
      <CopyToday />
      <Skills skills={skills}/>
    </div>
  );
}

export default App;
