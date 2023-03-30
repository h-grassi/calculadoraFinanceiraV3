const Navheader = () => {
   return (
      <>
         <nav className="navbar navbar-expand-sm">
            <div className="container-fluid">
               <h3 className="navbar-text text-center">Investidor da sua irmã</h3>
               <button className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navresponsiva" 
                        aria-controls="navresponsiva" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
            </div>
         </nav>

         <nav className="navbar navbar-expand-sm bg-body-primary border p-0 m-0">
            <div className="container-fluid">
               <div className="collapse navbar-collapse text-sm" id="navresponsiva">
                  <a className="navbar-brand t" href="#">Menu</a>
                  <ul className="navbar-nav p-0 list-group list-group-flush">
                     <li className="nav-item list-group-item p-0 m-0">
                        <a className="nav-link" aria-current="page" href="#">Home</a>
                     </li>
                     <li className="nav-item list-group-item p-0 m-0">
                        <a className="nav-link" href="#">Calculadoras</a>
                     </li>
                     <li className="nav-item list-group-item p-0 m-0">
                        <a className="nav-link">Livros</a>
                     </li>
                     <li className="nav-item list-group-item p-0 m-0">
                        <a className="nav-link">Artigos</a>
                     </li>
                     <li className="nav-item list-group-item p-0 m-0">
                        <a className="nav-link">Conceitos</a>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </>
   )
}
export default Navheader;