import { IoLogoInstagram, IoMdMail, IoLogoWhatsapp, IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
const Footer = () => {
   return (
      <>
         <footer id="rodape" className="footer  bg-dark text-center text-white">
            <div className="container justify-content-center pt-4 pb-0">
               <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="#!" role="button">
                  <IoLogoInstagram />
               </a>
               <a className="btn btn-outline-light btn-floating m-1" href="mailto:h.grassi.hcg@gmail.com" role="button">
                  <IoMdMail />
               </a>
               <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="#!" role="button">
                  <IoLogoWhatsapp />
               </a>
               <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="#!" role="button">
                  <IoLogoGithub />
               </a>
               <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="#!" role="button">
                  <IoLogoLinkedin />
               </a>
               <div className="p-3">
                  © 2023 Copyright
               </div>
            </div>
         </footer>
      </>
   )
}
export default Footer;