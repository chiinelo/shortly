import BoostPage from "./BoostPage";
import CardsSection from "./CardsSection";
import Header from "./Header";
import NavBar from "./NavBar";
import "../styles/cardSection.module.css";
import "../styles/boostPage.module.css";
import "../styles/header.module.css";
import "../styles/shortenSection.module.css";
import ShortenSection from "./ShortenSection";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <ShortenSection />
      <CardsSection />
      <BoostPage />
      <Footer />
    </div>
  );
};

export default LandingPage;
