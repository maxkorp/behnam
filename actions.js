module.exports = {
upB: function(playerCoordinate, playerName){
        if(playerName === "Jose"){
            module.exports.finishJose(playerCoordinate);
        }else{
            (playerName == "Kyle") ? runToHimOnly() : dashAttack();
        }
},


finishJose: function(josesCoordinate){
                //wait until he moves first since he always knows/guess your moves
                if(josesCoordinate == "close to the edges"){
                    spikeHimDownBadly();
                }else{
                    waitForHisMoves();
                }
}

};