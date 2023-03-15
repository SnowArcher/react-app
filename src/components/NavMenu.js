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
                            <span>{eng? 'About fund':'Про нас'}</span>
                            <img className={`menu-arrow ${open1? 'active' : 'inactive'}`} src="../img/arrow.svg" alt="arrow"/>
                        </div>
                        <div className={`dropdown ${open1? 'active' : 'inactive'}`}>
                            <ul onClick={()=>{setOpen1(!open1)}}>
                                <li><Link className="ref" to="/story"><span>{eng? 'Mission & Story':'Ціль та історія фонду'}</span></Link></li>
                                <li><Link className="ref" to="/team"><span>{eng? 'Team & Partners':'Команда та партнери'}</span></Link></li>
                                <li><Link className="ref" to="/docs"><span>{eng? 'Docs & Reports':'Документація та звітність'}</span></Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="link" onClick={()=>{setOpen2(!open2)}}>
                            <span>{eng? 'Projects': 'Проєкти'}</span>
                            <img className={`menu-arrow ${open2? 'active' : 'inactive'}`} src="../img/arrow.svg" alt="arrow"/>
                        </div>
                        <div className={`dropdown ${open2? 'active' : 'inactive'}`}>
                            <ul onClick={()=>{setOpen2(!open2)}}>
                                <li><Link className="ref" to="/current"><span>{eng? 'Current':'Поточні потреби'}</span></Link></li>
                                <li><Link className="ref" to="/success_stories"><span>{eng? 'Previous':'Успішні історії'}</span></Link></li>
                            </ul>
                        </div>
                    </li>
                    <li><Link className="ref" to="/contacts">{eng? 'Contacts': 'Контакти'}</Link></li>
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
                                        <span>{eng? 'English':'Англійська'}</span>
                                    </Link></li>
                                <li onClick={()=>{if(ua === false) {setEng(!eng); setUa(!ua)}}}className={`lang ${ua? 'active' : ''}`}>
                                    <Link className="ref" to="/">
                                        <img src="../img/rate_arrow.svg" alt="arrow"/>
                                        <span>{eng? 'Ukranian':'Українська'}</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <HashLink to="/#donate" className="ref" >
                            <span>{eng? 'Donate':'Допомогти'}</span>
                        </HashLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default NavMenu;