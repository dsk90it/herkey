import SidebarStyles from '../assets/css/sidebar.module.css'

function SidebarMenuItem({ icon, text, url, active }) {
  return (
    <a
      className={`${SidebarStyles.menuItem} ${
        active ? SidebarStyles.active : ''
      }`}
      href={url}
    >
      {icon}
      {text}
    </a>
  )
}
export default SidebarMenuItem
