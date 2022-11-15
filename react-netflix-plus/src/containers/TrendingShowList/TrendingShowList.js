import { Component } from 'react';

class TrendingShowList extends Component {

  constructor() {
    super();
    console.log(this);
    /* comp-wide state data */
    this.state = {
      shows: [
        {
          id: 12341, name: 'Kungu Panda2', desc: 'Nulla eleifend gravida turpis, eu dignissim tortor vehicula',
          thumbnailURL: 'https://via.placeholder.com/250x200/f00/000?text=Kungu Panda2',
          isInWatchlist: true
        },
        {
          id: 22342, name: 'Boss Baby', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
          thumbnailURL: 'https://via.placeholder.com/250x200/0f0/000?text=Boss Baby',
          isInWatchlist: false
        },
        {
          id: 45323, name: 'The Dragon Prince', desc: 'In sed turpis ante. Vivamus enim risus',
          thumbnailURL: 'https://via.placeholder.com/250x200/999/fff?text=The Dragon Prince',
          isInWatchlist: false
        },
        {
          id: 34524, name: 'The Lincoln Lawyer', desc: 'Proin convallis sapien ut justo dapibus ornare.',
          thumbnailURL: 'https://via.placeholder.com/250x200/00f/000?text=The Lincoln Lawyer',
          isInWatchlist: true
        }
      ]
    }
  }


  render() {

    // if not an array or shows length === 0 
    if (!Array.isArray(this.state.shows) || this.state.shows.length === 0){
      return(
        <div className='alert alert-warning'>
          Sorry! No Trending Shows Found. Try again later.
        </div>
      )
    }

    // all component-specific transformations can be done here
    // let's loop thru 
    // if it is an array and the  shows length > 0
    let showList = null;
    if ((Array.isArray(this.state.shows) && this.state.shows.length) > 0){
      showList = this.state.shows.map((show) => {
        console.log(show);
        return (
          <div className='col-md-3' key={show.id}>
            <div className="card">
              <img src={show.thumbnailURL} className="card-img-top"
                alt={show.name} />
              <div className="card-body">
                <h5 className="card-title">{show.name}</h5>
                <p className="card-text">
                  {show.desc}
                </p>
                <button type="button" className="btn btn-primary">
                  Add to Watchlist
                </button>
              </div>
            </div>
          </div>
        )
      })
    }

    return (
      <div className='row'>
        {showList}
      </div>
    )
  }

}

export default TrendingShowList;