import Footer from "../../Component/Footer/footer";
import Navbar from "../../Component/Navbar/navbar";
import APICatalog from "../../Component/APICatalog/apiCatalog";

export default function APICatalogPage() {
  return (
    <>
      <Navbar />
      <div className="Page">
        <APICatalog />
        <Footer />
      </div>
    </>
  );
}
