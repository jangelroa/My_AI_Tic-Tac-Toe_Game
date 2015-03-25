// Program:     Unbeatable Tic-Tac-Toe Game
// Description: Build a Tic-Tac-Toe game that never can be defeated.
//              It uses the minimax recursive algorithm.
// Author:      Angel Roa
// Email:       jangelroa@gmail.com
// Website:     www.jangelroa.com
// LinkedIn:    https://www.linkedin.com/in/jangelroa
// Date:        March 23, 2015

var show_console = true;

//*******************************************************************
//                       cl( arg )
//*******************************************************************
// Task:    Turn on and off all the console.logs.
// @param:  arg - What we want to console.log
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
// @param:  state - array of the state of the game.
// @return: The result of calling winner_is( state, "X").
//
function is_X_winner( state ) {
  return winner_is( state, "X");
} // end of is_X_winner( state ) {}


//*******************************************************************
//                  is_O_winner( state )
//*******************************************************************
// Task:    Call winner_is with "state" and "O" as params.
// @param:  state -  array of the state of the game.
// @return: The result of calling winner_is( state, "O").
//
function is_O_winner( state ) {
  return winner_is( state, "O");
} // end of is_O_winner( state )


//*******************************************************************
//                winner_is( state, player )
//*******************************************************************
// Task:    Check if player won the game.
// @param:  state -  array of the state of the game.
// @param:  player -  "X" or "O".
// @return: True if player won the game or false otherwise.
//
function winner_is( state, player ) {

//checking horizontal lines
  // console.log("");
  // console.log("checking horizontal lines for player = \"" + player + "\":");
  for( var i = 0 ; i <= 6 ; i += 3 ) {
      // console.log( "" );
      // console.log( "row starting with index " + i );

      if( check_horizontal_lines( state, i, player ) ) {
        console.log("row starting with index " + i + " is a WINNER line for player \""
           + player + "\"" );
        return true;
      }
  }

//checking vertical lines
  // console.log("");
  // console.log("checking vertical lines for player = \"" + player + "\":");
  for( var i = 0 ; i <= 2 ; i ++ ) {
      // console.log( "" );
      // console.log( "column starting with index " + i );

      if( check_vertical_lines( state, i, player ) ) {
        console.log("column starting with index " + i + " is a WINNER line for player \""
           + player + "\"" );
        return true;
      }
  }

//checking diagonal lines
  // console.log("");
  // console.log("checking diagonal lines for player = \"" + player + "\":");

  for( var i = 0 ; i <= 2 ; i += 2 ) {
      // console.log( "" );
      // console.log( "diagonal starting with index " + i );
    if( check_diagonal_lines( state, i, player ) ) {
      console.log("diagonal starting with index " + i + " is a WINNER line for player \""
         + player + "\"" );
      return true;
    }
  }

  return false;
} // end of winner_is( state, player )

//*******************************************************************
//         check_horizontal_lines( state, index, player )
//*******************************************************************
// Task:    Check if the horizontal line starting with "index" is a
//          winner line for "player".
// @param:  state - array of the state of the game.
// @param:  index -  index of the state array.
// @param:  player -  "X" or "O".
// @return: True if this is a winner line or false otherwise.
//
function check_horizontal_lines( state, index, player ) {

  var is_this_a_winner_line = true;

  for( var j = index ; j <= index+2 ; j++ ) {
      // console.log("index " + j + ": " + state[j]);
      if( state[j] !== player ) {
        is_this_a_winner_line = false;
      }
  }
  return is_this_a_winner_line;
} // end of check_horizontal_lines( state, index, player )

//*******************************************************************
//         check_vertical_lines( state, index, player )
//*******************************************************************
// Task:    Check if the vertical line starting with "index" is a
//          winner line for "player".
// @param:  state - array of the state of the game.
// @param:  index -  index of the state array.
// @param:  player -  "X" or "O".
// @return: True if this is a winner line or false otherwise.
//
function check_vertical_lines( state, index, player ) {

  var is_this_a_winner_line = true;

  for( var j = index ; j <= index+6 ; j += 3 ) {
      // console.log("index " + j + ": " + state[j]);
      if( state[j] !== player ) {
        is_this_a_winner_line = false;
      }
  }
  return is_this_a_winner_line;
} // end of check_vertical_lines( state, index, player )

//*******************************************************************
//         check_diagonal_lines( state, index, player )
//*******************************************************************
// Task:    Check if the diagonal line starting with "index" is a
//          winner line for "player".
// @param:  state - array of the state of the game.
// @param:  index -  index of the state array.
// @param:  player -  "X" or "O".
// @return: True if this is a winner line or false otherwise.
//
function check_diagonal_lines( state, index, player ) {

  var is_this_a_winner_line = true;
  var increment_to_build_diagonal = 4;
  var last_index = 8;
  if(index === 2) {
    increment_to_build_diagonal = 2;
    last_index = 6
  }

  for( var j = index ; j <= last_index ; j += increment_to_build_diagonal ) {
      // console.log("index " + j + ": " + state[j]);
      if( state[j] !== player ) {
        is_this_a_winner_line = false;
      }
  }
  return is_this_a_winner_line;
} // end of check_diagonal_lines( state, index, player )

