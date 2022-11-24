// all your app routes should come here
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home"; // not lazy loaded
import StyledCompDemo from "../components/StyledCompDemo/StyledCompDemo"; // not lazy loaded
// import Contacts from "../components/Contacts/Contacts";

const About = React.lazy(() => import('../components/About/About'));
const HocDemo = React.lazy(() => import('../components/HocDemo/HocDemo'));
const HooksDemo = React.lazy(() => import('../components/HooksDemo/HooksDemo'));
const Products = React.lazy(() => import('../components/Products/Products'));
const UnitTestingDemo = React.lazy(() => import('../components/UnitTestingDemo/UnitTestingDemo'));

export const appRoutes = (
  <Suspense 
    fallback={
      <div className="spinner-border text-primary">Loading...</div>
    }>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      {/* <Route path='/contacts' element={<Contacts />} /> */}
      <Route path='/styled-comp-demo' element={<StyledCompDemo />} />
      <Route path='/hoc-demo' element={<HocDemo />} />
      <Route path='/hooks' element={<HooksDemo />} />
      <Route path='/products' element={<Products />} />
      <Route path='/unit-testing-demo' element={<UnitTestingDemo />} />
    </Routes>
  </Suspense>
);