var VideoListView = Backbone.View.extend({

  el: '.list',

  initialize: function() {
    // this.collection.models.forEach(function(video) {``
    //   new VideoListEntryView({model: video});
    // })
    this.render();
  },

  render: function() {
    console.log(this.template());

    this.$el.children().detach(); //removing all elements from the dom
    this.$el.html(this.template()); //repost everything from template into dom
    //console.log(this.template(this.collection.model));
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
