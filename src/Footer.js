import React from "react";
import PortfolioModal1 from "./modals/PortfolioModal1";
import PortfolioModal2 from "./modals/PortfolioModal2";
import PortfolioModal3 from "./modals/PortfolioModal3";
import PortfolioModal4 from "./modals/PortfolioModal4";
import PortfolioModal5 from "./modals/PortfolioModal5";
import PortfolioModel6 from "./modals/PortfolioModal6";

import PortfolioModel from "./modals/PortfolioModel";


const Footer= ()=>{
    return(
        <div>

        <footer className="footer text-center">
            <div className="container">
                <div className="row">
                   
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            2215 John Daniel Drive
                            <br />
                            Clark, MO 65243
                        </p>
                    </div>
                   
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-dribbble"></i></a>
                    </div>
                    
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">About Freelancer</h4>
                        <p className="lead mb-0">
                            Freelance is a free to use, MIT licensed Bootstrap theme created by
                            <a href="http://startbootstrap.com">Start Bootstrap</a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        
        <div className="copyright py-4 text-center text-white">
            <div className="container"><small>Copyright &copy; Your Website 2022</small></div>
        </div>


       {/* <PortfolioModal1 title="LOG CABIN"/>
        <PortfolioModal2 titlr="TASTY CAKE"/>
        <PortfolioModal3 title="CIRCUS TENT"/>
        <PortfolioModal4 title="CONTROLLER"/>
        <PortfolioModal5 title="LOCKED SAFE"/>
        <PortfolioModel6 title="SUBMARINE"/>  */}

    
        <PortfolioModel idd= "portfolioModal1" title="LOG CABIN" desc="This cabin in comfortable" img="assets/img/portfolio/cabin.png"/>
        <PortfolioModel idd= "portfolioModal2" title="TASTY CAKE" desc="Swrawperry flavour cake" img="assets/img/portfolio/cake.png"/>
        <PortfolioModel idd= "portfolioModal3" title="CIRCUS TENT" desc="This is Circus Tent" img="assets/img/portfolio/circus.png"/>
        <PortfolioModel idd= "portfolioModal4" title="CONTROLLER" desc="GTA 5 game" img="assets/img/portfolio/game.png"/>
        <PortfolioModel idd= "portfolioModal5" title="LOCKED SAFE" desc="Strongest Safe is here!!" img="assets/img/portfolio/safe.png"/>
        <PortfolioModel idd= "portfolioModal6" title="SUBMARINE" desc="New Submariane" img="assets/img/portfolio/submarine.png"/>

        </div>
    )
}

export default Footer;