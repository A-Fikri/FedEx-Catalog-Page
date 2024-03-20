import "./index.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="first-div">
          <p className="text-1">
            Are you an existing Web Services or FedEx Ship Manager Server
            Customer? If so, you can still <br />
            access the{" "}
            <a
              href="https://www.fedex.com/en-us/developer.html"
              className="dev-link"
            >
              Developer Resource Center.
            </a>
          </p>
        </div>
        <div className="redirects">
          <a
            href="https://www.fedex.com/en-us/integration.html"
            className="redirect-links"
          >
            Integration Solutions
          </a>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp; |
          <a
            href="https://www.fedex.com/en-us/integration/support.html"
            className="redirect-links"
          >
            &nbsp;&nbsp;&nbsp;&nbsp; Support
          </a>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp; |
          <a
            href="https://www.fedex.com/en-my/home.html"
            className="redirect-links"
          >
            &nbsp;&nbsp;&nbsp;&nbsp; FedEx.com
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp; |
          <a
            href="https://www.fedex.com/en-my/terms-of-use.html"
            className="redirect-links"
          >
            &nbsp;&nbsp;&nbsp;&nbsp; Terms of Use
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp; |
          <a
            href="https://www.fedex.com/en-us/trust-center.html"
            className="redirect-links"
          >
            &nbsp;&nbsp;&nbsp;&nbsp; Security & Privacy
          </a>
        </div>
        <div className="trademark">
          <p className="trademark-text">
            © FedEx Corporate Services Inc. All rights reserved.
          </p>
        </div>
        <div className="country">
          <p className="country-text">🌐 Malaysia</p>
          <select className="dropdown">
            <option value="English">English</option>
          </select>
        </div>
      </div>
    </div>
  );
}
