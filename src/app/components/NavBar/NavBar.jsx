"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './NavBar.module.css'; 
import Image from 'next/image'
import { usePathname } from 'next/navigation';


const navLinks = [
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Interests',
    path: '#interests',
  },
  {
    title: 'Contact',
    path: '#contact',
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const pathname = usePathname();

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  

  return (
    <nav className={styles.navbar}>
      <div className={styles.profile}>
      <Link href="/">
     
        <Image 
          src="/Profile.jpeg" 
          alt="profileImage"
          width={80} 
          height={80}
          priority
          className={styles.profileImage}
        />
      
    </Link>
          <h1 className={styles.menuTitle}>María Victoria Correas</h1>
        </div>

        {pathname === '/' ? (
        <div className={styles.navLinks}>
          {navLinks.map((link, index) => (
             <h3 key={index} className={styles['nav-link']}>
               <Link href={link.path} onClick={toggleNavbar}>{link.title}</Link>
             </h3>
          ))}
        </div>
      ) : (
        <div>
          <p className={styles.dynamicPageText}>Embrace the extra mile</p>
        </div>
      )}
       
    </nav>
  );
};

export default Navbar;
