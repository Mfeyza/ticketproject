import React, { useState } from "react";


const Canvas = ({ canvasData,handleTemizle ,setcanvasData }) => {
  const [temizle, setTemizle] = useState({
    title: "",
    name: "",
    date: "",
    img: "",
    id: "",
  });
  const handleSatırTemizle =(id)=>{
    setcanvasData(canvasData.filter(item=> item.id != id))
 }
console.log(canvasData);

  return (
    <div>
      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabIndex={-1}
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="canvasbg d-flex justidy-content-center flex-column align-items-center">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel"></h5>
          <div className="offcanvas-body">
            {canvasData.map((item, index) => (
              <div key={index}>
                <p>Film adı: <strong>{ item.title}</strong></p>
                <p><i>{item.name}</i></p>
                <p>{item.date}</p>
                <img src={ item.img} alt="" width={"80px"} /> 
                <button type="button" onClick={() => handleSatırTemizle(item.id)}
            className="btn-close p-5 " aria-label="Close"
          ></button>
              </div>
            ))}
          </div>
          <button className="btn bg-success" onClick={handleTemizle}>
            Temizle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Canvas;