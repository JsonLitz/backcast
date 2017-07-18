var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.render();
    this.model.select();
  },

  render: function() {
    //console.log('Model', this.model);
    //console.log('Template', this.template(this.model.attributes));
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
