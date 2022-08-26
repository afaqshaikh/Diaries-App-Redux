import "./index.css"

const Footer = ({position}) => {
    return (
        <div className={position === "fixed-bottom" ? "container-fluid p-4 bg-dark fixed-bottom":"container-fluid p-4 bg-dark "}>
            <div className="row ">
                <div className="col-lg-8 col-md-8 col-sm-6">
                    <h5 className="text-white fw-bold" >Developed By
                        <a className="site-link text-decoration-none fst-italic text-white fs-4 fw-bold"
                         rel="noreferrer"
                          target="_blank"
                           href="https://afaqueshaikh-portfolio.web.app"
                           >Developer Afaque</a>
                    </h5>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 site-icons text-end">
                    <a
                        title="facebook"
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.facebook.com/developerafaqueofficial"
                    >
                        <i className="fab fa-facebook text-white fs-3 "></i>
                    </a>
                    <a
                        title="github"
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/afaqshaikh"
                    >
                        <i className="fab fa-github text-white fs-3  ps-2"></i>
                    </a>
                    <a
                        title="linkedin"
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/muhammad-afaque-68a830202/"
                    >
                        <i className="fab fa-linkedin text-white fs-3 ps-2"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer