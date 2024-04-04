import React from 'react'
import { Link } from "react-router-dom";

import "./navstyles.css"

function Nav() {
  return (
    <div>
      
        <nav className="nav">

            <div className="left">
                <ul>
                    <li>
                    <Link to="/Memberone" className="link">Member #1</Link>
                    </li>
                    <li>
                    <Link to="/Membertwo" className="link">Member #2</Link>
                    </li>
                    <li>
                        <Link to="/Memberthree" className="link">Member #3</Link>
                    </li>
                    <li>
                        <Link to="/Memberfour" className="link">Member #4</Link>
                    </li>
                </ul>
            </div>

        </nav>

    </div>
  )
}

export default Nav