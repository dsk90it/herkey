import LayoutStyles from '../assets/css/layout.module.css'

function Footer() {
  return (
    <footer className={LayoutStyles.footer}>
      <p>{new Date().getFullYear()} &copy; jobsforher</p>
      <ul>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">FAQ&apos;s</a>
        </li>
      </ul>
    </footer>
  )
}
export default Footer
