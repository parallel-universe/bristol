define(['backbone'], function(Backbone){
  var ContributeInfoView = Backbone.View.extend({
    el: '#content-inner',
    template: _.template($('#contribute-info-tpl').html()),
    
    render: function () {
      $(this.el).html(this.template());
      $(this.el).find('.list-group-item').tooltip();
      return this;
    }
  });
  window.App.Views.ContributeInfoView = ContributeInfoView;
  return ContributeInfoView;
});
