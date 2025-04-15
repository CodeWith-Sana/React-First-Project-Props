import React from 'react'
import logo from '../Assets/logo.svg';

export function NavbarComponent() {
  return (
    <div>
      <header className='head-div'>
        <div className="p-container">
        <img src={logo} alt="Logo" width="50" />
        <h2>React Website</h2>
        </div>
        <div className="container-1">
          <p>Code it with React. Deliver it with Speed.</p>
        </div>
      </header>
    </div>
  )
}
export default NavbarComponent;