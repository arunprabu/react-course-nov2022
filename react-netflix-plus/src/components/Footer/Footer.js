// Functional component with Anonymous Function

import Menu from "../Menu/Menu"

const Footer = function(){
  return(
    <footer className="text-center">
      <hr />
      <Menu />
      <p>
        &copy; Copyright 2022 | Arun
      </p>
    </footer>
  )
}

export default Footer