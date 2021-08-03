import "./../Sass/components/footer.scss";
import logoWhite from "./../images/safhir-logo-white.png";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="footer-wrapper">
          <div className="footer-section">
            <img src={logoWhite} alt="" className="footer-section-logo" />
          </div>
          <div className="footer-wrapper-1">
            <p className="footer-section-text space">HL7 FHIR R4</p>
            <p className="footer-section-text">Azure FHIR</p>
          </div>
          <div className="footer-wrapper-2">
            <p className="footer-section-text">© 2020-2021 - Onyx Health</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
