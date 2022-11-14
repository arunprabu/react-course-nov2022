import React from 'react'

const FeaturedShow = ( {ranking, showTitle, category, releasedOn, children} ) => {
  
  /*
    * props are objects 
    * props are read-only
    * props can have children
    * props are used for receiving data from parent comp
  */

  return (
    <div className="card text-start mb-3">
      <div className="card-header">
        Featured Show #{ranking}
        <span
          className="badge text-bg-warning text-dark float-end">{category}</span>
      </div>
      <div className="card-body">
        <h5 className="card-title">{showTitle}</h5>
        <p className="card-text">
          {children}
        </p>
        <button type="button" className="btn btn-primary">
          Watch now
        </button>
      </div>
      <div
        className="card-footer text-muted">
        Released {releasedOn}
      </div>
    </div>
  )
}

export default FeaturedShow