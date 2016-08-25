var mazeGenerator = {
  generate: function (width, height) {
    var map = emptyMap(width, height);

    var maze = {
      rooms: 20,
      width: width,
      height: height,
      rooms: {

      }
    };

    // create x rooms of random size
    // for x:
    // create random room. (random characteristics - width, length, etc.)
    //   (other qualities such as temperature, dampness etc. could be
    //    completely arbitrary or depend on preceeding room - markov chain style?)
    // if it intersects an existing room, try again
    // add room to data structure

    // how to link the rooms? corridors/tunnels/doorways
    // these need characteristics too. (length, atmosphere, etc.)

    // the characteristics will be use to create textual descriptions later on.

    // return data structure
    return maze;
  },

  emptyMap: function (width, height) {
    var map = [];
    for (var x = 0; x < width; x++){
      for(var y = 0; y < height; y++) {
        map[x][y] = 0;
      }
    }
    return map;
  }
};

module.exports.generate = mazeGenerator.generate;
