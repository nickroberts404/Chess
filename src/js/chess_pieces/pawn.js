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