import {Foot, Ul, Li, A} from './styled'

const Footer = () => {
  return (
    <Foot>
        <nav>
            <Ul>
                <Li><A href="www.google.com.ar" target="_blank" rel="noreferrer noopener" >Instagram</A></Li>
                <Li><A href="www.google.com.ar" target="_blank" rel="noreferrer noopener">Linkedin</A></Li>
                <Li><A href="www.google.com.ar" target="_blank" rel="noreferrer noopener">Github</A></Li>
            </Ul>
           
        </nav>
        <p>Copyright Matias Semelman 2022</p>
    </Foot>
  )
}

export default Footer