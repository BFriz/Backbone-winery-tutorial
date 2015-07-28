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
window.WineView = Backbone.View.extend({
  template:_.template($('#tpl-wine-details').html()),

  render: function (eventName) {
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  }
})

