/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        stars: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        stars: '../bower_components/bootstrap-rating-input/src/bootstrap-rating-input',
        async: '../bower_components/requirejs-plugins/src/async',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap'
    }
});

window.App = window.App || {};
App.Routers = App.Routers || {};
App.Views = App.Views || {};
App.Models = App.Models || {};
App.Collections = App.Collections || {};

require([
    'backbone',
    'stars',
    'bootstrap',
    'routers/ApplicationRouter'
], function (Backbone, Stars, Bootstrap, ApplicationRouter) {
    App.Router = new App.Routers.ApplicationRouter();
    Backbone.history.start();
});
