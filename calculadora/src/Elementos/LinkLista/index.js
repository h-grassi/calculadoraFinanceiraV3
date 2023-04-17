const LinkLista = ({props}) =>{
  return(
    <div className="justify-content-center">
      <nav aria-label="breadcrumb mx-auto">
        <ol class="breadcrumb">
          {props.map((item)=>(
            <li className="breadcrumb-item">
              <a href={item.href}>{item.label}</a>
            </li>
          ))}        
        </ol>
      </nav>
    </div>
  )
}
export default LinkLista;