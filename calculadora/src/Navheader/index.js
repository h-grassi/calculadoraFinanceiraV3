import Componentes from "../Componentes";
const Navheader = ({setAba}) => {
   return (
      <>
         <nav className="navbar navbar-expand-sm">
            <div className="container-fluid">
               <h3 className="navbar-text">Preciso de um nome</h3>
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
                  <ul className="navbar-nav p-0 list-group list-group-flush ">
                     {Componentes.map(opcao =>(
                        <li key={opcao.valor} className={`nav-item p-0 m-0 ${opcao.dropdown ? ' dropdown' : ''}`}>
                           <a className="nav-link" data-bs-toggle={`${opcao.dropdown ? 'dropdown' : ''}`} onClick={()=> setAba(opcao.valor)}> {opcao.label}</a>
                           {opcao.dropdown &&(
                              <ul className="dropdown-menu" data-bs-toggle="dropdown">
                                 {opcao.dropdown.itens.map(submenu => (
                                    <li key={submenu.valor}>
                                       <a className="dropdown-item">{submenu.label}</a>
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