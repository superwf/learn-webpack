//import jQuery from 'jquery';
//import React from 'react';
(function(global){
  'use strict';

  global.jQuery = jQuery;

  jQuery('title').text('learn webpack');

  require('bootstrap');

  var template = require('../jade/index.jade');
  var str = template({name: 'superwf'});
  jQuery(document.body).append(str);

  //global.React = React;

  require('../jsx/app.jsx');

  //var img = document.createElement('img');
  //img.src = require('../img/s.png');

  //document.body.appendChild(img);
})(window || this);