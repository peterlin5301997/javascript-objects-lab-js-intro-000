var recipes = new Object({ cake: "eggs", "flour" });

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, object, {key: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var test = Object.assign({}, object);
  delete test[key];
  return test;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
