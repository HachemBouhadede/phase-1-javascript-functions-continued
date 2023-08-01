// code your solution here
function saturdayFun (activity = "roller-skate"){
    return (`This Saturday, I want to ${activity}!`)
};
console.log(saturdayFun());
console.log(saturdayFun("workout"));

const mondayWork = function (activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}
console.log(mondayWork())
console.log(mondayWork("play league"))

function wrapAdjective(flair = "*") {
    return function (adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
console.log(wrapAdjective()("a dedicated programmer"))