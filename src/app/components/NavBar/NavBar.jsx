"use client"
import Link from 'next/link';
import React, { useEffect } from 'react';
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
  const pathname = usePathname();

  useEffect(() => {
    console.log('Current pathname:', pathname);
  }, [pathname]);

  

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
        {pathname === '/' ? (
        <div className={styles.navLinks}>
          {navLinks.map((link, index) => (
             <h3 key={index} className={styles['nav-link']}>
               <Link href={link.path}>{link.title}</Link>
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
