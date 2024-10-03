import Header from "./components/Header/Header";
import Transform from "./components/Transform/Transform";
import Standout from "./components/Standout/Standout";
import Feedback from "./components/Feedback/Feedback";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
      <>
        <Header />
          <main>
            <Transform />
            <Standout />
            <Feedback />
            <Gallery />
          </main>
        <Footer />
      </>
  );
}
