import {Link} from 'react-router-dom';
import React, {useState} from "react";

function NavMenu () {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    return (
        <nav className="menu">
            <div className="menu__logo">
                <Link to="/"><img src="../img/logo.svg" alt="logo"/></Link>
            </div>
            <div className="menu__list">
                <ul className="menu-links">
                    <li>
                        <div className="link" onClick={()=>{setOpen1(!open1)}}>
                            <span>About fund</span>
                            <img className={`menu-arrow ${open1? 'active' : 'inactive'}`} src="../img/arrow.svg" alt="arrow"/>
                        </div>
                        <div className={`dropdown ${open1? 'active' : 'inactive'}`}>
                            <ul>
                                <li><Link className="ref" to="/story"><span>Mission & Story</span></Link></li>
                                <li><Link className="ref" to="/team">Team & Parthners</Link></li>
                                <li><Link className="ref" to="/docs">Docs & Reports</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="link" onClick={()=>{setOpen2(!open2)}}>
                            <span>Projects</span>
                            <img className={`menu-arrow ${open2? 'active' : 'inactive'}`} src="../img/arrow.svg" alt="arrow"/>
                        </div>
                        <div className={`dropdown ${open2? 'active' : 'inactive'}`}>
                            <ul>
                                <li><Link className="ref" to="/current">Current</Link></li>
                                <li><Link className="ref" to="/previous">Previous</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li><Link className="ref" to="/contacts">Contacts</Link></li>
                    <li>
                        <div className="link" onClick={()=>{setOpen3(!open3)}}>
                            <span>ENG</span>
                            <img className={`menu-arrow ${open3? 'active' : 'inactive'}`} src="../img/arrow.svg" alt="arrow"/>
                        </div>
                        <div className={`dropdown ${open3? 'active' : 'inactive'}`}>
                            <ul>
                                <li><Link className="ref" to="/">English</Link></li>
                                <li><Link className="ref" to="/">Ukrainian</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        {/* <a href="#donate">Donate</a> */}
                        <Link to="/" className="ref" onClick={() => {
                        setTimeout(() => {document.getElementById("donate").scrollIntoView(); console.log("finish");}, 300); 
                    }}>
                        <span>Donate</span>
                    </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default NavMenu;