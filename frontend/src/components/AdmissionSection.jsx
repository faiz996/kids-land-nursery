import { ArrowRight } from "lucide-react";
import "./AdmissionSection.css";

function AdmissionSection() {
  return (
    <section className="admission-section" id="admission">

      {/* Decorative student character */}
      <div className="admission-character">
        <div className="character-globe">
          🌎
        </div>

        <div className="character-cap">
          🎓
        </div>

        <div className="character-book">
          📖
        </div>
      </div>

      {/* Paper airplane */}
      <div className="admission-plane">
        ✈
      </div>

      {/* Sun */}
      <div className="admission-sun">
        ☀
      </div>

      <div className="admission-container">

        <span className="admission-label">
          ADMISSION
        </span>

        <h2 className="admission-title">
          Joining Our Family
        </h2>

        <p className="admission-description">
          We make the enrollment process simple and welcoming
          for new families. Start your
          <br className="admission-desktop-break" />
          child's journey with us today.
        </p>

        <a
          href="#admission-steps"
          className="admission-button"
        >
          <span>View Admission Steps</span>

          <ArrowRight size={16} />
        </a>

      </div>

    </section>
  );
}

export default AdmissionSection;