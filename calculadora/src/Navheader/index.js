import { ComponentesControle } from "../ComponentesControle";
import logo from '../assets/logoTeste2.svg'
import { BiCaretDown } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const Navheader = () => {
   const navigate = useNavigate();
   return (
      <>
         <nav className="navbar navbar-expand-sm bg-success bg-opacity-75">
            <div className="container-fluid">
               <img src={logo} alt="Logo" style={{ width: '100px', height: '100px' }} />
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
                  <ul className="navbar-nav p-0 list-group list-group-flush">
                     {ComponentesControle.map(opcao => (opcao.dropdown ?
                        <li key={opcao.valor} className="nav-item btn-outline-success p-0 m-0 dropdown">
                           <button className="btn"
                              data-bs-toggle="dropdown"
                              aria-label="Toggle navigation"
                              onClick={(e) => { e.stopPropagation() }}
                           >{opcao.label}<BiCaretDown />
                           </button>
                           <ul className="dropdown-menu border-success" data-bs-toggle="dropdown">
                              <li>
                                 {opcao.itens.map(submenu => (
                                    <button className="btn btn-outline-success dropdown-item"
                                       onClick={() => navigate(submenu.link)}
                                       data-bs-toggle="collapse"
                                    >
                                       {submenu.label}
                                    </button>
                                 ))}
                              </li>
                           </ul>
                        </li>
                        :
                        <li key={opcao.valor} className="nav-item btn-outline-success p-0 m-0">
                           <button className="btn "
                              data-bs-toggle="collapse"
                              data-bs-target="#navresponsiva"
                              aria-controls="navresponsiva"
                              aria-expanded="false"
                              aria-label="Toggle navigation"
                              onClick={() => navigate(opcao.link)}>
                              {opcao.label}
                           </button>
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