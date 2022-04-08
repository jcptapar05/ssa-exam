import "./App.scss";
import DownloadBtn from "./component/DownloadBtn";
import Meet from "./component/Meet";
import Slider from "./component/Slider";
import Discover from "./component/Discover";
import Augmented from "./component/Augmented";
import EndlessPossibility from "./component/EndlessPossibility";
import DeepDive from "./component/DeepDive";
import Action from "./component/Action";
import Footer from "./component/Footer";
import SubFooter from "./component/SubFooter";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Meet />
      <Discover />
      <Augmented />
      <EndlessPossibility />
      <DeepDive />
      <Action />
      <SubFooter />
      <Footer />
    </>
  );
}

export default App;
