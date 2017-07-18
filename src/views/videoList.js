var VideoListView = Backbone.View.extend({

  initialize: function() {
    //console.log(this.collection);//
    this.render();
  },

  render: function() {
    this.$el.children().detach(); //removing all elements from the dom
    this.$el.html(this.template(this.collection.model)); //repost everything from template into dom
    console.log(this.template(this.collection.model));
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
