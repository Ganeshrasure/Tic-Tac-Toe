let boxes = document.querySelectorAll(".box");

let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerx and playerO

const winPAtterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //player o
      box.innerText = "O";
      turnO = false;
    } else {
      //player x
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});


const checkWinner = () => {
  for (let patterns of winPAtterns) {
    //  patterns mdhe aslele index vni jr al tr print kraych ahe 
    let pos1Val=  boxes[patterns[0]].innerText;
    let pos2Val=  boxes[patterns[1]].innerText;
    let pos3Val=  boxes[patterns[2]].innerText;
   
    // jr 3 ni pn chech nsle tr ch check karacych winnig pattern //below code
    if(pos1Val!= "" && pos2Val != "" && pos3Val != ""){
        if (pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("Winner",pos1Val);
            showWinner(pos1Val);
        }
    }
  }
};

// ekda win jhal ki apan punha vapru sakt nhi te box 
const disableBoxes = () => {
  for(box of boxes){
    box.disabled = true;
  }
}

const enableBoxes = () => {
  for(box of boxes){
    box.disabled = false;
    box.innerText= "";
  }
}
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is, ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
}

let resetGame = () =>{
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide")

}

newGameBtn.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)