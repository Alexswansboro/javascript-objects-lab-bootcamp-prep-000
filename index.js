var recipes = {}
var obj = {prop: 1}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}
 
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object [key] = value;
  return object
}
function deleteFromObjectByKey(object, value) {
 object [key] = value;
 return value
}
function destructivelyDeleteFromObjectByKey(object, key) {
 var newobj = {}
  return newobj
}
