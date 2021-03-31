import Link from 'next/link';
import styles from '../styles/Nav.module.css';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About Us</Link>
        </li>
        <li>
          <Link href='/contact-us'>Contact Us Man!</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
