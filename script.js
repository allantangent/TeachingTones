function myFunc() {
  document.write( "big mig fig lig pig wig zig n" );
}

function run() {
  var counter = 0;
  var homeBg = document.getElementById( "body" );
  var animation = setInterval( anime, 42 );

  function anime() {
    homeBg.style.backgroundPositionX = counter + "px";
    counter++;
  }
}
