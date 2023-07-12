import { Link } from 'react-router-dom';
import nav from './nav.module.css';

const navbar = () => (
  <nav className={nav.nav}>
    <div className={nav.cont}>
      <h2 className={nav.logo}>Bookstore CMS</h2>
      <ul className={nav.ul}>
        <li className={nav.li}>
          <Link to="/" className={nav.link}>Books</Link>
        </li>
        <li className={nav.li}>
          <Link to="/categories" className={nav.link}>Categories</Link>
        </li>
      </ul>
    </div>
    <i className="bx bx-md bx-user" />
  </nav>
);

export default navbar;
