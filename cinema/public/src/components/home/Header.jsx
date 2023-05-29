import React, {useState, useRef, useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "../../assets/style/Header.scss";

// icons
import up from "../../assets/icon/icons8-expand-arrow-24.png";
import down from "../../assets/icon/icons8-collapse-arrow-24.png";
import user from "../../assets/icon/icons8-person-96.png";
import logo from "../../assets/image/cwLogo.png";
import hamburger from "../../assets/icon/icons8-menu-24.png";

const Header = () => {
    const profileDom = useRef(null);
    const linksMenuDom = useRef(null);
    const navigator = useNavigate();
    const userWidth = window.screen.availWidth;

    const [profile, setProfile] = useState(false);
    const [dropDown, setDropDown] = useState(false);
    const [picture, setPicture] = useState(null);
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        setDropDown(true);
    }, [])

    return (
        <>
            <div className='header'>
                {
                    userWidth < 800 ? <img src={hamburger} alt='hamburger' onClick={() => { 
                        setMenu(!menu);
                    }} className='hamburger-menu'/> :
                    <div className='lists'>
                        <ul>
                            <Link to='/vmbest'>Best's</Link>
                            <Link to='/vmdrama'>Drama</Link>
                            <Link to='/vmkids'>Animation</Link>
                            <Link to='/vmpopular'>Popular</Link>
                        </ul>
                    </div>
                }
                <img src={logo} className='logo' alt='logo'/>
                <div className='user'>
                    <div className='user-profile'>
                        <div className='profile'>
                            {
                                picture === null ? <img src={user} alt='user' style={{width: "40px", height: "40px", borderRadius: "50%"}}/> : <img src={URL.createObjectURL(picture)} alt='profile' 
                                    style={{width: "40px", height: "40px", borderRadius: "50%"}}
                                />
                            }
                            <img src={dropDown ? down : up} style={{cursor: "pointer"}} alt='drop-down' onClick={() => {
                                setDropDown(!dropDown);
                                profileDom.current.style.display = "block";
                            }}/>
                        </div>
                    </div>
                    <div className='set-profile' style={{display: dropDown ? "none" : "flex"}} ref={profileDom}>
                        <button className='btn signout' onClick={() => navigator("/", {replace: true})}>Sign out</button>
                            {
                                profile === false ? <button className='btn upload'>
                                <label className='label-profile' style={{cursor: "pointer"}} htmlFor='input-file'>Set picture</label>
                                <input type="file"
                                        id='input-file'
                                        onChange={e => {
                                            setPicture(e.target.files[0])
                                            setProfile(true)
                                        }}
                                        style={{display: "none"}}   
                                    />
                                </button> : <button className='btn remove' style={{cursor: "pointer"}} onClick={() => {
                                    setPicture(null);
                                    setProfile(false)
                                }}>remove picture</button>
                            }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;