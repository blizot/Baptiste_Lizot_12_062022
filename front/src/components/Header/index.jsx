/**
 * Creates the app's Header
 * contains the main navigation links
 * 
 * @param { String } location
 * 
 * @returns { React.Component }
 */

import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'

function Header() {
  const location = useLocation().pathname

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="SportSee" className="header__logo" />
      </Link>

      <nav className="header__navigation">
        <ul className="header__menu">
          <li>
            <Link
              to="/"
              className={`header__menu-link 
                ${location === '/' ? 'header__menu-link--active' : ''}
              `}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/user"
              className={`header__menu-link 
                ${location.includes('/user') ? 'header__menu-link--active' : ''}
              `}
            >
              Profil
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className={`header__menu-link 
                ${location === '/settings' ? 'header__menu-link--active' : ''}
              `}
            >
              Réglages
            </Link>
          </li>
          <li>
            <Link
              to="/community"
              className={`header__menu-link 
                ${location === '/community' ? 'header__menu-link--active' : ''}
              `}
            >
              Communauté
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
