const inquirer = require("inquirer")

inquirer
  .prompt([
    {
      type: "input",
      name: "Number",
      message: "Please input a integer number",
      validate(value) {
        const pass = value.match(/^[1-9]\d*$/)
        if (pass) {
          return true
        }

        return "Please enter a valid integer number"
      },
    },
  ])
  .then(function (answer) {
    let finalNumber = numberProcessor(answer.Number)
    console.log(finalNumber)
  })

let numberProcessor = (value) => {
  let number = parseInt(value)
  if (number > 9) {
    let numberArray = number.toString().split("")
    let sum = 0
    for (let i = 0; i < numberArray.length; i++) {
      sum += parseInt(numberArray[i])
    }
    return numberProcessor(sum)
  } else {
    return number
  }
}
