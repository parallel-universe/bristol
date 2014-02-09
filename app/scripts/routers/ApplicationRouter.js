define([
    'backbone', 
    'views/applicationView'
], function (Backbone, AppView){
  var ApplicationRouter = Backbone.Router.extend({
    routes: {
        'home': 'home',
        'about': 'about',
        'rating': 'rating',
        'search': 'search'
    },

    initialize: function () {
        App.Views.AppView = new AppView();
        App.Views.AppView.render();
    },
    home: function () {
        App.Views.DestView.render();
    },
    about: function () {
        App.Views.AbtView.render();
    },
    rating: function () {
        App.Views.RateView.render();
    },
    search: function () {
        App.Views.SrchView.render();
    }
  });

  App.Routers.ApplicationRouter = ApplicationRouter;
  return ApplicationRouter;
});
