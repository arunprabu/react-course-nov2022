import React, { useEffect, useRef, useState } from 'react';
import { arc, interpolate, pie, scaleOrdinal, schemeSpectral, select } from 'd3';

const PieChart = () => {
  const [data, setData] = useState([
    {
      name: 'apples',
      value: 100
    },
    {
      name: 'bananas',
      value: 300
    },
    {
      name: 'cherries',
      value: 250
    }
  ]);

  const svgRef = useRef();

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);

    // arc takes instructions (objects with special properties, like startAngle, endAngle, etc.)
    // and transforms them into "d" attributes for path elements
    const arcGenerator = arc()
      .innerRadius(0)
      .outerRadius(150);

    // pie will transform data to instructions for arcGenerator
    const pieGenerator = pie()
      .value(d => d.value)
      .sort(null); // makes sure data doesn't get sorted

    // now transform data to instructions for arc()
    const instructions = pieGenerator(data);
    console.log(instructions);

    // generate colorScale
    // https://github.com/d3/d3-scale-chromatic
    const colorScale = scaleOrdinal(schemeSpectral[data.length]);

    // render slices (instructions)
    svg
      .selectAll('.slice')
      .data(instructions)
      .join('path')
      .attr('class', 'slice')
      .attr('fill', (d, i) => colorScale(i))
      .style(
        'transform',
        `translate(${500 / 2}px, ${450 / 2}px)`
      )
      .transition()
      .attrTween('d', function (nextInstruction, index) {
        // animation when changing data
        const interpolator = interpolate(this.lastInstruction, nextInstruction);
        this.lastInstruction = interpolator(1);
        return function (t) {
          return arcGenerator(interpolator(t));
        };
      });

    svg.selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text((d) => `${d.name}: ${d.value}`) // label text
      .style('fill', '#000')
      .attr('transform', (data, index) => `translate(${(index * 100) + 42}, 20)`)
      .transition()
      .duration(700)
      .style('font-size', '14px');

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('width', 20)
      .attr('height', 15)
      .attr('stroke', '#000')
      .attr('stroke-width', 1)
      .attr('fill', (d, i) => colorScale(i))
      .attr('transform', (data, index) => `translate(${(index * 100) + 19}, 8)`)

  }, [data]);

  return (
    <div style={{ marginBottom: '2rem', height: 1000 }}>
      <svg width='500' height='400' ref={svgRef}></svg>
    </div>
  );
}

export default PieChart