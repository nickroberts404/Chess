console.log('Hello!');
angular.module('ChessApp', [])
	.controller('mainController', function($scope){
		$scope.chessboard = createChessboard();
		function createChessboard(){
			var chessboard = [];
				for(var row=0; row<8; row++){
					var chessrow = [];
					var prop_player;
						if(row == 0 || row == 1) prop_player = 2;
						else if(row == 6 || row == 7) prop_player = 1;
						else prop_player = 0;
					for(var column=0; column<8; column++){
						var prop_type='';
						if(prop_player != 0){
							if(row == 1 || row == 6)prop_type = 'pawn';
							else{
								if(column == 0 || column == 7) prop_type = 'rook';
								else if(column == 1 || column == 6) prop_type = 'knight';
								else if(column == 2 || column == 5) prop_type = 'bishop';
								else if(column == 3) prop_type = 'queen';
								else prop_type = 'king';
							}
						}
						chessrow.push({type: prop_type, player: prop_player, state: 'normal'});
					}
					chessboard.push(chessrow);
				}
				return chessboard;
		}
	});