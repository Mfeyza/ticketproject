import React, { useState } from 'react';
import Modal from '../modal/Modal';


const MoviesCard = ({ data }) => {
  const [modalAcık,setModalAcık]=useState(false)
  const [seciliFilm ,setSeciliFilm]=useState("");

  const acilanModal=(movie)=>{
    setSeciliFilm(movie)
    setModalAcık(true)
  }
  
  return (
    <div className='d-flex flex-column justify-content-center align-items-center '>
    
        <div className='d-flex justify-content-center align-items-center flex-wrap gap-5 cards mt-5'>
      {data.map(({ id,img, title, summary, director, actors }) => (
        <div className="card"  key={id} >
            <img src={img} className="card-img" alt="..." ></img>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{summary}</p>
            <p><strong>Yönetmen:</strong> {director}</p>
            <p>Oyuncular: {actors.join(', ')}</p>

          </div>
          
          <div className="footer mb-5">
            <a href="#" className="btn buybtn "  data-bs-toggle="modal" data-bs-target="#exampleModal"  onClick={()=> acilanModal({id,title,img})}>
              Buy Ticket
            </a>
          </div>
        </div>
      ))}
    </div>
    <Modal seciliFilm={seciliFilm} />
    </div>
  );
};

export default MoviesCard;
