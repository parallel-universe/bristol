define(['backbone'], function(Backbone){
  var ProfileView = Backbone.View.extend({
    el: '#content-inner',
    template: _.template($('#profile-tpl').html()),
    
    render: function () {
      $(this.el).html(this.template());
      
      return this;
    }
  });
  window.App.Views.ProfileView = ProfileView;
  return ProfileView;
});
