define(['backbone'], function(Backbone){
  var SearchView = Backbone.View.extend({
    el: '#content-inner',
    template: _.template($('#search-tpl').html()),
    render: function () {
      $(this.el).html(this.template());
      return this;
    }
  });
  window.App.Views.SearchView = SearchView;
  return SearchView;
});
