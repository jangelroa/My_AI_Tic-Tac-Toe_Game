// Program:     Unbeatable Tic-Tac-Toe Game
// Description:
//              Build a Tic-Tac-Toe game that never can be defeated.

// Author:      Angel Roa
// Date:        March 23, 2015

var show_console = true;

//*******************************************************************
//                       cl( arg )
//*******************************************************************
// Task:    Turn on and off all the console.logs.
// @param:  arg -  What we want to console.log
// @return: No need it.
//
function cl( arg ) {
  if( show_console ) {
      console.log( arg );
  }
} // end of cl( arg ) {}

//*******************************************************************
//                  is_X_winner( state )
//*******************************************************************
// Task:    Call winner_is with "state" and "X" as params.
// @param:  state -  array of the sate of the game.
// @return: The result of calling winner_is( state, "X").
//
function is_X_winner( state ) {
  return winner_is( state, "X");
} // end of is_X_winner( state ) {}


//*******************************************************************
//                  is_O_winner( state )
//*******************************************************************
// Task:    Call winner_is with "state" and "O" as params.
// @param:  state -  array of the sate of the game.
// @return: The result of calling winner_is( state, "O").
//
function is_O_winner( state ) {
  return winner_is( state, "O");
} // end of is_O_winner( state )


//*******************************************************************
//                winner_is( state, player )
//*******************************************************************
// Task:    Check if player won the game.
// @param:  state -  array of the sate of the game.
// @param:  player -  "X" or "O".
// @return: True if player won the game or false otherwise.
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
// Task:    Check if the horizontal line starting with "index" is a
//          winner line for "player".
// @param:  index -  index of the state array.
// @param:  player -  "X" or "O".
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
// Task:    Check if the vertical line starting with "index" is a
//          winner line for "player".
// @param:  index -  index of the state array.
// @param:  player -  "X" or "O".
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
// Task:    Check if the diagonal line starting with "index" is a
//          winner line for "player".
// @param:  index -  index of the state array.
// @param:  player -  "X" or "O".
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

var state = [ "X", "O", "X",

              "O", "X", "_",

              "X", "_", "O"
            ];

if(is_X_winner( state )) {
  cl( "\"X\" is the WINNER" );
} else if(is_O_winner( state )) {
  cl( "\"O\" is the WINNER" );
}else {
  cl( "There is NO Winner" );
}

//*******************************************************************
//              board_is_full( state )
//*******************************************************************
// Task:    Check if the board is full.
// @param:  state -  array of the sate of the game.
// @return: True if the board is full or false otherwise.
//
function board_is_full( state ) {
  // var board_is_full = true;
  for( var i = 0 ; i < state.length ; i++ ) {
    if( state[i] === "_" ) { return false; }
  }
  return true;
} // end of board_is_full( state )


//*******************************************************************
//              minimax( state, depth )
//*******************************************************************
// Task:    Get the maximum score index among of the next possible
//          movements.
// @param:  state -  array of the sate of the game.
// @param:  depth -  following movement level.
// @return: True if this is a winner line or false otherwise.
//
function minimax( state, depth ) {

        cl("state = " + state);
  depth++;
  var scores = [],
      moves = [];
  if( is_X_winner( state ) ) {
    return ( 10 - depth );
  } else if( is_O_winner( state ) ) {
    return ( depth - 10 );
  } else if( board_is_full( state ) ) {
    return 0;
  }

// if it's X's turn
  if( (depth % 2) !== 0 ){
    // Create all possible moves (states)
    cl("posible moves for player \"X\"");
    for( var i = 0 ; i < state.length ; i++ ) {
      if( state[i] === "_" ){
        var move = state.slice();
        // var move = state;
        move[i] = "X";
        cl("move = " + move);
        cl(move);
        moves.push(move);
        scores.push( minimax ( move, depth ) );
        // scores = [9,2,-5,7,0,4,4];
      }
    }
    cl("moves = " + moves);
    cl("scores = " + scores);
    // get the max score index in scores
    var max_score_index = 0;
    var max_score = scores[0];
    for(var i = 1 ; i < scores.length ; i++ ) {
      if( scores[i] > max_score ) {
        max_score_index = i;
        max_score = scores[i];
      }
    }
    cl("max_score_index = " + max_score_index);
    cl("max_score = " + max_score);
    // Select the move with the max score index - moves[max_score_index]
    return max_score;

  } else {
    // Create all possible moves (states)
    cl("posible moves for player \"O\"");
    for( var i = 0 ; i < state.length ; i++ ) {
      if( state[i] === "_" ){
        var move = state.slice();
        // var move = state;
        move[i] = "O";
        cl("move = " + move);
        cl(move);
        moves.push(move);
        scores.push( minimax ( move, depth ) );
        // scores = [9,2,-5,7,0,4,4];
      }
    }
    cl("moves = " + moves);
    cl("scores = " + scores);
    // get the min score index in scores
    var min_score_index = 0;
    var min_score = scores[0];
    for(var i = 1 ; i < scores.length ; i++ ) {
      if( scores[i] > min_score ) {
        min_score_index = i;
        min_score = scores[i];
      }
    }
    cl("min_score_index = " + min_score_index);
    cl("min_score = " + min_score);
    // Select the move with the min score index - moves[max_score_index]
    return min_score;


  }




} // end of minimax( state, depth )


cl("minimax call " + minimax( state, 0 ));

