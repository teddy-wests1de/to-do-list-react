import { useState } from "react";
import logo from "./logoipsum-296.svg";
export function Header() {
  const [isOpen, setIsOpen] = useState(true);

  function openMenu() {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="site-name">
        <h2 className="app-name">
          To do List
        </h2>
      </div>
      <nav className="nav">
        <ul className={isOpen ? 'menu  hidden' : 'menu'}>
          <li className="nav-item"><a href="#home" className="nav-link">home</a></li>
          <li className="nav-item"><a href="#history" className="nav-link">history</a></li>
          <li className="nav-item"><a href="#categories" className="nav-link">categories</a></li>
          <li className="nav-item"><a href="#profile" className="nav-link">profile</a></li>
          <li className="nav-item"><a href="#settings" className="nav-link">settings</a></li>
        </ul>
        {/* {!isOpen ? <ul className="menu">
          <li className="nav-item"><a href="#home" className="nav-link">home</a></li>
          <li className="nav-item"><a href="#history" className="nav-link">history</a></li>
          <li className="nav-item"><a href="#categories" className="nav-link">categories</a></li>
          <li className="nav-item"><a href="#profile" className="nav-link">profile</a></li>
          <li className="nav-item"><a href="#settings" className="nav-link">settings</a></li>
        </ul> : ''} */}
        <button className="menu-btn" onClick={openMenu}><i className={isOpen ? "fa-solid fa-bars" : "fa-sharp fa-solid fa-xmark"}></i></button>
      </nav>
    </header>
  );
}
