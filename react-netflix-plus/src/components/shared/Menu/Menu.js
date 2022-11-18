// Functional component with Arrow Function

import { Link } from "react-router-dom";
import MenuItem from "./MenuItem/MenuItem";

const Menu = () => {

  const navMenus = [
    { 
      title: 'Home', url: '/'
    },
    {
      title: 'About', url: '/about'
    },
    {
      title: 'Contact', url: '/contact' 
    },
    {
      title: 'Styled Comp Demo', url: '/styled-comp-demo' 
    },
    {
      title: 'HOC Demo', url: '/hoc-demo'
    },
    {
      title: 'Hooks Demo', url: '/hooks'
    },
    {
      title: 'Products (Context API Demo)', url: '/products'
    }
  ];

  return(
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      {
        navMenus.map( (navMenu) => {
          return(
            <MenuItem 
              key={navMenu.title} 
              {...navMenu} /> 
              /* sending all props down to MenuItem */
          )
        })
      }
    </ul>
  )
}

export default Menu;
