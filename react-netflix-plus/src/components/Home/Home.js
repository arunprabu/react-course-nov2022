import LatestMovieList from "../../containers/LatestMovieList/LatestMovieList";
import LifeCycleDemo from "../../containers/LifeCycleDemo/LifeCycleDemo";
import MyProfile from "../../containers/MyProfile/MyProfile";
import TrendingShowList from "../../containers/TrendingShowList/TrendingShowList";
import FeaturedShow from "./FeaturedShow/FeaturedShow";
import Subscription from "./Subscription/Subscription";

const Home = () => {

  return(
    <>
      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src="https://blog.logomyway.com/wp-content/uploads/2020/08/netflix-logo-2-1.jpg"
          alt="Netflix Logo"
          width="300"
          height="200"
        />
        <h1 className="display-5 fw-bold">Welcome to React Netflix Plus!</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt risus et laoreet maximus.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Subscribe
            </button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">
              Login
            </button>
          </div>
        </div>
      </div>

      <h2>Featured Shows | Props Demo</h2>
      <FeaturedShow 
        ranking="1"
        showTitle="Eng Vs Pak Final"
        category="Sports"
        releasedOn="yesterday">
        That's probably a wrap from the 2022 T20 World Cup.
      </FeaturedShow>
      <FeaturedShow
        ranking="2"
        showTitle="Man Vs Wild by Bear Grylls"
        category="Infotainment"
        releasedOn="2 days ago">
        A wild adventureous infotainment show
      </FeaturedShow>
      <FeaturedShow
        ranking="3"
        showTitle="Planet Earth II by David Attenborough"
        category="Infotainment"
        releasedOn="3 days ago">
        A show by BBC Earth!
      </FeaturedShow>

      <h2>Latest Movie List | Class Comp + States + Events Demo</h2>
      <LatestMovieList />

      <h2>Trending Show List | Class Comp + States + Events + Conditional Rendering + Lists and Keys Demo</h2>
      <TrendingShowList />

      <hr/>
      <h2>Subscription | Styling in ReactJS -Demo</h2>
      <Subscription />

      <hr/>
      <h2>MyProfile | Two Way Binding</h2>
      <MyProfile/>

      <hr/>
      <h2>LifeCycle Hooks Demo</h2>
      <LifeCycleDemo />
      
    </>
  )
}

export default Home;