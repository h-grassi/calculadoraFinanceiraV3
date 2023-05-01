import { GrPrevious, GrNext } from "react-icons/gr";
const Carrosel = (props) => {

  return (
    <div id="carrosel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner h-100">
        {props.item}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carrosel" data-bs-slide="prev">
        <GrPrevious />
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carrosel" data-bs-slide="next">
        <GrNext />
      </button>
    </div>
  )
}
export default Carrosel;