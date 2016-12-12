// Piano pianoGame- Pseudo

// - Make a grid for keys 7 keys (C(C#)D(D#)EF(F#)G(G#)A(A#)B) - possibly #/b\'s also?
// - Get audio set up, sample of each individual pitched note
// - Assign to each corresponding piano key in grid
// - Map to MacBook keyboard: ASDFGHJ === Notes: CDEFGAB

// window.addEventListener('DOMContentLoaded', start);
//
// function start(){
//   var white = document.getElementsByTagName('li');
//   addListener(white);
//   function addListener(white){
//     for (var i = 0; i < white.length; i++){
//       white[i].addEventListener('click', playSound);
//     }
//   }
//   function playSound(){
//     // // var soundId = 's' + this.id;
//     // var correctSound = document.getElementById(soundId);
//     // correctSound.play();
//     console.log('click');
//     new Audio('../audio/' + this.getAttribute('data-key') + '.wav').play();
//   }
// }
//
// window.addEventListener('keydown', function(e) {
//   console.log(e.keyCode);
//
//
//   switch(e.keyCode) {
//     case 65:
//       new Audio('../audio/' + e.keyCode + '.wav').play();
//       break;
//     case 83:
//       new Audio('../audio/' + e.keyCode + '.wav').play();
//       break;
//     case 68:
//       new Audio('../audio/' + e.keyCode + '.wav').play();
//       break;
//     case 70:
//       new Audio('../audio/' + e.keyCode + '.wav').play();
//       break;
//     case 71:
//       new Audio('../audio/' + e.keyCode + '.wav').play();
//       break;
//     case 72:
//       new Audio('../audio/' + e.keyCode + '.wav').play();
//       break;
//     case 74:
//       new Audio('../audio/' + e.keyCode + '.wav').play();
//   }
// });


// Experimenting for generation of random sequence...

// - Make a sequence of a certain length (option: random OR series of preset
// sequence.
// - Light up the keys when played
// - Record user input
// - Check sequence against user input
// - Display result
// - Start again with a harder sequence
// If user enters fail, restart game

// Create the start button
// var start = document.getElementsByTagName('button');
// start.addEventListener('click', chooseSequence);
// };
//
// var count = 3
// for (var i = 0; i < count; i++){
//   [65,]
// }
//
// // array off 65 72 69, find a way to loop over this array and simulate a key down on these to play tune (key down on element)
// // then listen for users array (second array)
// //
// // sequence array === user array
// // call upon that and add another note/keypress
// // repeat OR game over
//
//
//

// var array = [65, 68, 70, 71, 72, 74, 83]
//
// var seq = [ ];
//
// var seq = [65,68,71]
//
// var useq = [" "]
//
// if( seq === useq)
//
// function nextStep() {
//
// }
//

var Game = Game || {};

Game.userInputs = function() {
  // listen for user key presses
  // when a user makes a keypress, push the keycode into the array userSequence
  //  when userSequence.length is === the value of Game.count
  // write a function to compare the two sequence arrays
  window.addEventListener('keydown', function(e) {
    console.log(e.keyCode);
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
  });


};

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






  // this.audio = new Audio();
  // for (var i = 0; i < this.sequence.length; i++) {
  //   setTimeout(function(i) {
  //     var e = $.Event('keydown');
  //     e.which = Game.sequence[i];
  //     $("ul").find("[data-key='" + Game.sequence[i] + "']").addClass('selected');
  //     new Audio('../audio/' + Game.sequence[i] + '.wav').play();
  //   }, 0 + (i * 500), i);
  // }
};

Game.randomSequence = function() {
  for (var i = 0; i < this.count; i++) {
    var item = this.keys[Math.floor(Math.random()*this.keys.length)];
    this.sequence.push(item);
  }

  this.playSequence();
};

// Game.eventListeners = function() {
//   window.addEventListener('keydown', function(e) {
//     console.log(e.keyCode);
//     switch(e.keyCode) {
//       case 65:
//       new Audio('../audio/' + e.keyCode + '.wav').play();
//       break;
//       case 83:
//       new Audio('../audio/' + e.keyCode + '.wav').play();
//       break;
//       case 68:
//       new Audio('../audio/' + e.keyCode + '.wav').play();
//       break;
//       case 70:
//       new Audio('../audio/' + e.keyCode + '.wav').play();
//       break;
//       case 71:
//       new Audio('../audio/' + e.keyCode + '.wav').play();
//       break;
//       case 72:
//       new Audio('../audio/' + e.keyCode + '.wav').play();
//       break;
//       case 74:
//       new Audio('../audio/' + e.keyCode + '.wav').play();
//       break;
//     }
//   });
// };


Game.start = function() {
  this.count = 3;
  this.sequence     = [];
  this.userSequence = [];
  this.keys         = [65, 68, 70, 71, 72, 74, 83];

  this.randomSequence();
  // this.eventListeners();
};

$(Game.start.bind(Game));
