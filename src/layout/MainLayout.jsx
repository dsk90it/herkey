import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

function MainLayout({ children }) {
  return (
    <>
      <Header />

      <main>
        <Sidebar />
        {children}
      </main>
    </>
  )
}
export default MainLayout
