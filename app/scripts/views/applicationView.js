define([
    'backbone', 
    'views/navigationView',
    'views/destinationView',
    'views/ratingView',
    'views/aboutView',
    'views/searchView',
    'views/loginView',
    'views/contributeInfoView'
], function (Backbone, NavView, DestView, RateView, AbtView, SrchView, LogView, ContriInfoView){
  var ApplicationView = Backbone.View.extend({
    el: '#content-container',
    template: _.template($('#navigation-tpl').html()),
    initialize: function () {
        // setup page subviews
        App.Views.NavView = new NavView();
        App.Views.DestView = new DestView();
        App.Views.RateView = new RateView();
        App.Views.AbtView = new AbtView();
        App.Views.SrchView = new SrchView();
        App.Views.LogView = new LogView();
        App.Views.ContriInfoView = new ContriInfoView();
        App.Views.NavView.render();
        App.Views.DestView.render();
    },
    render: function () {
      // $(this.el).html(this.template());
      return this;
    }
  });
  window.App.Views.ApplicationView = ApplicationView;
  return ApplicationView;
});
