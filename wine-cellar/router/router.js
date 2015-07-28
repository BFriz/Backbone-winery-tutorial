// 4
// The Router provides entry point of this application through a set of (deep-linkable) URLS

var AppRouter = Backbone.Router.extend({

  routes:{
    // The default route that displays the list of wine.
    "":"list",
    // Displays the details of a specific wine in the wine form. 
    "wines/:id":"wineDetails"
  },

  list:function () {
    this.wineList = new WineCollection();
    this.wineListView = new WineListView({model:this.wineList});
    this.wineList.fetch();
    $('#sidebar').html(this.wineListView.render().el);
  },
  wineDetails:function (id) {
    this.wine = this.wineList.get(id);
    this.wineView = new WineView({model:this.wine});
    $('#content').html(this.wineView.render().el);
  }
});

var app = new AppRouter();
Backbone.history.start();