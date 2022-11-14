// Functional component with Anonymous Function

import Menu from "../Menu/Menu"

const Footer = function(){
  const copyrightYear = 2023;

  return(
    <footer className="text-center">
      <hr />
      <Menu />
      <p>
        &copy; Copyright {copyrightYear} | Arun
      </p>
    </footer>
  )
}

export default Footer