const Footer = () => {
   return (
      <>
         <footer className="navbar bg-dark text-center text-white">
            <div className="container justify-content-center pt-4 pb-0">
               <section className="">
                  <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                  ><i className="fab fa-facebook-f"></i
                  ></a>

                  <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                  ><i className="fab fa-twitter"></i
                  ></a>

                  <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                  ><i className="fab fa-google"></i
                  ></a>

                  <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                     <i className="fab fa-instagram"></i>
                  </a>

                  <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                  ><i className="fab fa-linkedin-in"></i
                  ></a>

                  <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                  ><i className="fab fa-github"></i
                  ></a>
               </section>
               <div className=" p-3">
                  © 2023 Copyright
               </div>
            </div>
         </footer>
      </>
   )
}
export default Footer;