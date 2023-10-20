// let bonuspoints = 50;
// console.log(bonuspoints)

// bonuspoints = bonuspoints + 50
// console.log(bonuspoints)

// bonuspoints = bonuspoints - 75
// console.log(bonuspoints)

// bonuspoints = bonuspoints + 45
// console.log(bonuspoints)

let countEL = document.getElementById("count-el")  //pass in arguments
let saveEL = document.getElementById("save-el")
let count = 0

console.log(saveEL)

function increment(){
    
    //count = count + 1
    count += 1
    //countEL.innerText = count
    countEL.textContent = count

}
//creating save fucntion and save feature of entries entered
function save(){
    let countStr = count + " - "
    ////saveEL.innerText = countStr  //rendering the variable in saveEL using innerText
    saveEL.textContent += countStr  // used textcontent instead of innertext i.e. mdn
    countEL.textContent = 0  // but this will not fix increemnt but shows 0 after zero
    count = 0
}

//lastly setting back it zero when adding new group count