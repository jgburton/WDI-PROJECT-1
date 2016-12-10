// Piano pianoGame- Pseudo

// - Make a grid for keys 7 keys (C(C#)D(D#)EF(F#)G(G#)A(A#)B) - possibly #/b\'s also?
// - Get audio set up, sample of each individual pitched note
// - Assign to each corresponding piano key in grid
// - Map to MacBook keyboard: ASDFGHJ === Notes: CDEFGAB
// - Make a sequence of a certain length (option: random OR series of preset
// sequence.
// - Light up the keys when played
// - Record user input
// - Check sequence against user input
// - Display result
// - Start again with a harder sequence
// If user enters fail, restart game

window.addEventListener('DOMContentLoaded', start);


function start(){
  var white = document.getElementsByTagName('li');
  addListener(white);
  function addListener(white){
    for (var i = 0; i < white.length; i++){
      white[i].addEventListener('click', playSound);
    }
  }
  function playSound(){
    var soundId = 's' + this.id;
    var correctSound = document.getElementById(soundId);
    correctSound.play();
  }
}
//
// }
// (new Audio('audio/A.wav')).play()
