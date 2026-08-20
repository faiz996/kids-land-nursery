import Navbar from "./components/Navbar";
import PrincipalMessage from "./components/PrincipalMessage";
import VisionMission from "./components/VisionMission";
import AboutSection from "./components/AboutSection";
import LearningSection from "./components/LearningSection";
import Home from "./pages/Home";
import AdmissionSection from "./components/AdmissionSection";
import GallerySection from "./components/GallerySection";

function App() {
  return (
    <>
      <Navbar />

      <Home />

      <PrincipalMessage />

      <VisionMission />

      <AboutSection />

      <LearningSection />

      <AdmissionSection />

      <GallerySection />
    </>
  );
}

export default App;