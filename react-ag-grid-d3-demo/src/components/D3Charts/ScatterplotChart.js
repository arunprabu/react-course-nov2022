import React, { useEffect, useState } from 'react'
import * as d3 from 'd3';

const ScatterplotChart = () => {

  //const [circles, setCircles] = useState([]);

  useEffect( () => {
    const circles = [
      { cx: 50, cy: 50, r: 50, fill: 'pink', },
      { cx: 120, cy: 120, r: 60, fill: 'green' },
      { cx: 180, cy: 180, r: 40, fill: 'blue' },
      { cx: 240, cy: 65, r: 65, fill: 'purple' }
    ];

    drawChart(circles);
  }, []);

  const drawChart = (circles) => {

    const circle = d3.select('#svgContainer')
      .selectAll('circle')
      .data(circles)
      .enter()
      .append('circle');

    circle.attr('cx', ({ cx }) => {
      return cx;
    })
      .attr('cy', ({ cy }) => {
        return cy;
      })
      .attr('r', ({ r }) => {
        return r;
      })
      .style('fill', ({ fill }) => {
        return fill;
      })
  }

  return (
    <div>
      <h2>ScatterplotChart</h2>
      <div className="scatterplot-wrapper">
        <svg id="svgContainer" width='500' height='400'>
        </svg>
      </div>
    </div>
  )
}

export default ScatterplotChart