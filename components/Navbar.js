import Link from 'next/link';
import styles from './Styles.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'; // Import useState

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Initialize state for the dropdown

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link className={styles.logo} href="/">
          RUN IT
        </Link>

        <ul className={styles.navLinks}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/Contact">Contact</Link>
          </li>
          <li>
            <Link href="/admin">Admin</Link>
          </li>
          <li>
            {/* User Symbol */}
            <div className={styles.userContainer} onClick={toggleDropdown}>
              <FontAwesomeIcon icon={faUser} />
              {isDropdownOpen && (
                // Dropdown Content
                <div className={styles.dropdown}>
                  <ul className={styles.dropdownList}>
                    <li className={styles.dropdownItem}>Settings</li>
                    <li className={styles.dropdownItem}>Logout</li>
                  </ul>
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
