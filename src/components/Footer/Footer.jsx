import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <ul>
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">Phone service</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Privacy policy</a>
          </li>
          <li>
            <a href="#">Purchase conditions</a>
          </li>
          <li>
            <a href="#">Client reviews</a>
          </li>
          <li>
            <a href="#">Cookies</a>
          </li>
        </ul>
      </div>
      <div className="footer-right">
                <div className="footer-newsletter">
                    <label className="newsletter-label" htmlFor="newsletter-email">Newsletter</label>
                    <input type="text" className="newsletter-email" placeholder="Email" name="newsletter-email" id="newsletter-email"/>
                    <input type="submit" className="submit-mail" value="Subscribe"/>
                </div>
                <div className="redes"> 
                    <a href="#"><i className="bi bi-instagram"></i></a>
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-twitter"></i></a>
                    <a href="#"><i className="bi bi-whatsapp"></i></a>
                </div>
            </div>
    </footer>
  );
}
