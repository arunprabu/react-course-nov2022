import FeaturedShow from "./FeaturedShow/FeaturedShow";

const Home = () => {
  return(
    <div>
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
        description="That's probably a wrap from the 2022 T20 World Cup."
        releasedOn="yesterday"></FeaturedShow>
      <FeaturedShow
        ranking="2"
        showTitle="Man Vs Wild by Bear Grylls"
        category="Infotainment"
        description="A wild adventureous infotainment show"
        releasedOn="2 days ago"></FeaturedShow>

    </div>
  )
}

export default Home;