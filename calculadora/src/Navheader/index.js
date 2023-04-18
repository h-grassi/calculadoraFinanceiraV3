import ComponentesControle from "../ComponentesControle";
const Navheader = ({setAba}) => {
   return (
      <>
         <nav className="navbar navbar-expand-sm bg-success bg-opacity-75">
            <div className="container-fluid">
               <h3 className="navbar-text text-white ">Preciso de um nome</h3>
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

         <nav className="navbar navbar-expand-sm bg-success bg-opacity-50 p-0 m-0">
            <div className="container-fluid">
               <div className="collapse navbar-collapse text-sm" id="navresponsiva">
                  <ul className="navbar-nav p-0 list-group list-group-flush ">
                     {ComponentesControle.map(opcao =>(
                        <li key={opcao.valor} className={`nav-item p-0 m-0 ${opcao.dropdown ? ' dropdown' : ''}`}>
                           <button className="btn" 
                              data-bs-toggle={`${opcao.dropdown ? 'dropdown' : ''}`} 
                              onClick={opcao.dropdown ? (e) => e.stopPropagation():()=> setAba(opcao.valor)}> 
                              {opcao.label}
                           </button>
                           {opcao.dropdown &&(
                              <ul className="dropdown-menu border-success" data-bs-toggle="dropdown">
                                 {opcao.itens.map(submenu => (
                                    <li key={submenu.valor}>
                                       <button className="btn btn-outline-success dropdown-item"
                                                onClick={() => setAba(submenu.valor)}>{submenu.label}</button>
                                    </li>
                                 ))}
                              </ul>
                           )}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </nav>
      </>
   )

}
export default Navheader;