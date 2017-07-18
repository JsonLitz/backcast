var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    });

    new VideoPlayerView({
      el: this.$('player'),
      collection: this.videos,
      model: this.videos.at(0)
      });
    return this;
  },

  template: templateURL('src/templates/app.html')

});

console.log('Hello from app.js');
