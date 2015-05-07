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