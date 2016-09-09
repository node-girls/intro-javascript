//getting and adding elements to the page (pre-written code with explanations)

var getElement = function (classname) {
  return document.querySelector(classname);
};

var getValue = function (classname) {
  var el = getElement(classname);
  return el.innerHTML;
};

var displayValue = function (classname, value) {
  var el = getElement(classname);
  return el.innerHTML = value;
};
