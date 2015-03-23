// Program:     Unbeatable Tic-Tac-Toe Game
// Description:
//              Build a Tic-Tac-Toe game that never can be defeated.

// Author:      Angel Roa
// Date:        March 23, 2015

var show_console = true;

//*******************************************************************
//         cl( arg1, arg2, arg3 )
//*******************************************************************
// Task: Turn on and off all the console.logs.
// @params arg1, arg2, arg3 -  params for console.log
// @return No need it.
//
function cl( arg1, arg2, arg3 ) {
  if( show_console ) {

    if( arg3 ) {
      console.log( arg1, arg2, arg3 );
    } else if( arg2 ) {
      console.log( arg1, arg2 );
    }else {
      console.log( arg1 );
    }
  }
} // end of cl( arg1, arg2, arg3 ) {}

//*******************************************************************
//                  is_X_winner( state )
//*******************************************************************
// Task: Call winner_is with "state" and "X" as params.
// @param: state -  array of the sate of the game.
// @return: The result of calling winner_is( state, "X").
//
function is_X_winner( state ) {
  return winner_is( state, "X");
} // end of is_X_winner( state ) {}


//*******************************************************************
//                  is_O_winner( state )
//*******************************************************************
// Task: Call winner_is with "state" and "O" as params.
// @param: state -  array of the sate of the game.
// @return: The result of calling winner_is( state, "O").
//
function is_O_winner( state ) {
  return winner_is( state, "O");
} // end of is_O_winner( state )


//*******************************************************************
//                winner_is( state, player )
//*******************************************************************
//  Task: Check if player won the game.
//  @param: state -  array of the sate of the game.
//  @param: player -  "X" or "O".
//  @return: True if player won the game or false otherwise.
//
function winner_is( state, player ) {

//checking horizontal lines
  cl("");
  cl("checking horizontal lines for player = \"" + player + "\":");
  for( var i = 0 ; i <= 6 ; i += 3 ) {
      cl( "" );
      cl( "row starting with index " + i );

      if( check_horizontal_lines( i, player ) ) {
        cl("row starting with index " + i + " is a WINNER line for player \"" + player + "\"" );
        return true;
      }
  }

//checking vertical lines
  cl("");
  cl("checking vertical lines for player = \"" + player + "\":");
  for( var i = 0 ; i <= 2 ; i ++ ) {
      cl( "" );
      cl( "column starting with index " + i );

      if( check_vertical_lines( i, player ) ) {
        cl("column starting with index " + i + " is a WINNER line for player \"" + player + "\"" );
        return true;
      }
  }

//checking diagonal lines
  cl("");
  cl("checking diagonal lines for player = \"" + player + "\":");

  for( var i = 0 ; i <= 2 ; i += 2 ) {
      cl( "" );
      cl( "diagonal starting with index " + i );
    if( check_diagonal_lines( i, player ) ) {
      cl("diagonal starting with index " + i + " is a WINNER line for player \"" + player + "\"" );
      return true;
    }
  }

  return false;
} // end of winner_is( state, player )

//*******************************************************************
//         check_horizontal_line( index, player )
//*******************************************************************
// Task: Check if the horizontal line starting with "index" is a
//       winner line for "player".
// @param: index -  index of the state array.
// @param: player -  "X" or "O".
// @return: True if this is a winner line or false otherwise.
//
function check_horizontal_lines( index, player ) {

  var is_this_a_winner_line = true;

  for( var j = index ; j <= index+2 ; j++ ) {
      cl("index " + j + ": " + state[j]);
      if( state[j] !== player ) {
        is_this_a_winner_line = false;
      }
  }
  return is_this_a_winner_line;
} // end of check_horizontal_line( index, player )

//*******************************************************************
//         check_vertical_lines( index, player )
//*******************************************************************
// Task: Check if the vertical line starting with "index" is a
//       winner line for "player".
// @param: index -  index of the state array.
// @param: player -  "X" or "O".
// @return: True if this is a winner line or false otherwise.
//
function check_vertical_lines( index, player ) {

  var is_this_a_winner_line = true;

  for( var j = index ; j <= index+6 ; j += 3 ) {
      cl("index " + j + ": " + state[j]);
      if( state[j] !== player ) {
        is_this_a_winner_line = false;
      }
  }
  return is_this_a_winner_line;
} // end of check_vertical_lines( index, player )

//*******************************************************************
//         check_diagonal_lines( index, player )
//*******************************************************************
// Task: Check if the diagonal line starting with "index" is a
//       winner line for "player".
// @param: index -  index of the state array.
// @param: player -  "X" or "O".
// @return: True if this is a winner line or false otherwise.
//
function check_diagonal_lines( index, player ) {

  var is_this_a_winner_line = true;
  var increment_to_build_diagonal = 4;
  var last_index = 8;
  if(index === 2) {
    increment_to_build_diagonal = 2;
    last_index = 6
  }

  for( var j = index ; j <= last_index ; j += increment_to_build_diagonal ) {
      cl("index " + j + ": " + state[j]);
      if( state[j] !== player ) {
        is_this_a_winner_line = false;
      }
  }
  return is_this_a_winner_line;
} // end of check_diagonal_lines( index, player )



// state indexes
// var state = [ 0, 1, 2,

//               3, 4, 5,

//               6, 7, 8
//             ];

var state = [ "X", "O", "O",

              "X", "O", "X",

              "O", "_", "O"
            ];

if(is_X_winner( state )) {
  cl( "X is the WINNER" );
} else if(is_O_winner( state )) {
  cl( "O is the WINNER" );
}else {
  cl( "There is NO Winner" );
}

// cl(is_X_winner( state ));
// cl(is_O_winner( state ));





