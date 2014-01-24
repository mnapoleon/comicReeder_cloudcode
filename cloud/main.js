// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  var query = new Parse.Query("Comics");
  query.find({
    success: function(results) {
      console.log(results[0]);
      response.success("Hello world!");
    },
    error: function() {
      response.error("no data");
    }
  }); 
});

Parse.Cloud.define("getComics", function(request, response) {
  var query = new Parse.Query("Comics");
  query.find({
    success:  function(results) {
      console.log(results.length);
      var data;
      for (comic in results) {
        data += comic;
      }
      //response.success("Worked!!!");
      response.success(data);
    },
    error : function() {
      response.error("no comics"); 
    }
  });
});
 
Parse.Cloud.define("getWriters", function(req,res) {
  var query = new Parse.Query("Comics");
  query.find({
    success: function(results) {
      var writers = "";
      //for (comic in results) {
      for (var i=0; i< results.length; i++) {
        writers = writers + "**" +  results[i].get("writer");
      }
      res.success(writers);
    },
    error: function() {
      res.errors("No Writers Found");
    }
  });
});