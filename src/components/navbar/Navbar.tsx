import { useState } from 'react';
import './navbar.css';

export const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className='container-logo-nav w-50 w-sm-75' >
          <img className='img-logo-nav' src="/figura-panda-transparent.png" alt="panda-logo" />
          <img className='img-logo-nav' src="/letras-panda-transparent.png" alt="panda-letters" />
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav w-100 h-100">
            {['Servicios Técnicos', 'Café', 'Capacitaciones'].map((item, index) => (
              <li
                key={index}
                className={`nav-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleItemClick(index)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
