import Login from '../login/login';
import './header.css'
import { useState } from 'react'

export default function Header(){
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const scrollToContact = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };


    return(
        <header className="header">
            <div className="logo">
                <h1>Climate Legacy</h1>
            </div>
            <nav className="nav-menu">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li>
                        <button 
                            className="login-button" 
                            onClick={() => setIsLoginOpen(true)}
                        >
                            Login
                        </button>
                    </li>
                    <li><a href="#contact" onClick={scrollToContact}>Contact Us</a></li>
                </ul>
            </nav>

            {isLoginOpen && <Login onClose={() => setIsLoginOpen(false)} />}
        </header>
    )
}