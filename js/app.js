// Piano Memory Game

var Game = Game || {};

Game.start = function() {
  this.count = 2;
  this.sequence     = [];
  this.userSequence = [];
  this.keys         = [65, 68, 70, 71, 72, 74, 83];

  this.assignbutton();
  // this.eventListeners();
  // this.assignbutton();
};

$(Game.start.bind(Game));

// 1. Play button assignment
Game.assignbutton = function assignbutton() {
  $('button').on('click', function(){
    Game.randomSequence();
  });
};

// 2. Generate random sequence
Game.randomSequence = function() {
  for (var i = 0; i < this.count; i++) {
    var item = this.keys[Math.floor(Math.random()*this.keys.length)];
    this.sequence.push(item);
  }

  this.playSequence();
};

// 3. Play random sequence and light up keys
Game.playSequence = function() {

  var i = 0;
  var interval = setInterval(function() {
    $('ul').find("[data-key='" + Game.sequence[i] + "']").addClass('selected');
    var e   = $.Event('keydown');
    e.which = Game.sequence[i];
    new Audio('../audio/' + Game.sequence[i] + '.wav').play();

    setTimeout(function() {
      $('ul').find("[data-key='" + Game.sequence[i] + "']").removeClass('selected');
      i++;
    }, 600);

    if ( i >= Game.sequence.length) {
      clearInterval(interval);
      // Game.userInputs();
    }
  }, 800);
};




// // 4.Get User Input
Game.userInputs = function() {
//   // listen for user key presses
//   $('data-key').on('keydown', function(){
//     console.log('data-key clicked');
//     // Game.compareUserAndCompInput();
//   });
//   // when a user makes a keypress, push the keycode into the array userSequence
//   //  when userSequence.length is === the value of Game.count
//   // write a function to compare the two sequence arrays

  window.addEventListener('keydown', function(e) {
    console.log(e.keyCode);
    Game.userSequence.push(e.keyCode);
    switch(e.keyCode) {
      case 65:
        new Audio('../audio/' + e.keyCode + '.wav').play();
        break;
      case 83:
        new Audio('../audio/' + e.keyCode + '.wav').play();
        break;
      case 68:
        new Audio('../audio/' + e.keyCode + '.wav').play();
        break;
      case 70:
        new Audio('../audio/' + e.keyCode + '.wav').play();
        break;
      case 71:
        new Audio('../audio/' + e.keyCode + '.wav').play();
        break;
      case 72:
        new Audio('../audio/' + e.keyCode + '.wav').play();
        break;
      case 74:
        new Audio('../audio/' + e.keyCode + '.wav').play();
        break;
    }
    if(Game.userSequence.length === Game.count){
      if (Game.checkForWin()){
        alert('Well done you matched the sequence');
      }
    }
  });
};
