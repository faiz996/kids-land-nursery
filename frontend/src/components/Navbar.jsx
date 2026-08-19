// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import "./Navbar.css";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navItems = [
//     "Home",
//     "About Us",
//     "Learning",
//     "Admission",
//     "Gallery",
//     "Newsletter",
//   ];

//   const getId = (item) =>
//     item.toLowerCase().replace(/\s+/g, "-");

//   return (
//     <header className="site-header">
//       <div className="navbar-container">

//         {/* Logo */}
//         <a href="#home" className="kids-logo">
//           <div className="logo-arabic">حضانة</div>

//           <div className="logo-main">
//             أرض الأطفال
//           </div>

//           <div className="logo-english">
//             Kids Land
//           </div>

//           <div className="logo-nursery">
//             nursery
//           </div>

//           <div className="logo-leaf">✦</div>
//         </a>

//         {/* Mobile Menu Button */}
//         <button
//           className="mobile-menu-button"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Open navigation menu"
//         >
//           {menuOpen ? <X size={25} /> : <Menu size={25} />}
//         </button>

//         {/* Navigation */}
//         <nav className={`main-navigation ${menuOpen ? "show" : ""}`}>
//           {navItems.map((item, index) => (
//             <a
//               key={item}
//               href={`#${getId(item)}`}
//               className={index === 0 ? "nav-link active" : "nav-link"}
//               onClick={() => setMenuOpen(false)}
//             >
//               {item}
//             </a>
//           ))}
//         </nav>

//       </div>
//     </header>
//   );
// }

// export default Navbar;

import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About Us",
    "Learning",
    "Admission",
    "Gallery",
    "Newsletter",
  ];

  const getId = (item) =>
    item.toLowerCase().replace(/\s+/g, "-");

  return (
    <header className="site-header">
      <div className="navbar-container">

        <a href="#home" className="kids-logo">
          <img
            src={logo}
            alt="Kids Land Nursery"
            className="logo-image"
          />
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation menu"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        <nav className={`main-navigation ${menuOpen ? "show" : ""}`}>
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${getId(item)}`}
              className={
                index === 0
                  ? "nav-link active"
                  : "nav-link"
              }
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}

export default Navbar;