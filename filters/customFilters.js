angular.module("customFilters", [])
.filter("unique", function(){
  return function(data, propName){
    if(angular.isArray(data) && angular.isString(propName)){
      var results = [];
      var keys = {};
      for(var i = 0; i < data.length; i++){
        var val = data[i][propName];
        if(angular.isUndefined(keys[val])){
          keys[val] = true;
          results.push(val);
        }
      }
      console.log(keys);
      console.log(results);
      return results;
    }else{
      console.log(data);
      return data;
    }
  }
});