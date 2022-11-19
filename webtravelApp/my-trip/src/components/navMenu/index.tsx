import { Fragment, useState } from "react";
import { Outlet, Link } from "react-router-dom";

const NavMenu = () => {
  const [sticky, setSticky] = useState(false)

  const navBarSticky = ()=>{
    if(window.scrollY >= 232){
      setSticky(true)
    }else{
      setSticky(false)
    }
  }

  window.addEventListener('scroll', navBarSticky)
  return (
    <Fragment>
   
      <nav className={sticky ? 'dos activeNav': 'dos'}>
        <div className="wrap">
          <nav className="tres">
            <ul>
              <li>
                <Link to="/guatape">Guatape</Link>
              </li>
              <li>
                  <Link to="/graffity-tour">Garffity Tour</Link>
              
              </li>
              <li>
                 <Link to="/san-felix">San Felix</Link> 
               
              </li>
              <li>
                  <Link to="/sabaneta">Sabaneta</Link> 
              </li>
              
            </ul>
          </nav>
        </div>
      </nav>
      <Outlet />
   
    </Fragment>
  );
};

export default NavMenu;