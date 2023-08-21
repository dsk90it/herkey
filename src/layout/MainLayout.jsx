import { useState } from 'react'
import LayoutStyles from '../assets/css/layout.module.css'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import SubHeader from '../components/SubHeader'

function MainLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true)

  return (
    <>
      <Header handleClick={() => setSidebarOpen(!isSidebarOpen)} />

      <SubHeader />

      <main className={LayoutStyles.wrapper}>
        <Sidebar isOpen={isSidebarOpen} />

        <div
          className={`${LayoutStyles.content} ${
            !isSidebarOpen ? LayoutStyles.expand : ''
          }`}
        >
          {children}

          <Footer />
        </div>
      </main>
    </>
  )
}
export default MainLayout
