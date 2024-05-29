import React, { useRef } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../pages/AuthContext'; // Importa el contexto de autenticación
import '../../styles/header.css';
import { RiLogoutCircleRLine } from 'react-icons/ri';

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: '/rent',
    display: 'Rentar'
  },
  {
    path: "/about",
    display: "Nosotros",
  },
  {
    path: "/cars",
    display: "Carros",
  },
  {
    path: "/blogs",
    display: "Blogs",
  },
  {
    path: "/contact",
    display: "Contacto",
  }
];

const Header = () => {
  const { user, logout } = useAuth(); // Obtén el usuario del contexto de autenticación y la función de logout
  const menuRef = useRef(null);
  const navigate = useNavigate(); // Utiliza useNavigate para redireccionar en lugar de useHistory

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  const handleLogout = () => {
    logout(); // Cierra sesión
    navigate("/login"); // Redirige a la página de inicio de sesión utilizando navigate
  };

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>¿Necesitas ayuda?</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i> +57 3023713081
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                {user ? (
                  <span className="d-flex align-items-center gap-1 user-info">
                    <span className="user-greeting">Hola, {user.name || user.email}</span>
                    <button onClick={handleLogout} className="logout-btn">
                      <span className="logout-text">Cerrar Sesión</span>
                      <span className="logout-icon"><i className="ri-logout-box-r-line"></i></span>
                    </button>
                  </span>
                ) : (
                  <>
                    <Link to="/login" className="d-flex align-items-center gap-1">
                      <i className="ri-login-circle-line"></i> Login
                    </Link>
                    <Link to="/signup" className="d-flex align-items-center gap-1">
                      <i className="ri-user-line"></i> Register
                    </Link>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className="d-flex align-items-center gap-2">
                    <i className="ri-car-line"></i>
                    <span>
                      Vehicle <br /> Hub
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Barranquilla</h4>
                  <h6>Colombia</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className="d-flex align-items-center justify-content-end"
            >
              <button className="header__btn btn">
                <Link to="/contact">
                  <i className="ri-phone-line"></i> Llamanos
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Buscar..." />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
