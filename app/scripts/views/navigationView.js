define(['backbone'], function(Backbone){
  var NavigationView = Backbone.View.extend({
    el: '#nav-container',
    template: _.template($('#navigation-tpl').html()),
    events: {
      'click .nav li a': 'handleNav' 
    },
    render: function () {
      $(this.el).html(this.template());
      return this;
    },
    handleNav: function (e) {
      $('.nav li.active').removeClass('active');
      $(e.target).parent().addClass('active');
    }
  });
  window.App.Views.NavigationView = NavigationView;
  return NavigationView;
});
