define(['backbone'], function(Backbone){
  var LoginView = Backbone.View.extend({
    el: '#content-inner',
    template: _.template($('#login-tpl').html()),
    render: function () {
      $(this.el).html(this.template());
      return this;
    }
  });
  window.App.Views.LoginView = LoginView;
  return LoginView;
});
