import Nav from "./Nav";
import logo from '../assets/Logo.svg'

function Header(){
    return (
        <>
        <img src={logo} alt="logo"/>
        <Nav />
        </>
    )
}
 export default Header;
