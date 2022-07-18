import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Nav = styled('nav')`
display: flex;
padding-block: 1em;
padding-left: 4em;
background-color: black`

export const StyledLink = styled(Link)`
color: rgb(200, 200, 200);
text-decoration: none;
padding-left: .8em;
&:first-child {
 padding-left: 2em;
}`