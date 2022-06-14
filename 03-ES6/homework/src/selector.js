var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)){
    resultSet.push(startEl);
  }
  for (let i = 0; i < startEl.children.length; i++) {
    let child = startEl.children[i];
    let result = traverseDomAndCollectElements(matchFunc, child);
    resultSet = [...resultSet, ...result]
  }
  
  return resultSet; 
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function (selector) {
  // tu código aquí
  let tipo;
  if (selector[0] === '#') {
    tipo = "id";
  }
  else if (selector[0] === '.') {
    tipo = "class";
  }
  else if (selector.includes('.')) {
    tipo = "tag.class"
  }
  else {
    tipo = "tag";
  }
  return tipo;
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = function (elemento) {
      return elemento.id === selector.slice(1);
    }
  } else if (selectorType === "class") {
    matchFunction = function (elemento) {
      return contains(elemento.className.split(" "), selector.slice(1));
    }
  } else if (selectorType === "tag.class") {
    matchFunction = function (elemento) {
      return elemento.tagName.toLowerCase() === selector.slice(0, selector.indexOf('.')) && contains(elemento.className.split(" "), selector.slice(selector.indexOf('.') + 1));
    }
  } else if (selectorType === "tag") {
    matchFunction = function (elemento) {
      return elemento.tagName.toLowerCase() === selector;
    }
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

function contains(array, elemento) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      return true;
    }
  }
  return false;
}