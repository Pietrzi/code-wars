// Bob needs a fast way to calculate the volume of a cuboid with three values: 
// length, width and the height of the cuboid. 
// Write a function to help Bob with this calculation.

// solutions


// 1

var Kata;

Kata = (function() {
  function Kata() {}

  Kata.getVolumeOfCuboid = function(length, width, height) {
    return length * width * height;
  };

  return Kata;

})();


// 2

class Kata {
    static getVolumeOfCuboid(l, w, h) {
      return l * w * h;
    }
};


// 3

const Kata = {
    getVolumeOfCuboid : (length, width, height) => length * width * height
}


// 4

var Kata = (() => {
    this.getVolumeOfCuboid = (l, w, h) => l * w * h;
    return this;
  })();