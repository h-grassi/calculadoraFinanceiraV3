import ComponentesControle from "../ComponentesControle";
import logo from '../assets/logoTeste2.svg'
import { BiCaretDown } from "react-icons/bi";

const Navheader = ({ setAba }) => {
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
                     {ComponentesControle.map(opcao => (
                        <li key={opcao.valor} className={`nav-item btn-outline-success p-0 m-0 ${opcao.dropdown ? ' dropdown' : ''}`}>
                           <button className="btn"
                              data-bs-target="#navresponsiva"
                              aria-controls="navresponsiva"
                              aria-label="Toggle navigation"
                              data-bs-toggle={`${opcao.dropdown ? 'dropdown' : 'collapse'}`}
                              onClick={opcao.dropdown ? (e) => e.stopPropagation() : () => setAba(opcao.valor)}>
                              {opcao.label}
                              {opcao.dropdown ? (<BiCaretDown />) : ''}
                           </button>
                           {opcao.dropdown && (
                              <ul className="dropdown-menu border-success" data-bs-toggle="dropdown">
                                 {opcao.itens.map(submenu => (
                                    <li key={submenu.valor}>
                                       <button className="btn btn-outline-success dropdown-item"
                                          data-bs-toggle="collapse"
                                          data-bs-target="#navresponsiva"
                                          onClick={() => setAba(submenu.valor)}>{submenu.label}
                                       </button>
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