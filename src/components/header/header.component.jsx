import {React, Fragment} from 'react';
import {Link, Outlet} from 'react-router-dom';

import {auth} from '../../utils/firebase.utils';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({currentUser}) => (
  <Fragment>
    <div className='header'>
      <Link className='logo-container' to="/">
        <Logo className='logo'/>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">Shop</Link>
        <Link className="option" to="/contact">Contact</Link>
        {
          currentUser?
          <div className='option' onClick={()=>auth.signOut()}>Sign Out</div>
          :
          <Link className="option" to="/auth">Sign In</Link>
        }
      </div>
    </div>
    <Outlet/>
  </Fragment>
);

export default Header;