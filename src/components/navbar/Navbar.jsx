import img from "./logo.png"

const Navbar = ({handleSearch}) => {
  const handleSubmit=(e)=>{
    e.preventDefault();
    handleSearch(e);
  };
  return (
    <nav className="navbar navbar-expand-lg  p-5 "style={{backgroundColor:"transparent"}}>
    <div className="container ">
    <img src={img} alt="" width="100" height="70"/>
      <a className="f navbar-brand ms-5" href="#">Paribu Ticket</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex gap-5 fs-5">
          <li className="nav-item ms-5">
            <a className="f nav-link disabled" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="f nav-link disabled" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="f nav-link" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Show Tickets 🎫</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" style={{width:"20rem", backgroundColor:"transparent"}} type="search" placeholder="Search" aria-label="Search" onChange={handleSearch}/>
          <button className="fbtn btn" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Navbar