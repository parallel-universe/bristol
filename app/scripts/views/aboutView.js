define(['backbone'], function(Backbone){
  var AboutView = Backbone.View.extend({
    el: '#content-inner',
    template: _.template($('#about-tpl').html()),
    
    render: function () {
      $(this.el).html(this.template());
      return this;
    }
  });
  window.App.Views.AboutView = AboutView;
  return AboutView;
});
