// MenuOverlay.js
import Link from 'next/link';

const MenuOverlay = ({ links }) => {
  return (
    <ul >
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.path}>
            <p >{link.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
