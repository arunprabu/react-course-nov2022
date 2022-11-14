/* Class component a.ka. containers / smart components*/
import React from 'react';

// all react class components must extend React.Component
// only then, render() method will be called automatically
class LatestMovieList extends React.Component{
  /* 
    * state is an Object 
    * state is mutable 
    * do not mutate state directly. instead use setState()
    * 
  */

  /* comp-wide data */
  state = {
    movieResolution: '4K',
    movies: [
      {
        id: 4354, showTitle: 'Black Panther', desc: 'lorem ipsum...',
        releasedOn: 'a week ago', 
        thumbnailUrl: 'https://via.placeholder.com/250x200/0f0/000?text=Black%20Panther'
      },
      {
        id: 4355, showTitle: 'House of the Dragon', desc: 'lorem ipsum...',
        releasedOn: 'two weeks ago', 
        thumbnailUrl: 'https://via.placeholder.com/250x200/0ff/000?text=House%20of%20the%20dragon'
      },
      {
        id: 4356, showTitle: 'Bullet Train', desc: 'lorem ipsum...',
        releasedOn: 'two weeks ago', 
        thumbnailUrl: 'https://via.placeholder.com/250x200/00f/000?text=Bullet%20Train'
      },
      {
        id: 4357, showTitle: 'Black Adam', desc: 'lorem ipsum...',
        releasedOn: 'two weeks ago', 
        thumbnailUrl: 'https://via.placeholder.com/250x200/ff0/000?text=Black%20Adam'
      }
    ]
  }

  handleAddToWatchlist = (event) => {
    console.log(event); // you will get the synthetic base event object here
    console.log('Inside handleAddToWatchlist');
    console.log(this); //normal method 'this' will be undefined. try arrow fn
    // setState will result in render method getting called.
    this.setState({
      movies: [
        {
          id: 4354, showTitle: 'Black Panther [ADDED]', desc: 'lorem ipsum...',
          releasedOn: 'a week ago',
          thumbnailUrl: 'https://via.placeholder.com/250x200/0f0/000?text=Black%20Panther'
        },
        {
          id: 4355, showTitle: 'House of the Dragon', desc: 'lorem ipsum...',
          releasedOn: 'two weeks ago',
          thumbnailUrl: 'https://via.placeholder.com/250x200/0ff/000?text=House%20of%20the%20dragon'
        },
        {
          id: 4356, showTitle: 'Bullet Train', desc: 'lorem ipsum...',
          releasedOn: 'two weeks ago',
          thumbnailUrl: 'https://via.placeholder.com/250x200/00f/000?text=Bullet%20Train'
        },
        {
          id: 4357, showTitle: 'Black Adam', desc: 'lorem ipsum...',
          releasedOn: 'two weeks ago',
          thumbnailUrl: 'https://via.placeholder.com/250x200/ff0/000?text=Black%20Adam'
        }
      ]
    })
  }

  render(){
    console.log('Inside Render');
    // NEVER EVER CALL setState here

    return(
      <div className='row'>
        <h3>Latest Movies available in {this.state.movieResolution}</h3>

        <div className='col-md-3'>
          <div className="card">
            <img src={this.state.movies[0].thumbnailUrl} className="card-img-top" 
              alt={this.state.movies[0].showTitle} />
            <div className="card-body">
              <h5 className="card-title">{this.state.movies[0].showTitle}</h5>
              <p className="card-text">
                {this.state.movies[0].desc}
              </p>
              <button type="button" className="btn btn-primary" 
              onClick={this.handleAddToWatchlist}>
                Add to Watchlist
              </button>
            </div>
          </div>
        </div>

        <div className='col-md-3'>
          <div className="card">
            <img src={this.state.movies[1].thumbnailUrl} className="card-img-top"
              alt={this.state.movies[1].showTitle} />
            <div className="card-body">
              <h5 className="card-title">{this.state.movies[1].showTitle}</h5>
              <p className="card-text">
                {this.state.movies[1].desc}
              </p>
              <button type="button" className="btn btn-primary">
                Add to Watchlist
              </button>
            </div>
          </div>
        </div>

        <div className='col-md-3'>
          <div className="card">
            <img src={this.state.movies[2].thumbnailUrl} className="card-img-top"
              alt={this.state.movies[2].showTitle} />
            <div className="card-body">
              <h5 className="card-title">{this.state.movies[2].showTitle}</h5>
              <p className="card-text">
                {this.state.movies[2].desc}
              </p>
              <button type="button" className="btn btn-primary">
                Add to Watchlist
              </button>
            </div>
          </div>
        </div>

        <div className='col-md-3'>
          <div className="card">
            <img src={this.state.movies[3].thumbnailUrl} className="card-img-top"
              alt={this.state.movies[3].showTitle} />
            <div className="card-body">
              <h5 className="card-title">{this.state.movies[3].showTitle}</h5>
              <p className="card-text">
                {this.state.movies[3].desc}
              </p>
              <button type="button" className="btn btn-primary">
                Add to Watchlist
              </button>
            </div>
          </div>
        </div>

      </div>
    )
  }

}

export default LatestMovieList;