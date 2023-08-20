import HeaderStyles from '../assets/css/header.module.css'
import { IconMenu, IconMenu2 } from './Icons'
import content from '../data/content'

function Header({ handleClick }) {
  const { navbar } = content

  return (
    <header className={HeaderStyles.appHeader}>
      <div className={HeaderStyles.appHeader_Logo}>
        <a href="/">
          <img src={navbar.logo} alt="Jobs for Her" />
        </a>
        <button type="button" onClick={handleClick}>
          <IconMenu iconClass="block lg:hidden" />
          <IconMenu2 iconClass="hidden lg:block" />
        </button>
      </div>

      <ul className={HeaderStyles.appHeader_Menu}>
        {navbar.menus?.map((item) => (
          <li key={item.id}>
            <a href={item.url}>{item.text}</a>
          </li>
        ))}
      </ul>

      {navbar.secondaryLogo && (
        <img
          src={navbar.secondaryLogo?.img}
          alt={navbar.secondaryLogo?.name}
          className="w-10 h-10 object-cover rounded-full"
        />
      )}
    </header>
  )
}
export default Header
