// code your solution here
function saturdayFun (msg = "roller-skate") {
    return `This Saturday, I want to ${msg}!`

}

function mondayWork (act = 'go to the office') {
    return `This Monday, I will ${act}.`
}


const wrapAdjective = function (asterisk = "*", msg1 = "You are" ) {
    return function (adjective) {
        return `${msg1} ${asterisk}${adjective}${asterisk}!`
    }

}