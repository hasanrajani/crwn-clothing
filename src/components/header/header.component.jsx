import {React, Fragment, useContext} from 'react';
import {Link, Outlet} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';

import {signOutUser} from '../../utils/firebase.utils';


import './header.styles.scss';

const Header = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  return(

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
          <div className='option' onClick={signOutUser}>Sign Out</div>
          :
          <Link className="option" to="/auth">Sign In</Link>
        }
      <CartIcon/>
      </div>
      {isCartOpen&&<CartDropdown/>}
    </div>
    <Outlet/>
  </Fragment>
    );
  }

export default Header;