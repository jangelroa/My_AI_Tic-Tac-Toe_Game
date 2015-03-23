
var show_console = true;

var is_X_winner  = function( state ) {
  return winner_is( state, "X");
}
var is_O_winner  = function( state ) {
  return winner_is( state, "O");
}


var winner_is = function( state, player ) {

//checking horizontal lines
  if( show_console ) { console.log(""); }
  if( show_console ) {  console.log("checking horizontal lines:"); }
  for( var i = 0 ; i <= 6 ; i += 3 ) {
      if( show_console ) {  console.log(""); }
      if( show_console ) {  console.log("row ",i); }
      // check_horizontal_line(i, player);

      if( check_horizontal_line(i, player) ) {
        return true;
      }
  }

//checking vertical lines
  if( show_console ) {  console.log(""); }
  if( show_console ) {  console.log("checking vertical lines:"); }
  for( var i = 0 ; i <= 2 ; i ++ ) {
      if( show_console ) {  console.log(""); }
      if( show_console ) {  console.log("column ",i); }
      // check_horizontal_line(i, player);

      if( check_vertical_line(i, player) ) {
        return true;
      }
  }

  return false;
}



var check_horizontal_line = function(index, player) {

  var is_this_a_winner_line = true;

  for( var j = index ; j <= index+2 ; j++ ) {
      if( show_console ) {  console.log("index",j, state[j]); }
      if( state[j] !== player ) {
        is_this_a_winner_line = false;
      }
  }
  return is_this_a_winner_line;
}

var check_vertical_line = function(index, player) {

  var is_this_a_winner_line = true;

  for( var j = index ; j <= index+6 ; j += 3 ) {
      if( show_console ) {  console.log("index",j, state[j]); }
      if( state[j] !== player ) {
        is_this_a_winner_line = false;
      }
  }
  return is_this_a_winner_line;
}




var state = ["X","O","_","X","O","X","_","O","O"];
// if( show_console ) {  console.log(winner_is(state, "O")); }
if( show_console ) {  console.log(is_X_winner( state )); }
if( show_console ) {  console.log(is_O_winner( state )); }





