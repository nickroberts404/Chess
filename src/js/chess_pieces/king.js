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