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