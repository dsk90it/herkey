import { useState } from 'react'
import LayoutStyles from '../assets/css/layout.module.css'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

function MainLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true)

  return (
    <>
      <Header handleClick={() => setSidebarOpen(!isSidebarOpen)} />

      <main className={LayoutStyles.wrapper}>
        <Sidebar isOpen={isSidebarOpen} />
        <div className={LayoutStyles.wrapperContent}>{children}</div>
      </main>
    </>
  )
}
export default MainLayout
