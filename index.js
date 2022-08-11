// code your solution here
function superbowlWin(record){ 

    // function checkWin(element) {
    //     return element.result == 'W'
    // }

    let winner = record.find(element => element.result == 'W')

    if (winner == undefined) {
        return undefined
    }
    else {
        return winner.year
    }
}

