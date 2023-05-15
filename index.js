'use strict'
/**
 * 
 * @param {number} winnerRating 
 * @param {number} opponentRating 
 * @returns {number}
 * @throws {Error}
 */

function getWinnerRating(winnerRating, opponentRating){
  if(isNaN(winnerRating) || isNaN(opponentRating)){
    return "it is not a number!";
  };
    if(winnerRating < 0 ||  opponentRating < 0){
        return "Error";
    }
    if (winnerRating === 0) {
      return winnerRating + opponentRating;
    }

// победа над слабым игроком
    const ratingDifference = winnerRating - opponentRating ;

    if (ratingDifference >= 0 && ratingDifference <= 2) {
      return winnerRating + 2;

    } if (ratingDifference > 2 && ratingDifference < 20) {
      return winnerRating + 1;

    } if (ratingDifference >= 20) {
      return winnerRating;
    } 

  // победа над сильным игроком
        const contribution = (opponentRating - winnerRating + 5) / 3;
    return winnerRating + contribution;
}
    const winnerRating = "hsdbvhkb";
    const opponentRating = 18;
  
    const result = getWinnerRating(winnerRating, opponentRating);
    console.log(`Rating of the winner: ${result}`);