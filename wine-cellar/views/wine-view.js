// 3
window.WineListView = Backbone.View.extend({
  tagName:'ul',

  initialize:function () {
    // this is = to s {cid: "view1", model: s, $el: n.fn.init[1], el: ul}
    // Includes the models
    this.model.bind("reset", this.render, this);
  },
  // The render() function iterates through the collection, instantiates a WineListItemView for each wine in the collections and adds it to the wineList
  render:function (eventName) {
    _.each(this.model.models, function (wine) {
      $(this.el).append(new WineListItemView({model:wine}).render().el);
    }, this);
    return this;
  }
});

window.WineListItemView = Backbone.View.extend({

  tagName:"li",

  template:_.template($('£tpl-wine-list-item').html()),

  render:function (eventName) {
    // The render()function merges the model data into "wine-list-item" template (defined in index.html) By defining a separate View for list items you will make it easy to update(re-render) a specific list item when the backing model changes without re-rendering the entire list.

    $(this.el).html(this.template(this.model.toJSON()));
  }
});
// The view resonsible for displaying the wine details in the Wine form.
window.WineView = Backbone.View.extend({
  template:_.template($('#tpl-wine-details').html()),
// The render() function merges the model data (a specfic wine) into the "wine-details" template retrieved from index.html
  render: function (eventName) {
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  }
})

