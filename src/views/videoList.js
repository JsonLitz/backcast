var VideoListView = Backbone.View.extend({

  // initialize: function() {
  //   this.render();
  // },

  render: function() {
    this.$el.children().detach(); //removing all elements from the dom
    this.$el.html(this.template()); //repost everything from template into dom

    this.$('.video-list').append(
      this.collection.map(function(video) {
        return new VideoListEntryView({model: video}).render().el;
      })
  );
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
