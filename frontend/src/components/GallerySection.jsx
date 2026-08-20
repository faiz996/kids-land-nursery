import "./GallerySection.css";

import gallery1 from "../assets/gallery-1.png";
import gallery2 from "../assets/gallery-2.png";
import gallery3 from "../assets/gallery-3.png";
import gallery4 from "../assets/gallery-4.png";

function GallerySection() {
  return (
    <section className="gallery-section" id="gallery">

      <div className="gallery-container">

        {/* Heading */}
        <div className="gallery-header">

          <span className="gallery-label">
            GALLERY
          </span>

          <h2 className="gallery-title">
            Life at Kids Land
          </h2>

        </div>


        {/* Gallery Images */}
        <div className="gallery-images">

          <div className="gallery-image-box">
            <img
              src={gallery1}
              alt="Kids Land outdoor activity"
            />
          </div>

          <div className="gallery-image-box">
            <img
              src={gallery2}
              alt="Kids Land learning activity"
            />
          </div>

          <div className="gallery-image-box">
            <img
              src={gallery3}
              alt="Kids Land children activity"
            />
          </div>

          <div className="gallery-image-box">
            <img
              src={gallery4}
              alt="Kids Land classroom"
            />
          </div>

        </div>


        {/* Button */}
        <div className="gallery-button-wrapper">

          <a
            href="#gallery"
            className="gallery-button"
          >
            <span>View Full Gallery</span>

            <span className="gallery-grid-icon">
              ▦
            </span>
          </a>

        </div>

      </div>


      {/* Photographer decoration */}
      <div className="gallery-photographer">
        📸
      </div>

      {/* Small decorative icons */}
      <div className="gallery-decoration gallery-decoration-one">
        ✨
      </div>

      <div className="gallery-decoration gallery-decoration-two">
        📚
      </div>

    </section>
  );
}

export default GallerySection;