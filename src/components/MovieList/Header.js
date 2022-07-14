import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/list">List</Link>
                <Link to="/list">Contact</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header