import SidebarStyles from '../assets/css/sidebar.module.css'

function Sidebar({ isOpen }) {
  return (
    <aside className={`${SidebarStyles.sidebar} ${isOpen && 'open'}`}>
      Sidebar
    </aside>
  )
}
export default Sidebar
