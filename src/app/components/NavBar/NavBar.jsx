"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './NavBar.module.css'; 
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import MenuOverlay from '../MenuOverlay/MenuOverlay'


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

  // useEffect(() => {
  //   console.log('Current pathname:', pathname);
  // }, [pathname]);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  

  return (
    <nav className={styles.navbar}>
      <div className={styles.profile}>
          <Image 
            src="/Profile.jpeg" 
            alt="profileImage"
            width={80} 
            height={80}
            className={styles.profileImage}
          />
          <h1>My name</h1>
        </div>

        {navbarOpen && (
        <div className={styles.overlay}>
          <MenuOverlay links={navLinks} />
        </div>
      )}

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
          <p>links to social</p>
        </div>
      )}
       
    </nav>
  );
};

export default Navbar;
