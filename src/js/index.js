import jQuery from 'jquery';
//import React from 'react';
(function(global){
  'use strict';

  global.jQuery = jQuery;

  jQuery('title').text('learn webpack');

  require('bootstrap');
  require('bootstrap/less/bootstrap.less');
  require('../less/index.less');

  var template = require('../jade/index.jade');
  var str = template({name: 'superwf'});
  jQuery(document.body).append(str);

  //global.React = React;

  require('../jsx/header.jsx');

  var img = document.createElement('img');
  img.src = require('../img/s.png');

  document.body.appendChild(img);
})(window || this);
