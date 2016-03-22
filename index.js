import 'babel-polyfill';
// import React from 'react';
// import {render} from 'react-dom';
// import Todo from './lib/containers/Todo';
// import {Router, hashHistory, Route} from 'react-router';
// import {Provider} from 'react-redux';
// import store from './lib/store';

import d3 from 'd3';

// let main = document.querySelector('#main');
// render(<Provider store={store}>
//   <Router history={hashHistory}>
//     <Route path='/' component={Todo} />
//   </Router>
// </Provider>, main);

let body = d3.select('body');
let svg = body.select('svg');
let dataset = [250 , 210 , 170 , 130 , 90];
let rectHeight = 25;

let linear = d3.scale.linear()
  .domain([d3.min(dataset), d3.max(dataset)])
  .range([10, 400]);

var axis = d3.svg.axis()
  .scale(linear)
  .orient('bottom')
  .ticks(7);
svg.selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr({
    x: 20,
    y: (_, i) => (
      i * rectHeight
    ),
    width: d => linear(d),
    height: rectHeight - 1,
    fill: 'steelblue'
  });
svg.append('g')
.attr('transform', 'translate(20, 130)')
.call(axis);
