function Footer() {
  return (
    <div className="flex text-sm justify-between mt-auto bg-white p-4 shadow-[0_0_8px_0_#c2c2c2] -mx-4 lg:-mx-6">
      <p>{new Date().getFullYear()} &copy; jobsforher</p>
      <ul className="inline-flex gap-4">
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">FAQ's</a>
        </li>
      </ul>
    </div>
  )
}
export default Footer
