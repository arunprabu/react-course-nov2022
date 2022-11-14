import React from 'react'

const FeaturedShow = (props) => {
  console.log(props);
  
  return (
    <div className="card text-start mb-3">
      <div className="card-header">
        Featured Program #{props.ranking}
        <span
          className="badge text-bg-warning text-dark float-end">{props.category}</span>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.showTitle}</h5>
        <p className="card-text">
          {props.description}
        </p>
        <button type="button" className="btn btn-primary">
          Watch now
        </button>
      </div>
      <div
        className="card-footer text-muted">
        Released {props.releasedOn}
      </div>
    </div>
  )
}

export default FeaturedShow