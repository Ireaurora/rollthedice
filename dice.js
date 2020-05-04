function rollingDice(){
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    if((die1 && die2) !=null){
        numbers(d1,die1);
        numbers(d2,die2);
    }
    var diceTotal = d1 + d2;
    status.innerHTML = "You rolled "+diceTotal+".";
    if(d1 == d2){
        status.innerHTML += " DOUBLES! You get a free turn!!";
    }
}
function numbers(number,die){
    die.innerHTML= "";
    console.log(die.classList.length);
    if (die.classList.contains("first-face")) {
        console.log("here 1");
        die.classList.remove("first-face");
    }
    if (die.classList.contains("second-face")) {
        console.log("here 2");
        die.classList.remove("second-face");
    }
    if (die.classList.contains("third-face")) {
        console.log("here 3");
        die.classList.remove("third-face");
    }
    if (die.classList.contains("fourth-face")) {
        console.log("here 4");
        die.classList.remove("fourth-face");
    }
    if (die.classList.contains("fifth-face")) {
        console.log("here 5");
        die.classList.remove("fifth-face");
    }
    if (die.classList.contains("sixth-face")) {
        console.log("here 6");
        die.classList.remove("sixth-face");
    }
    console.log(die.classList.length);
    console.log(die.classList.length);
    console.log(die.classList);
    switch(number) {
        case 1:
            die.classList.add("first-face")
            die.innerHTML= '<span class="circle"></span>';
            break;
        case 2:
            die.classList.add("second-face")
            die.innerHTML = '<span class="circle"></span><span class="circle"></span></div>';
            break;
        case 3:
            die.classList.add("third-face")
            die1.innerHTML = '<span class="circle"></span><span class="circle"></span><span class="circle"></span>';
            break;
        case 4:
            die.classList.add("fourth-face")
            die.innerHTML = '<div class="column"><span class="circle"></span><span class="circle"></span></div><div class="column"><span class="circle"></span><span class="circle"></span></div></div>';
            break;
        case 5:
            die.classList.add("fifth-face")
            die.innerHTML = '<div class="column"><span class="circle"></span><span class="circle"></span></div><div class="column"><span class="circle"></span></div><div class="column"><span class="circle"></span><span class="circle"></span></div>';
            break;
        case 6:
            die.classList.add("sixth-face")
            die.innerHTML = '<div class="column"><span class="circle"></span><span class="circle"></span><span class="circle"></span></div>'+
            '<div class="column"><span class="circle"></span><span class="circle"></span><span class="circle"></span></div>';
            break;
        }
}

