import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <p>copyright @2024</p>
      <Link to="/ethics">TERMS AND CONDITION</Link>
      <p>CONTACT US</p>
      <p>DECO3801/7381</p>
    </div>
  )
}

export default Footer;