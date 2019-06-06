var recipes = new Object({ cake: "eggs" });

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign(object, { key: value });
  return object;
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