// state indexes
// var state = [ 0, 1, 2,

//               3, 4, 5,

//               6, 7, 8
//             ];

var state = [ "X", "O", "X",

              "O", "X", "_",

              "O", "_", "O"
            ];

// if(is_X_winner( state )) {
//   console.log( "\"X\" is the WINNER" );
// } else if(is_O_winner( state )) {
//   console.log( "\"O\" is the WINNER" );
// }else {
//   console.log( "There is NO Winner" );
// }

//*******************************************************************
//              board_is_full( state )
//*******************************************************************
// Task:    Check if the board is full.
// @param:  state -  array of the state of the game.
// @return: True if the board is full or false otherwise.
//
function board_is_full( state ) {
  // var board_is_full = true;
  for( var i = 0 ; i < state.length ; i++ ) {
    if( state[i] === "_" ) { return false; }
  }
  return true;
} // end of board_is_full( state )

  var scores,
      moves;
//*******************************************************************
//              minimax( state, depth )
//*******************************************************************
// Task:    Get the maximum score index among of the next possible
//          movements.
// @param:  state -  array of the state of the game.
// @param:  depth -  following movement level.
// @return: True if this is a winner line or false otherwise.
//
function minimax( state, depth ) {

  depth++;
  console.log("state = " + state);
  console.log(" DEPTH " + depth + " DEPTH " + depth + " DEPTH " + depth + " DEPTH " + depth + " DEPTH " + depth + " DEPTH " + depth + " DEPTH " + depth + " DEPTH " + depth + " DEPTH " + depth );

  if( is_X_winner( state ) ) {
    console.log("X is a winner - score = " + ( 10-depth ));
    return ( 10 - depth );
  } else if( is_O_winner( state ) ) {
    console.log("O is a winner - score = " + ( depth - 10 ));
    return ( depth - 10 );
  } else if( board_is_full( state ) ) {
    console.log("There is no winner - score = 0 ");
    return 0;
  }

  scores = [];
  moves = [];

// if it's X's turn, get the max score
  if( (depth % 2) !== 0 ){
    // Create all possible moves (states)
    for( var i = 0 ; i < state.length ; i++ ) {
      if( state[i] === "_" ){
        var move = state.slice();
        // var move = state;
        move[i] = "X";
        console.log("move = " + move);
        console.log(move);
        moves.push(move);
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAA", moves);
      }
    }
    console.log("moves.length = " + moves.length);
    console.log("moves for X = " + moves);
    console.log(moves);
    console.log("moves[0] = " + moves[0]);
    console.log(moves[0]);
    console.log("moves[1] = " + moves[1]);
    console.log(moves[1]);
    for(var i = 0 ; i < moves.length ; i++ ){
        console.log("CCCCCCCCCCCCCCCCCCCCCCCCC", i);
      scores.push( minimax ( moves[i], depth ) );
    }
    // scores.push( minimax ( moves[0], depth ) );
    // scores.push( minimax ( moves[1], depth ) );
    console.log("scores.length = " + scores.length);
    // get the max score index in scores
    var max_score_index = 0;
    var max_score = scores[0];
    for(var i = 1 ; i < scores.length ; i++ ) {
      if( scores[i] > max_score ) {
        max_score_index = i;
        max_score = scores[i];
      }
    }
    // Select the move with the max score index - moves[max_score_index]
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
    console.log("depth = " + depth);
    console.log("possible moves for player \"X\"");
    console.log("moves for X = " + moves);
    console.log(moves);
    console.log("scores for X = " + scores);
    console.log(scores);
    console.log("max_score for X = " + max_score);
    console.log(max_score);
    console.log("max_score_index for X = " + max_score_index);
    console.log(max_score_index);
    return max_score;

  } else {    // it's O's turn, get the min score
    // Create all possible moves (states)
    for( var i = 0 ; i < state.length ; i++ ) {
      if( state[i] === "_" ){
        var move = state.slice();
        // var move = state;
        move[i] = "O";
        console.log("move = " + move);
        console.log(move);
        moves.push(move);
        console.log("BBBBBBBBBBBBBBBBBBBBBBBBB", moves);
      }
    }
    for(var i = 0 ; i < moves.length ; i++ ){
      scores.push( minimax ( moves[i], depth ) );
    }
    // get the min score index in scores
    var min_score_index = 0;
    var min_score = scores[0];
    for(var i = 1 ; i < scores.length ; i++ ) {
      if( scores[i] > min_score ) {
        min_score_index = i;
        min_score = scores[i];
      }
    }
    // Select the move with the min score index - moves[max_score_index]
    console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
    console.log("depth = " + depth);
    console.log("possible moves for player \"O\"");
    console.log("moves for O = " + moves);
    console.log(moves);
    console.log("scores for O = " + scores);
    console.log(scores);
    console.log("min_score for O = " + min_score);
    console.log(min_score);
    console.log("min_score_index for O = " + min_score_index);
    console.log(min_score_index);
    return min_score;


  }




} // end of minimax( state, depth )


console.log("minimax call " + minimax( state, 0 ));

