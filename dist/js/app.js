
var Chessboard = function(){
	this.board = this.createChessboard();
}
Chessboard.prototype = {
	createChessboard: function(){
		var chessboard = [];
			for(var rank=0; rank<8; rank++){
				var chessrow = [];
				var player;
					if(rank == 0 || rank == 1) player = 2;
					else if(rank == 6 || rank == 7) player = 1;
					else player = 0;
				for(var file=0; file<8; file++){
					if(player != 0){
						if(rank == 1 || rank == 6) chessrow.push(new Pawn(rank, file, player));
						else{
							if(file == 0 || file == 7) chessrow.push(new Rook(rank, file, player));
							else if(file == 1 || file == 6) chessrow.push(new Knight(rank, file, player));
							else if(file == 2 || file == 5) chessrow.push(new Bishop(rank, file, player));
							else if(file == 3) chessrow.push(new Queen(rank, file, player));
							else chessrow.push(new King(rank, file, player));
						}
					}
					else{
						chessrow.push({player: player, state: 'normal'});
					}
				}
				chessboard.push(chessrow);
			}
			return chessboard;
	}, 
	getMovement: function(piece){
		console.log(piece);
		var movement = piece.getMovement(this.board);
		return movement;
	},
	movePiece: function(piece, coordinates){
		
	},
	removePiece: function(piece){
		this.board[piece.rank][piece.file] = {player: 0, state: 'normal'}
	}
}
console.log('Hello!');
angular.module('ChessApp', [])
	.controller('mainController', function($scope){
		var gameBoard = new Chessboard;
		$scope.chessboard = gameBoard.board;
		$scope.read = function(thang){
			console.log(thang);
		}
		$scope.getSpots = function(piece){
			var movements = gameBoard.getMovement(piece);
			for(var i=0; i< movements.moves.length; i++){
				var coord = movements.moves[i];
				console.log(coord);
				$scope.chessboard[coord[0]][coord[1]].state = 'potential-move';
			}
			piece.state = 'selected';
			console.log(movements);
		}
		$scope.killIt = function(piece){
			gameBoard.removePiece(piece);
		}
	});