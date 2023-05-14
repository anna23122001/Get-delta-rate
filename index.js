'use strict'
/**
 * 
 * @param {number} winnerRating 
 * @param {number} opponentRating 
 * @returns {number}
 */

function getWinnerRating(winnerRating, opponentRating){

    if(winnerRating < 0 ||  opponentRating < 0){
        return "Error";
    }
    const ratingDifference = opponentRating - winnerRating;

    if (ratingDifference >= 0 && ratingDifference <= 2) {
      return winnerRating + 2;
    } if (ratingDifference > 2 && ratingDifference < 20) {
      return winnerRating + 1;
    } if (ratingDifference >= 20) {
      return winnerRating;
    } 
        const contribution = (opponentRating - winnerRating + 5) / 3;
    return winnerRating + contribution;
}
    const winnerRating = 100;
    const opponentRating = 50;
  
    const result = getWinnerRating(winnerRating, opponentRating);
    console.log(`Rating of the winner: ${result}`);