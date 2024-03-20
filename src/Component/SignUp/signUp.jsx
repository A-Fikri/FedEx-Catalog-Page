import "./index.css";

export default function SignUp() {
  return (
    <div className="sign-up-content">
      <p className="login-text">
        Enter your user ID and <br /> password to log in
      </p>
      <a href="https://www.fedex.com/secure-login/en-my/#/login-credentials">
        <button className="login-button">LOG IN</button>
      </a>
      <a href="https://www.fedex.com/fcl/web/jsp/forgotPassword.jsp?appName=fclfsm&locale=en_us">
        <p className="forgot-password">FORGOT PASSWORD OR USER ID?</p>
      </a>
      <hr className="line" />
      <p className="signup-text">
        Get access to FedEx APIs by creating a user ID.
      </p>
      <a href="https://www.fedex.com/global/choose-location.html?cu=https://developer.fedex.com/api/en-my">
        <button className="signup-button">SIGN UP</button>
      </a>
    </div>
  );
}
