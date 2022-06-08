import { Link, useLocation } from 'react-router-dom'

function importAllImages(context) {
  let images = {}
  context.keys().forEach((item) => {
    images[item.replace('./', '').replace('.svg', '')] = context(item)
  })
  return images
}

function getYear() {
  return new Date().getFullYear()
}

function Sidebar() {
  const location = useLocation().pathname
  const images = importAllImages(
    require.context('../../assets/images/icons/activities', false, /\.svg$/)
  )

  return (
    <div className="sidebar">
      <nav className="sidebar__navigation">
        <ul className="sidebar__menu">
          {Object.keys(images).map((key) => (
            <li key={key}>
              <Link
                to={`/activity/${key}`}
                className={`sidebar__menu-link 
                  ${
                    location === '/activity/' + key
                      ? 'sidebar__menu-link--active'
                      : ''
                  }
                `}
              >
                <img
                  src={images[key]}
                  alt={key}
                  className="sidebar__menu-image"
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <p className="sidebar__copyright">© SportSee 2020 - {getYear()}</p>
    </div>
  )
}

export default Sidebar
