// a higher-order component is a function that takes a 
// component and returns a new component.

const applyStyles = (OriginalComponent ) => {

  // Let's return a new component 
  const NewComponent = (props) => {
    return(
      <div className="hoc-style">
        <OriginalComponent {...props}/>
      </div>
    )
  }
  
  return NewComponent;
}

export default applyStyles;
