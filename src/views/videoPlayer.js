var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  initialize: function() {
    this.render();
  },


  render: function() {
    console.log(this.model);
    this.$el.html('<div class="loading">Please wait...</div>');
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
