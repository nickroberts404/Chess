var Bishop = function(rank, file, player){
	this.file 		= file;
	this.rank 		= rank;
	this.player 	= player;
	this.name 		= 'bishop';
	this.state 		= 'untouched';
}
Bishop.prototype = {
	getMovement: function(chessBoard){
		var file = this.file;
		var rank = this.rank;
		var enemy;
			if(this.player == 1) enemy = 2;
			else enemy = 1;
		var moves = [];
		var captures = [];
		var directions = [[1, 1], [-1, 1], [-1, 1], [-1, -1]];
		for(direction in directions){
			var d = directions[direction];
			console.log(d);
			var newRank = rank+d[0];
			var newFile = file+d[1];
			while(newRank < 8 && newFile < 8 && newRank >= 0 && newFile >= 0){
				console.log(newRank+' '+newFile);
				if(chessBoard[newRank][newFile].player == this.player) break;
				else if(chessBoard[newRank][newFile].player == enemy){
					captures.push([newRank, newFile]);
					break;
				}
				else{
					moves.push([newRank, newFile]);
				}
				newRank = newRank+d[0];
				newFile = newFile+d[1];
			}
		}
		return {moves: moves, captures: captures};
	}
}
var King = function(rank, file, player){
	this.file 		= file;
	this.rank 		= rank;
	this.player 	= player;
	this.name 		= 'king';
	this.state 		= 'untouched';
}
King.prototype = {
	getMovement: function(chessBoard){
		var file = this.file;
		var rank = this.rank;
		var enemy;
			if(this.player == 1) enemy = 2;
			else enemy = 1;
		var moves = [];
		var captures = [];
		var directions = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, 1], [-1, 1], [-1, -1]];
		for(direction in directions){
			var d = directions[direction];
			console.log(d);
			var newRank = rank+d[0];
			var newFile = file+d[1];
			if(newRank < 8 && newFile < 8 && newRank >= 0 && newFile >= 0){
				console.log(newRank+' '+newFile);
				if(chessBoard[newRank][newFile].player != this.player){
					if(chessBoard[newRank][newFile].player == enemy){
						captures.push([newRank, newFile]);
					}
					else{
						moves.push([newRank, newFile]);
					}
				}
			}
		}
		return {moves: moves, captures: captures};
	}
}
var Knight = function(rank, file, player){
	this.file 		= file;
	this.rank 		= rank;
	this.player 	= player;
	this.name 		= 'knight';
	this.state 		= 'untouched';
}
Knight.prototype = {
	getMovement: function(chessBoard){
		var file = this.file;
		var rank = this.rank;
		var enemy;
			if(this.player == 1) enemy = 2;
			else enemy = 1;
		var moves = [];
		var captures = [];
		var directions = [[1, 2], [-1, 2], [1, -2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]];
		for(direction in directions){
			var d = directions[direction];
			console.log(d);
			var newRank = rank+d[0];
			var newFile = file+d[1];
			if(newRank < 8 && newFile < 8 && newRank >= 0 && newFile >= 0){
				console.log(newRank+' '+newFile);
				if(chessBoard[newRank][newFile].player != this.player){
					if(chessBoard[newRank][newFile].player == enemy){
						captures.push([newRank, newFile]);
					}
					else{
						moves.push([newRank, newFile]);
					}
				}
			}
		}
		return {moves: moves, captures: captures};
	}
}
var Pawn = function(rank, file, player){
	this.rank 		= rank;
	this.file 		= file;
	this.player 	= player;
	this.name 		= 'pawn';
	this.state 		= 'untouched';
}
Pawn.prototype = {
	getMovement: function(chessBoard){
		var file = this.file;
		var rank = this.rank;
		var moves = [];
		var captures = [];
		if(this.player==1){
			// If you can move the piece forward
			if(rank-1>=0){
				// Is there anyone infront of this piece?
				if(chessBoard[rank-1][file].player == 0){
					moves.push([rank-1, file]);
					// Is it untouched and nobody is infront of it?
					if(this.state=='untouched' && rank-2 >= 0 && chessBoard[rank-2][file].player == 0){
						moves.push([rank-2, file]);
					}
				}
				if(file+1 < 8 && chessBoard[rank-1][file+1].player == 2) captures.push([rank-1, file+1]);
				if(file-1 >= 0 && chessBoard[rank-1][file-1].player == 2) captures.push([rank-1, file-1]);
			}
		}
		if(this.player==2){
			// If you can move the piece forward
			if(rank+1<8){
				// Is there anyone infront of this piece?
				if(chessBoard[rank+1][file].player == 0){
					moves.push([rank+1, file]);
					// Is it untouched and nobody is infront of it?
					if(this.state=='untouched' && rank+2<8 && chessBoard[rank+2][file].player == 0){
						moves.push([rank+2, file]);
					}
				}
				if(file+1 < 8 && chessBoard[rank+1][file+1].player == 1) captures.push([rank+1, file+1]);
				if(file-1 >= 0 && chessBoard[rank+1][file-1].player == 1) captures.push([rank+1, file-1]);
			}
		}
		return {moves: moves, captures: captures};
	}
}
var Queen = function(rank, file, player){
	this.file 		= file;
	this.rank 		= rank;
	this.player 	= player;
	this.name 		= 'queen';
	this.state 		= 'untouched';
}
Queen.prototype = {
	getMovement: function(chessBoard){
		var file = this.file;
		var rank = this.rank;
		var enemy;
			if(this.player == 1) enemy = 2;
			else enemy = 1;
		var moves = [];
		var captures = [];
		var directions = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, 1], [-1, 1], [-1, -1]];
		for(direction in directions){
			var d = directions[direction];
			console.log(d);
			var newRank = rank+d[0];
			var newFile = file+d[1];
			while(newRank < 8 && newFile < 8 && newRank >= 0 && newFile >= 0){
				console.log(newRank+' '+newFile);
				if(chessBoard[newRank][newFile].player == this.player) break;
				else if(chessBoard[newRank][newFile].player == enemy){
					captures.push([newRank, newFile]);
					break;
				}
				else{
					moves.push([newRank, newFile]);
				}
				newRank = newRank+d[0];
				newFile = newFile+d[1];
			}
		}
		return {moves: moves, captures: captures};
	}
}
var Rook = function(rank, file, player){
	this.file 		= file;
	this.rank 		= rank;
	this.player 	= player;
	this.name 		= 'rook';
	this.state 		= 'untouched';
}
Rook.prototype = {
	getMovement: function(chessBoard){
		var file = this.file;
		var rank = this.rank;
		var enemy;
			if(this.player == 1) enemy = 2;
			else enemy = 1;
		var moves = [];
		var captures = [];
		var directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
		for(direction in directions){
			var d = directions[direction];
			console.log(d);
			var newRank = rank+d[0];
			var newFile = file+d[1];
			while(newRank < 8 && newFile < 8 && newRank >= 0 && newFile >= 0){
				console.log(newRank+' '+newFile);
				if(chessBoard[newRank][newFile].player == this.player) break;
				else if(chessBoard[newRank][newFile].player == enemy){
					captures.push([newRank, newFile]);
					break;
				}
				else{
					moves.push([newRank, newFile]);
				}
				newRank = newRank+d[0];
				newFile = newFile+d[1];
			}
		}
		return {moves: moves, captures: captures};
	}
}