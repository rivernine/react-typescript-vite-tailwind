import Header from "../components/common/Header"
import Footer from "../components/common/Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <section className="relative flex flex-col items-center w-full min-h-screen overflow-x-hidden">
      <header className="w-full">
        <Header />
      </header>
      <article className="w-full mt-20 mb-40 pb-60">
        <Outlet />
      </article>
      <footer className="absolute w-full bottom-0 h-60">
        <Footer />
      </footer>
    </section>
  )
}

export default Layout;