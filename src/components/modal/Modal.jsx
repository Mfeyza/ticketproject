import { useState } from 'react';
import Canvas from '../canvas/Canvas';



const Modal = ({ seciliFilm }) => {
  const [modalData, setModalData] = useState({
    seciliFilm: seciliFilm?.title || "",
    name: "",
    date: "",
    img:"",
    id:"",

  });

  const  [canvasData , setcanvasData]=useState([])

  const {  name, date } = modalData;

  const handleModalData = (e) => {
    setModalData({ ...modalData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setModalData({
      date:"",
      img: "",
      title:"",
      id:"",
    
    });
   
    setcanvasData([...canvasData, {...modalData, title:seciliFilm.title, img: seciliFilm.img ,id: seciliFilm.id}])
  };

  return (
    <div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">{seciliFilm?.title}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex flex-column gap-5 ">
              <div className="input-group flex-nowrap">
                <span className="nameinput input-group-text" id="addon-wrapping">
                  Ad-Soyad
                </span>
                <input
                  type="text"
                  className="form-control fname"
                  placeholder="İsminizi Giriniz"
                  aria-label="name"
                  onChange={handleModalData}
                  value={name || ""}
                  id="name"
                  name="name"
                  aria-describedby="addon-wrapping"
                />
              </div>
              <div className="input-group flex-nowrap">
                <span className="namedate input-group-text" id="addon-wrapping">
                  Tarih Seçiniz
                </span>
                <input
                  type="date"
                  className="form-control fdate"
                  onChange={handleModalData}
                  value={date || ""}
                  id="date"
                  name="date"
                  aria-describedby="addon-wrapping"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Vazgeç
              </button>
              <button type="button" className="btn mbtn2" onClick={handleSave}>
                Kaydet
              </button>
            </div>
          </div>
        </div>
      </div>
     <Canvas canvasData={canvasData} handleTemizle={() => setcanvasData([])} setcanvasData={setcanvasData} />
</div>
  );
};

export default Modal;