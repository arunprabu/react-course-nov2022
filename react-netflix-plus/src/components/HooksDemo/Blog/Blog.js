import React, { useEffect, useState } from 'react'

const Blog = () => {

  console.log('1. Program Started in Blog Comp');
  const [topicName, setTopicName ] = useState('Reack Hooks Demo');
  const [publishedDate, setPublishedDate] = useState(new Date());

  console.log('2. Before useEffect in Blog Comp');
  // useEffect -- first param: effect, second param: dep list
  useEffect( () => { 
    // runs after every initial rendering and also upon state update as well -- only if dep changed
    // it is an alternative to lifecycle hooks (componentDidMount and componentDidUpdate)
    // ideal place for your ajax calls
    console.log('4. Inside useEffect');
    document.title = topicName;
  }, [topicName]); // second arg is dependency. it has to be an array -- it is optional
  // if the dep changed by any means, then effect callback will be called. 
  // remove the dep and have empty array -- then see
  
  const handleChangeTopic = () => {
    console.log('5. Inside handleChangeTopic');
    setTopicName('Demo of useEffect Hook');
  }

  const handlePublishedDate = () => {
    setPublishedDate(new Date());
  }

  console.log('3. Program Ended in Blog Comp');
  return (
    <div>
      <p>Topic Name: {topicName}</p>
      <button type='button' onClick={ handleChangeTopic }>Change Topic</button>
      
      <p>Published Date: {publishedDate.toISOString()}</p>
      <button type='button' onClick={handlePublishedDate}>Update Published Date</button>

    </div>
  )
}

export default Blog