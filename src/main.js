"use strict";
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

//Router.HistoryLocation turns off the hash, 2nd parameter
Router.run(routes, function(Handler){
    React.render(<Handler/>, document.getElementById('app'));
});

