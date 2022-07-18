import {Foot, Nav, Ul, Li, A} from './styled'

const Footer = () => {
  return (
    <Foot>
        <Nav>
            <Ul>
                <Li><A href="www.google.com.ar" target="_blank" rel="noreferrer noopener" >Instagram</A></Li>
                <Li><A href="www.google.com.ar" target="_blank" rel="noreferrer noopener">Linkedin</A></Li>
                <Li><A href="www.google.com.ar" target="_blank" rel="noreferrer noopener">Github</A></Li>
            </Ul>
            <p>Copyright Matias Semelman 2022</p>
        </Nav>
    </Foot>
  )
}

export default Footer