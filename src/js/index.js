var template = require('../jade/index.jade');

var str = template({name: 'wangfan'});

import jQuery from 'jquery';
window.jQuery = jQuery;

jQuery('body').append(str);

jQuery('title').text('learn webpack');

require('bootstrap');
require('bootstrap/less/bootstrap.less');
require('../less/index.less');

import React from 'react';
window.React = React;

require('../jsx/header.jsx');
