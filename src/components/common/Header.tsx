import React from "react"

const NavBar: React.FC<{}> = () => {
  return (
    <div className="flex flex-grow flex-shrink-0 w-full max-w-5xl basis-0 px-2 py-5 items-center gap-24">
      <a href="/">
        {/* <img src={'/images/logo-with-text.svg'} alt="Logo" className="w-32 h-8" /> */}
      </a>
      <nav className="flex items-start gap-10">
        <a href="#!">
          <span>MENU 1</span>
        </a>
        <a href="#!">
          <span>MENU 2</span>
        </a>
        <a href="#!">
          <span>MENU 3</span>
        </a>
        <a href="#!">
          <span>MENU 4</span>
        </a>
      </nav>
    </div>
  )
}

export default function Header() {

  return (
    <section className="flex justify-center items-center w-full">
      <NavBar />
    </section>
  )
}