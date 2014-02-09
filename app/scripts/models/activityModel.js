define(['backbone'], function(Backbone){
    var ActivityModel = Backbone.Model.extend({
        defaults: {
            'image-src': '',
            'caption-title': '',
            'caption-description': '',
        }
    });

    App.Models.ActivityModel = ActivityModel;
    return ActivityModel;
});
