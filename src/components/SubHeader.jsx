function SubHeader() {
  return (
    <div className="w-full sticky top-16 z-10 p-3 bg-white text-xs flex overflow-x-auto overflow-y-hidden  lg:hidden gap-2 justify-evenly text-gray-500">
      <a className="truncate" href="#">
        My Inventory
      </a>{' '}
      |{' '}
      <a className="truncate" href="#">
        Company Profile
      </a>{' '}
      |{' '}
      <a className="truncate" href="#">
        All Users
      </a>{' '}
      |{' '}
      <a className="truncate font-semibold text-accent-lime" href="#">
        My Account
      </a>
    </div>
  )
}
export default SubHeader
