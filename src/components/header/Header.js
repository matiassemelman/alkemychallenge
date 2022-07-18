import { Link } from 'react-router-dom';

import {Nav,StyledLink} from './styled'

const Header = () => {
  return (
    <header>
        <Nav>
<h2>MatiFlix</h2>
            <ul>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/list">List</StyledLink>
                <StyledLink to="/list">Contact</StyledLink>
            </ul>
        </Nav>
    </header>
  )
}

export default Header