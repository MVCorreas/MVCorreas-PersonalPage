"use client"
import React, { useState } from "react";
import styles from "./MenuOverlay.module.css"; // Import CSS module

const MenuOverlay = ({ links }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.menuOverlay}>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        ☰ 
      </div>
      {menuOpen && (
        <ul className={styles.menuLinks}>
          {links.map((link, index) => (
           <li key={index}>
           <a href={link.path} className={styles.link}>
             {link.title}
           </a>
         </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuOverlay;
