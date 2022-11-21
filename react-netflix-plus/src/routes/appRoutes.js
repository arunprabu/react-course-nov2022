// all your app routes should come here
import { Route, Routes } from "react-router-dom";
import About from "../components/About/About";
// import Contacts from "../components/Contacts/Contacts";
import HocDemo from "../components/HocDemo/HocDemo";
import Home from "../components/Home/Home";
import HooksDemo from "../components/HooksDemo/HooksDemo";
import Products from "../components/Products/Products";
import StyledCompDemo from "../components/StyledCompDemo/StyledCompDemo";
import UnitTestingDemo from "../components/UnitTestingDemo/UnitTestingDemo";

export const appRoutes = (<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/about' element={<About />} />
  {/* <Route path='/contacts' element={<Contacts />} /> */}
  <Route path='/styled-comp-demo' element={<StyledCompDemo />} />
  <Route path='/hoc-demo' element={<HocDemo />} />
  <Route path='/hooks' element={<HooksDemo />} />
  <Route path='/products' element={<Products />} />
  <Route path='/unit-testing-demo' element={<UnitTestingDemo />} />
</Routes>);