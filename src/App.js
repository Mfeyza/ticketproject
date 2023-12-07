
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
import Navbar from "./components/navbar/Navbar";
import MoviesCard from './components/card/MoviesCard';
import { data } from './helper/data';
import { useState } from 'react';
import Footer from './components/footer/Footer';








function App() {
const [movie,setMovie]= useState(data);
console.log(data);
const handleSearch=(e)=>{
  let searchMovie = e.target.value.toLowerCase().split("").join("");
  let filtMovie = data.filter((movie) => {
    return  movie.title.toLowerCase().split("").join("").includes(searchMovie);
   
  });

  setMovie(filtMovie);
}
  return (
  <div className='App'>
    
  <Navbar handleSearch={handleSearch}/>

  
  <MoviesCard data={movie}/>
 
  <Footer/>

    
   
  </div>
   
  );
}

export default App;
