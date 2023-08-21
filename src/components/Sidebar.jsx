import SidebarStyles from '../assets/css/sidebar.module.css'
import { IconChevron } from './Icons'
import SidebarMenuItem from './SidebarMenuItem'
import content from '../data/content'

function Sidebar({ isOpen }) {
  return (
    <aside
      className={`${SidebarStyles.sidebar} ${isOpen ? SidebarStyles.open : ''}`}
    >
      <section className={SidebarStyles.header}>
        <div>
          <img
            src={content.sidebar?.clientInfo.logo}
            alt={content.sidebar?.clientInfo.name}
          />
          <span>Hello</span>
        </div>
        <p>
          <span>{content.sidebar?.clientInfo.name}</span>
          <button type="button">
            <IconChevron />
          </button>
        </p>
      </section>

      <ul className={SidebarStyles.menu}>
        {content.sidebar?.menus.map((item) => (
          <li key={item.id}>
            <SidebarMenuItem
              active={item.isActive}
              url={item.url}
              text={item.text}
              icon={<item.icon />}
            />
          </li>
        ))}
      </ul>

      <p className={SidebarStyles.footer}>
        Contact us-
        <br />
        Email: admin@jobsforher.com
      </p>
    </aside>
  )
}
export default Sidebar
