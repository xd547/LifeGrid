(function() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var drawGrid = function(ctx, cols, rows, width, height) {
     var gridWidth = Math.floor(width / cols);
     var gridHeight = Math.floor(height / rows);

     ctx.strokeRect(1, 1, width - 2, height - 2);

     for (var i = 1; i < cols; i++) {
       ctx.beginPath();
       ctx.moveTo(gridWidth * i, 0);
       ctx.lineWidth = 0.5;
       ctx.lineTo(gridWidth * i, height);
       ctx.stroke();
     }

     for (var i = 1; i < rows; i++) {
       ctx.beginPath();
       ctx.moveTo(0, gridHeight * i);
       ctx.lineWidth = 0.5;
       ctx.lineTo(width, gridHeight * i);
       ctx.stroke();
     }
  };

  var drawBlock = function(ctx, count, cols, rows, width, height) {
    var gridWidth = Math.floor(width / cols);
    var gridHeight = Math.floor(height / rows);

    ctx.fillStyle = "red";

    var row = 0;
    var col = 0
    for (var i = 0; i< count; i++) {
      ctx.fillRect(col * gridWidth, 4 + gridHeight * row, gridWidth, gridHeight - 8);
      col++;
      if (col == cols) {
        col = 0;
        row++;
      }
    }
  };

  var calcMonth = function(year, month, day) {
    var now = new Date();
    var birth = new Date(year, month - 1, day);

    var end = now.getFullYear() - 1;
    var start = birth.getFullYear() + 1;

    var years = end - start;
    var result = years * 12;

    var startMonths = 12 - birth.getMonth() - 1;
    var endMonths = now.getMonth() + 1;

    result += startMonths + endMonths;
    return result;
  };

  var count = calcMonth(1986, 10, 22);
  console.log("count = " + count);
  drawBlock(ctx, count, 30, 30, 600, 600);
  drawGrid(ctx, 30, 30, 600, 600);

}).call(this);
