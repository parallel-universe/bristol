define(['backbone'], function(Backbone){
  var RatingView = Backbone.View.extend({
    el: '#content-inner',
    template: _.template($('#rating-tpl').html()),
    
    render: function () {
      $(this.el).html(this.template());
      $(this.el).find('.list-group-item').tooltip();
      return this;
    }
  });
  window.App.Views.RatingView = RatingView;
  return RatingView;
});
