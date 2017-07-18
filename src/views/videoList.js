var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.render();
    this.collection.models.forEach(function(video) {
      video.render();
    })

  },

  render: function() {
    this.$el.children().detach(); //removing all elements from the dom
    this.$el.html(this.template(this.collection.model)); //repost everything from template into dom
    //console.log(this.template(this.collection.model));
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
