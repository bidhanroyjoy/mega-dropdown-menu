import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { Link } from "react-scroll";
import Car from "../assets/car.png";
import Logo from "../assets/logo.png";
import Cloth from "../assets/cloth.png";
import Gym from "../assets/gymn.png";
import Helmet from "../assets/helmet.png";

const Navbar = () => {
  return (
    <div className="main-wrapper">
      <div className="navbar">
        <div className="brand-and-icon">
          <a href="/">
            <img src={Logo} alt="Walcart" />
          </a>

          <button type="button" className="navbar-toggler">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div className="navbar-collapse">
          <ul className="navbar-nav">
            <li>
            <Link to="/">home</Link>
            </li>
            <li>
              <a href="#" className="menu-link">
                electronics
                <span className="drop-icon">
                  <i className="fas fa-chevron-down"></i>
                </span>
              </a>
              <div className="sub-menu">
                <div className="sub-menu-item">
                  <h4>top categories</h4>
                  <ul>
                    <li>
                      <Link to="/accessories">cell phones & accessories</Link>
                    </li>
                    <li>
                      <Link to="/tv">smart tv</Link>
                    </li>
                    <li>
                      <Link to="/gadget">Computer & Laptop</Link>
                    </li>
                    <li>
                      <a href="camera">digital cameras</a>
                    </li>
                    <li>
                      <a href="games">video games & accessories</a>
                    </li>
                  </ul>
                </div>
                <div className="sub-menu-item">
                  <h4>other categories</h4>
                  <ul>
                    <li>
                      <Link to="/iphone">iphone</Link>
                    </li>
                    <li>
                      <Link to="/speaker">speakers</Link>
                    </li>
                    <li>
                      <a href="device">samsung devices</a>
                    </li>
                    <li>
                      <a href="headphone">audio & headphones</a>
                    </li>
                    <li>
                      <a href="vechile">vehicles electronics & GPS</a>
                    </li>
                  </ul>
                </div>
                <div className="sub-menu-item">
                  <h2>all essential devices and tools for home</h2>
                  <button type="button" className="btn">
                    shop here
                  </button>
                </div>
                <div className="sub-menu-item">
                  <img src={Car} alt="product image" />
                </div>
              </div>
            </li>

            <li>
              <a href="#" className="menu-link">
                fashion
                <span className="drop-icon">
                  <i className="fas fa-chevron-down"></i>
                </span>
              </a>
              <div className="sub-menu">
                <div className="sub-menu-item">
                  <h4>top categories</h4>
                  <ul>
                    <li>
                      <Link to="/cloth">men's clothing</Link>
                    </li>
                    <li>
                      <Link to="/wcloth">women's clothing</Link>
                    </li>
                    <li>
                      <a href="shoes">men's shoes</a>
                    </li>
                    <li>
                      <a href="women's shoes">women's shoes</a>
                    </li>
                    <li>
                      <a href="deal">clothing deals</a>
                    </li>
                  </ul>
                </div>

                <div className="sub-menu-item">
                  <h4>other categories</h4>
                  <ul>
                    <li>
                      <a href="jewelry">fine jewelry</a>
                    </li>
                    <li>
                      <a href="fashion">fashion jewelry</a>
                    </li>
                    <li>
                      <a href="men">men's accessories</a>
                    </li>
                    <li>
                      <a href="handbag">handbags & bags</a>
                    </li>
                    <li>
                      <a href="kid">kid's clothing</a>
                    </li>
                  </ul>
                </div>

                <div className="sub-menu-item">
                  <h2>stylish and modern fashion clothing</h2>
                  <button type="button" className="btn">
                    shop here
                  </button>
                </div>

                <div className="sub-menu-item">
                  <img src={Cloth} alt="product image" />
                </div>
              </div>
            </li>

            <li>
              <a href="#" className="menu-link">
                health & beauty
                <span className="drop-icon">
                  <i className="fas fa-chevron-down"></i>
                </span>
              </a>
              <div className="sub-menu">
                <div className="sub-menu-item">
                  <h4>top categories</h4>
                  <ul>
                    <li>
                      <a href="makeup">makeup</a>
                    </li>
                    <li>
                      <a href="healthcare">health care</a>
                    </li>
                    <li>
                      <a href="fragrance">fragrance</a>
                    </li>
                    <li>
                      <a href="hair">hair care & stylings</a>
                    </li>
                    <li>
                      <a href="manicure&pedicure">manicure & pedicure</a>
                    </li>
                  </ul>
                </div>

                <div className="sub-menu-item">
                  <h4>other categories</h4>
                  <ul>
                    <li>
                      <a href="skincare">skin care</a>
                    </li>
                    <li>
                      <a href="vitamins">vitamins</a>
                    </li>
                    <li>
                      <a href="visioncare">vision care</a>
                    </li>
                    <li>
                      <a href="oralcare">oral care</a>
                    </li>
                    <li>
                      <a href="shaving&hair">shaving & hair removal</a>
                    </li>
                  </ul>
                </div>

                <div className="sub-menu-item">
                  <h2>the latest product is here</h2>
                  <button type="button" className="btn">
                    shop here
                  </button>
                </div>

                <div className="sub-menu-item">
                  <img src={Gym} alt="product image" />
                </div>
              </div>
            </li>

            <li>
              <a href="#" className="menu-link">
                sports
                <span className="drop-icon">
                  <i className="fas fa-chevron-down"></i>
                </span>
              </a>
              <div className="sub-menu">
                <div className="sub-menu-item">
                  <h4>top categories</h4>
                  <ul>
                    <li>
                      <a href="cycling">cycling</a>
                    </li>
                    <li>
                      <a href="outdoor">outdoor sports</a>
                    </li>
                    <li>
                      <a href="hunting">hunting</a>
                    </li>
                    <li>
                      <a href="fishing">fishing</a>
                    </li>
                    <li>
                      <a href="fitness">fitness & yoga</a>
                    </li>
                  </ul>
                </div>

                <div className="sub-menu-item">
                  <h4>other categories</h4>
                  <ul>
                    <li>
                      <a href="tennis">tennis</a>
                    </li>
                    <li>
                      <a href="swimming">swimming</a>
                    </li>
                    <li>
                      <a href="sports">winter sports</a>
                    </li>
                    <li>
                      <a href="fitness">fitness technology</a>
                    </li>
                    <li>
                      <a href="wear">sports wear</a>
                    </li>
                  </ul>
                </div>

                <div className="sub-menu-item">
                  <h2>gear up for sports & adventures</h2>
                  <button type="button" className="btn">
                    shop here
                  </button>
                </div>

                <div className="sub-menu-item">
                  <img src={Helmet} alt="product image" />
                </div>
              </div>
            </li>

            <li>
              <a href="#">deals</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// const NavContainer = styled.nav`

//   .navbar{
//     background: #fff;
//     padding: 0 1rem;
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     max-height: 100vh;
//     display: flex;
//     flex-direction: column;
//     z-index: 10;
// }
// .brand-and-icon{
//     display: flex;
//     justify-content: space-between;
//     padding: 1rem 0;
//     border-bottom: 1px solid #ddd;
//     img {
//       width: 175px;
//       margin-left: -15px;
//     }
// }

// `
export default Navbar;
