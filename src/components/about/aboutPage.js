"use strict";

var React = require('react');

var About = React.createClass({
    //Working with Transitions Example
    // statics: {
    //     willTransitionTo: function(transition, params, query, callback){
    //         if(!confirm('Are You Sure You Want To Go Here?')){
    //             transition.about();
    //         } else {
    //             callback();
    //         }
    //     },
    //     willTransitionFrom: function(transition, component){
    //         if(!confirm('Are You Sure You Want To Leave This Page!?')){
    //             transition.about();
    //         }
    //     }
    // },
    render: function(){
        return (
           <div>
               <h1>About</h1>
               <p>
                   This Application uses the following technologies:
                   <ul>
                       <li>React</li>
                       <li>React Router</li>
                       <li>Flux</li>
                       <li>Node</li>
                       <li>Browserify</li>
                       <li>Bootstrap</li>
                   </ul>
               </p>
           </div>
        );
    }
});

module.exports = About;