"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
    render: function(){
        return (
            <div>
                <h1>Page Not Found</h1>
                <h4>Whoops, There's Nothing To See Here...</h4>

                <p><Link to="app">Back To Home</Link></p>
            </div>
        );
    }
});

module.exports = NotFoundPage;