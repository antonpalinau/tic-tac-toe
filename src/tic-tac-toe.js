class TicTacToe {
    constructor() {
      this.field = [[null, null, null],
                    [null, null, null],
                    [null, null, null]];
      this.numberOfCells = 9;
      this.currentSymbol = 'x';
      this.gameFinished = false;
      this.numberOfTurns = 0;
      this.winner = null;
    }

    getCurrentPlayerSymbol() {
      return this.currentSymbol;
      //return prompt('Choose your symbol: x or o ','');
    }

    nextTurn(rowIndex, columnIndex) {
      if (this.field[rowIndex][columnIndex] === null){
        this.field[rowIndex][columnIndex] = this.currentSymbol;
        for (var i = 0; i < this.field.length; i++){
          if((this.field[0][i] === this.currentSymbol) && (this.field[1][i] === this.currentSymbol) && (this.field[2][i] === this.currentSymbol)){
            this.gameFinished = true;
            this.winner = this.currentSymbol;
          }else
          if((this.field[i][0] === this.currentSymbol) && (this.field[i][1] === this.currentSymbol) && (this.field[i][2] === this.currentSymbol)){
            this.gameFinished = true;
            this.winner = this.currentSymbol;
          }else if((this.field[0][0] === this.currentSymbol) && (this.field[1][1] === this.currentSymbol) && (this.field[2][2] === this.currentSymbol)){
            this.gameFinished = true;
            this.winner = this.currentSymbol;
          }else if((this.field[2][0] === this.currentSymbol) && (this.field[1][1] === this.currentSymbol) && (this.field[0][2] === this.currentSymbol)){
            this.gameFinished = true;
            this.winner = this.currentSymbol;
          }
        }
      } else {
        return;
      }

      this.numberOfTurns++;
      console.log(this.numberOfTurns);
      if (this.numberOfTurns % 2 === 0){
        this.currentSymbol = 'x';
      }else{
        this.currentSymbol = 'o';
      }

      if(this.numberOfCells - this.numberOfTurns === 0){
        this.gameFinished = true;
      }
    }

    isFinished() {
      return this.gameFinished;
    }

    getWinner() {
      return this.winner;
    }

    noMoreTurns() {
      if (this.numberOfCells - this.numberOfTurns === 0) {
        return true;
      } else {
        return false;
      }
    }

    isDraw() {
      if(this.gameFinished && !this.winner) {
        return true;
      } else {
        return false;
      }
    }

    getFieldValue(rowIndex, colIndex) {
      return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
