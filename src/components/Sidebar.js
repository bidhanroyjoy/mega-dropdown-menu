import React from 'react'
import { Link } from "react-router-dom";
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div>
        <div className="nav">
            <ul>
                <li className='dropdown'>Fashion<span>&rsaquo;</span>
                    <ul>
                        <li className="dropdown_two">Clothing<span>&rsaquo;</span>
                            <ul>
                            <Link to="/dress"><li>Dresses</li></Link>
                            
                            <li>Jeggings</li>
                            <li>Kurtis</li>
                            </ul>
                        </li>
                        <li>shoes</li>
                        <li>watches</li>
                        <li>bags</li>
                        <li>eyewear</li>
                    </ul>
                </li>
                <li>Healthy & Beauty</li>
                <li>Men's Fashion</li>
                <li>Appliances</li>
                <li>Accessories</li>
                <li>Sports</li>
                <li>Motorbike</li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar