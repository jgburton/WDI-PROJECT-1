// Piano Memory Game

var Game = Game || {};

Game.start = function() {
  this.assignbutton();
  // this.eventListeners();
  // this.assignbutton();
};

$(Game.start.bind(Game));

// 1. Play button assignment
Game.assignbutton = function assignbutton() {
  $('.Play').on('click', function() {
    Game.settings();
    Game.play = true;
    Game.randomSequence();
  });
  $('.jam').on('click', function() {
    Game.play = false;
    Game.userInputs();
  });
};

Game.settings = function() {
  this.count = 2;
  this.keyPressCounter = 0;
  this.sequence     = [];
  this.userSequence = [];
  this.keys         = [65, 68, 70, 71, 72, 74, 83];
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
      Game.userInputs();
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
  $(window).off('keydown');
  $(window).on('keydown', function(e) {
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
      case 75:
      new Audio('../audio/' + e.keyCode + '.wav').play();
      break;
    }
    var $whites = $('.white');
    for (var i = 0; i < $whites.length; i++) {
      if (parseInt($whites[i].getAttribute('data-key')) === e.keyCode){
        var hold = i;
        $($whites[hold]).addClass('selected');
        setTimeout(function(){
          $($whites[hold]).removeClass('selected');
        }, 600);
      }
    }
    if (Game.play) {
      Game.keyPressCounter++;
      Game.userSequence.push(e.keyCode);
      console.log(Game.userSequence);
      if(Game.count === Game.userSequence.length){
        console.log('same');
        Game.checkForWin();
      }
    }
  });
};

// 5. Match Logic of sequence and user
Game.checkForWin = function(){
  $(window).off('keydown');
  console.log('working');

  if (Game.userSequence.toString() === Game.sequence.toString()) {
    console.log('WELL DONE');
    //Reset bellow
    Game.userSequence = [];
    Game.count++;
    var item = this.keys[Math.floor(Math.random()*this.keys.length)];
    Game.sequence.push(item);

    setTimeout(function() {
      Game.playSequence();
    }, 500);

  } else {
    Game.settings();
    console.log('you fail');
    alert('You Fail! Please press play ► to start over...');
  }
};
