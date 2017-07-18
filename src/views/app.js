var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    this.videoListView =  new VideoListView();
    this.videoPlayer =  new VideoPlayerView();
    console.log(this.el);
    this.$el.append(this.videoPlayer.$el)
    this.$el.append(this.videoListView.$el);
    return this;
  },

  template: templateURL('src/templates/app.html')

});

console.log('Hello from app.js');
