import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3';

const DonutChart = () => {
  const donutRef = useRef();

  // have the data for donut chart with colors 
  const browsersMarketShare = [
    { name: 'Chrome', percent: 65, color: '#48cae4' },
    { name: 'Safari', percent: 19, color: '#a7c957' },
    { name: 'Edge', percent: 4, color: '#FF4081' },
    { name: 'Firefox', percent: 3, color: '#FFA000' },
    { name: 'Opera', percent: 2.5, color: '#ef9a9a' },
    { name: 'Others', percent: 6.5, color: '#b39ddb' }
  ];

  useEffect(() => {
    console.log(donutRef.current); // the element in which we will add donut chart
    drawChart(donutRef.current);
  }, []);

  const boxSize = 500;
  const drawChart = (element) => {
    d3.select(element).select('svg').remove(); // if svg is found -- remove it
    // create svg
    const svg = d3.select(element)
      .append('svg')
      .attr('width', '100%')
      .attr('height', 500)
      .attr('viewBox', `0 0 ${boxSize} ${boxSize}`)
      .append('g')
      .attr('transform', `translate(${boxSize / 2}, ${boxSize / 2})`) // move the position of the element

    // generate the arcs
    const arcGenerator = d3.arc()
      .cornerRadius(10)
      .padAngle(0.01)
      .innerRadius(100)
      .outerRadius(250);

    // generate the pie chart
    const pieGenerator = d3.pie()
      .startAngle(-0.5 * Math.PI)
      .value((data) => {
        return data.percent;
      })

    const arcs = svg.selectAll()
      .data(pieGenerator(browsersMarketShare))
      .enter();

    // let's add the path tag -- 
    // The <path> SVG element is the generic element to define a shape. 
    // All the basic shapes can be created with a path element.
    arcs.append('path')
      .attr('d', arcGenerator)
      .style('fill', ({data}) => {
        console.log(data);
        return data.color;
      });

    // attach the labels
    arcs.append('text')
      .attr('text-anchor', 'middle')
      .text(({ data }) => {
        console.log(data);
        return `${data.name}: ${data.percent}%`
      })
      .attr('transform', (data) => {
        const [x, y] = arcGenerator.centroid(data);
        return `translate(${x}, ${y})`
      })
      .attr('fill', '#000') // text color black
      .attr('font-size', '15px')
    // have the inner circle -- optional
  }



  return (
    <div>
      <h2>DonutChart</h2>

      <div className='donut-container' ref={donutRef}></div>

    </div>
  )
}

export default DonutChart