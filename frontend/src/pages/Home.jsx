
import { ArrowRight, Sparkles, Send } from "lucide-react";
import "./Home.css";

import heroCard from "../assets/kids-land-hero.png";
import flowerChild from "../assets/flower-child.png";
import trophyIcon from "../assets/trophy.png";
import teacherIcon from "../assets/Teacher.png";
import heartIcon from "../assets/Parent.png";
import jumpingKids from "../assets/jumping-image.png";

function Home() {
  return (
    <main className="home-page">

      {/* HERO SECTION */}
      <section className="hero-section" id="home">

        <div className="hero-container">

          {/* LEFT — EXACT IMAGE */}
          <div className="hero-card-image">
            <img
              src={heroCard}
              alt="Welcome to Kids Land Nursery"
            />

            {/* Register button overlay */}
            <a
              href="#admission"
              className="interest-button"
            >
              Register Your Interest
              <span className="interest-arrow">
                <ArrowRight size={15} />
              </span>
            </a>
          </div>


          {/* RIGHT IMAGE COLLAGE */}
          <div className="hero-images">

            {/* Flower Child */}
            <div className="hero-image flower-image">
              <img
                src={flowerChild}
                alt="Child in flower costume"
                className="hero-photo"
              />
            </div>


            {/* Jumping Children */}
            <div className="hero-image jumping-image">
                <img
                    src={jumpingKids}
                    alt="Jumping children"
                    className="hero-photo"
                />
            </div>
            
            {/* Decorations */}
            <Sparkles
              className="hero-sparkle sparkle-one"
              size={22}
            />

            <Sparkles
              className="hero-sparkle sparkle-two"
              size={18}
            />

            <Send
              className="hero-plane"
              size={25}
            />

          </div>

        </div>


        {/* STATISTICS CARD */}
        <div className="statistics-card">

          <div className="stat-item">
            <div className="stat-icon stat-purple">
                <img
                    src={trophyIcon}
                    alt="Experience"
                />
            </div>

            <div>
              <strong>10+</strong>
              <span>
                YEARS IN
                <br />
                EXPERIENCE
              </span>
            </div>
          </div>


          <div className="stat-divider"></div>


          <div className="stat-item">
            <div className="stat-icon stat-green">
                <img src={teacherIcon} alt="Teacher to student ratio" />
            </div>

            <div>
              <strong>1:8</strong>
              <span>
                TEACHER-TO-
                <br />
                STUDENT
                <br />
                RATIO
              </span>
            </div>
          </div>


          <div className="stat-divider"></div>


          <div className="stat-item">
            <div className="stat-icon stat-pink">
                <img src={heartIcon} alt="Parent satisfaction" />
            </div>

            <div>
              <strong>98%</strong>
              <span>
                PARENT
                <br />
                SATISFACTION
              </span>
            </div>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;