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
var newObj = Object.assign({}, object)
delete newObj[key]
return newObj
}
function destructivelyDeleteFromObjectByKey(object, key) {
delete obj[key]
return object
}
