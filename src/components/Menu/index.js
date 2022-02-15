import './style.css';
import { BsInstagram } from 'react-icons/bs';
import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Menu() {
    return(
        <div className="menu">
            <Link className="social" to="/login">
                <button><FiPower color="#fff" size={24} /></button>
            </Link>
            <a className="social" href="https://www.instagram.com/ssr.silvaaa/">
                <BsInstagram color="#fff" size={24} />
            </a>

            <Link className="menu-item" to="/links">
                Menu Links
            </Link>
        </div>
        
    );
}