import React, { useEffect, useRef, useState } from 'react'
import { select, axisBottom, axisRight, scaleLinear, scaleBand } from "d3";

const BarChart = () => {
  const [data, setData] = useState([
    {
      name: 'Virat Kohli',
      total: 71
    },
    {
      name: 'Sachin Tendulkar',
      total: 100
    },
    {
      name: 'Ricky Ponting',
      total: 71
    },
    {
      name: 'Kumar Sangakkara',
      total: 63
    },
    {
      name: 'Jacques Kallis',
      total: 62
    }
  ]);
  const svgRef = useRef();

  let extractDataAsList = [];
  data.map(item => {
    extractDataAsList = [
      ...extractDataAsList,
      item.total
    ]
  })

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    const xScale = scaleBand()
      .domain(data.map((value, index) => index))
      .range([0, 300])
      .padding(0.5);

    const yScale = scaleLinear()
      .domain([0, 150])
      .range([150, 0]);

    const colorScale = scaleLinear()
      .domain([60, 65, 70, 75, 100])
      .range(["lightgreen", "green", "blue", "pink", "red"])
      .clamp(true);

    const xAxis = axisBottom(xScale).ticks(data.length);

    svg
      .select(".x-axis")
      .style("transform", "translateY(150px)")
      .call(xAxis);

    const yAxis = axisRight(yScale);
    svg
      .select(".y-axis")
      .style("transform", "translateX(300px)")
      .call(yAxis);

    svg
      .selectAll(".bar")
      .data(extractDataAsList)
      .join("rect")
      .attr("class", "bar")
      .style("transform", "scale(1, -1)")
      .attr("x", (value, index) => xScale(index))
      .attr("y", -150)
      .attr("width", xScale.bandwidth())
      .transition()
      .attr("fill", colorScale)
      .attr("height", value => 150 - yScale(value));
  }, [data]);

  return (
    <React.Fragment>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </React.Fragment>
  );
}

export default BarChart