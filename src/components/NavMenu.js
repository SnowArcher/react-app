import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import React, {useState} from "react";
import {useEffect, useRef} from "react";

function NavMenu () {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [eng, setEng] = useState(false);
    const [ua, setUa] = useState(true);
    const [fix, setFix] = useState(false);
    function setFixedSidebar() {
      if(window.scrollY > 0) {
        setFix(true);
      } else {
        setFix(false);
      }
    }
    window.addEventListener("scroll", setFixedSidebar);
    let menuRef = useRef();
    useEffect(()=>{
        let handler = (e) => {
            if(!menuRef.current.contains(e.target)) {
                setOpen1(false);
                setOpen2(false);
                setOpen3(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return() => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <nav className={`menu ${fix? 'fixed': ''}`}>
            <div className="menu__logo">
                <Link to="/"><img src="../img/logo.svg" alt="logo"/></Link>
            </div>
            <div className="menu__list">
                <ul className="menu-links" ref={menuRef}>
                    <li>
                        <div className="link" onClick={()=>{setOpen1(!open1)}}>
                            <span>Про нас</span>
                            <img className={`menu-arrow ${open1? 'active' : 'inactive'}`} src="../img/arrow.svg" alt="arrow"/>
                        </div>
                        <div className={`dropdown ${open1? 'active' : 'inactive'}`}>
                            <ul onClick={()=>{setOpen1(!open1)}}>
                                <li><Link className="ref" to="/story"><span>Ціль та історія фонду</span></Link></li>
                                <li><Link className="ref" to="/team"><span>Команда та партнери</span></Link></li>
                                <li><Link className="ref" to="/docs"><span>Документація та звітність</span></Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="link" onClick={()=>{setOpen2(!open2)}}>
                            <span>Проєкти</span>
                            <img className={`menu-arrow ${open2? 'active' : 'inactive'}`} src="../img/arrow.svg" alt="arrow"/>
                        </div>
                        <div className={`dropdown ${open2? 'active' : 'inactive'}`}>
                            <ul onClick={()=>{setOpen2(!open2)}}>
                                <li><Link className="ref" to="/current"><span>Поточні потреби</span></Link></li>
                                <li><Link className="ref" to="/success_stories"><span>Успішні історії</span></Link></li>
                            </ul>
                        </div>
                    </li>
                    <li><Link className="ref" to="/contacts">Контакти</Link></li>
                    <li>
                        <div className="link" onClick={()=>{setOpen3(!open3)}}>
                            <span>{`${eng? 'ENG':'УКР'}`}</span>
                            <img className={`menu-arrow ${open3? 'active' : 'inactive'}`} src="../img/arrow.svg" alt="arrow"/>
                        </div>
                        <div className={`dropdown ${open3? 'active' : 'inactive'}`}>
                            <ul onClick={()=>{setOpen3(!open3)}}>
                                <li onClick={()=>{if(eng === false) {setEng(!eng); setUa(!ua)}}} className={`lang ${eng? 'active' : ''}`}>
                                    <Link className="ref" to="/">
                                        <img src="../img/rate_arrow.svg" alt="arrow"/>
                                        <span>English</span>
                                    </Link></li>
                                <li onClick={()=>{if(ua === false) {setEng(!eng); setUa(!ua)}}}className={`lang ${ua? 'active' : ''}`}>
                                    <Link className="ref" to="/">
                                        <img src="../img/rate_arrow.svg" alt="arrow"/>
                                        <span>Українська</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <HashLink to="/#donate" className="ref" >
                            <span>Допомогти</span>
                        </HashLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default NavMenu;