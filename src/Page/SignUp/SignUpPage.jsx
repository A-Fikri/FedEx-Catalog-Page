import Footer from "../../Component/Footer/footer";
import Navbar from "../../Component/Navbar/navbar";
import SignUp from "../../Component/SignUp/signUp";

export default function SignUpPage() {
  return (
    <>
      <Navbar />
      <div className="SignUpPage">
        <SignUp />
        <Footer />
      </div>
    </>
  );
}
