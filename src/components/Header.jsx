import React from "react";
import {Link} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(<nav className="div-header">
            
            <Link  className='link' to={'/tecnologias'}>Tecnologias </Link>
            <Link className='link'  to={'/'}>Home </Link>
            <Link className='link'  to={'/sobre'}>Sobre Mim </Link>
            </nav>
        )
    }

}
export default Header;