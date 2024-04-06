import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div className="App">
          <header>
            
            <Link to="/" className="logo">
              <div className="icon">
                
                <span>TRAVEL</span>
              </div>
            </Link>
            <nav className="navbar">
          <a href="/">Home</a>
          <a href="/SignUp">SignUp</a>
          <a href="/LogIn">LogIn</a>
          <a href="/About">About</a>
        </nav>
            
            <form action="" className="search-bar-container">
              <input type="search" id="search-bar" placeholder="search ..." />
              
            </form>
          </header>
    
    
        </div>
    );
}

export default Header;
