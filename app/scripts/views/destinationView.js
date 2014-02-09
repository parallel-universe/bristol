define(['backbone'], function(Backbone){
  var DestinationView = Backbone.View.extend({
    el: '#content-inner',
    template: _.template($('#popular-days-tpl').html()),
    
    render: function () {
      $(this.el).html(this.template());
      return this;
    }
  });
  window.App.Views.DestinationView = DestinationView;
  return DestinationView;
});
