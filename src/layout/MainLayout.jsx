import LayoutStyles from '../assets/css/layout.module.css'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

function MainLayout({ children }) {
  return (
    <>
      <Header />

      <main className={LayoutStyles.wrapper}>
        <Sidebar />
        <div className={LayoutStyles.wrapperContent}>{children}</div>
      </main>
    </>
  )
}
export default MainLayout
