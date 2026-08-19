import Navbar from "./components/Navbar";
import PrincipalMessage from "./components/PrincipalMessage";
import VisionMission from "./components/VisionMission";
import AboutSection from "./components/AboutSection";
import LearningSection from "./components/LearningSection";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />

      <Home />

      <PrincipalMessage />

      <VisionMission />

      <AboutSection />

      <LearningSection />
    </>
  );
}

export default App;