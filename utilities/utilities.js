// UTILITIES
// Export both the function and myObject, inline.
// Import both using the * operator (as = utilities).

function iterator(data){
  data.forEach(function(item){
    console.log("Item:", item)
  })
};

var myObject = {
  array: ["motheboard", "memory", "processor"],
  greeting: function(name){
    return console.log("Hello, my name is " + name + ".");
  }
};

export { iterator, myObject };
