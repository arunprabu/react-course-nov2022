import React from 'react'

const DonutChart = () => {

  // have the data for donut chart
  const browsersMarketShare = [
    { name: 'Chrome', percent: 65 },
    { name: 'Safari', percent: 19 },
    { name: 'Edge', percent: 4 },
    { name: 'Firefox', percent: 3 },
    { name: 'Opera', percent: 2.5 },
    { name: 'Others', percent: 6.5 },
  ];

  // identify the colors for all the items 
  const colors = ['#48cae4', '#a7c957', '#FF4081', '#FFA000', '#7B1FA2', '#7B1FA2'];
  
  // create svg and have the circle 
  // mark the arcs based on the percentage 
  // generate the chart
  // attach the labels 
  // have the inner circle 

  return (
    <div>
      <h2>DonutChart</h2>

    </div>
  )
}

export default DonutChart