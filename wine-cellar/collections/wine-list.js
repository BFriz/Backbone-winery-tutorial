// 2
window.WineCollection = Backbone.Collection.extend({
  model:Wine,
  // url provides the endpoint for the RESTFul API. This is all that is needed to CRUD wines with Backbone's simple model API
  url:"../api/wines"
});