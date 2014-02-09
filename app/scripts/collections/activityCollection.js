define(['backbone', ], function(Backbone){
  var ActivityCollection = Backbone.Collection.extend({
    model: App.Models.ActivityModel
  });

  App.Collections.ActivityCollection = ActivityCollection;
  return ActivityCollection;
});
