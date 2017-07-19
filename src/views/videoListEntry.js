var VideoListEntryView = Backbone.View.extend({

  // initialize: function() {
  //   // this.render();
  //   this.model.select();
  // },

  events: {
    'click. video-list-entry-title': 'handleClick'
  },

  handleClick: function() {
    this.model.select();
    console.log('click');
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});

//<div class="video-list-entry-title">Cute cat video</div>
//^^ why does template automatically append to this specific class in html?


  // select: function() {
  //   this.trigger('select', this);
  // }
