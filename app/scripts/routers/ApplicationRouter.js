define([
    'backbone', 
    'views/applicationView'
], function (Backbone, AppView){
  var ApplicationRouter = Backbone.Router.extend({
    routes: {
        'home': 'home',
        'about': 'about',
        'rating': 'rating',
        'search': 'search',
        'login': 'login'
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
    },
    login: function () {
        App.Views.LogView.render();
    }
  });

  App.Routers.ApplicationRouter = ApplicationRouter;
  return ApplicationRouter;
});
