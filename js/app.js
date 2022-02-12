


const main = (()=>{

       //declaration of DOM elements
       const timerNode = document.querySelector(".time-container");
       const moneyTreeNode = document.querySelector(".money-tree-container");
       const choicesNodes = document.querySelectorAll(".question-option");
       const questionTitleNode = document.querySelector(".question-title");
       const bankButtonNode = document.querySelector(".btn-bank");
       const bankPotNode = document.querySelector(".bank-pot-container");
       const gameScreenNode =document.querySelector("#game-screen");
       const endGameScreenNode = document.querySelector("#game-over-screen");


        //declaration of reg variables
       let timer=100000;
       const level1MoneyTree = [0,1000,5000,10000,50000,75000,125000,250000,500000];
       let currentMoneyTreeLevelIndex = 0;
   

       /*
            DOM ELEMENTS TO REFERENCE :

            1. Element that holds the timer value
            2. Container Elements that holds the question and option values
            3. Contaner that holds the money tree
            4. Container that holds the bank pot value
            5. Bank Button
       */
    


       //functions  (Making our functionality more modular)


        const startTimer = ()=>{

            const timeRef= setInterval(()=>{

                timer--;
                timerNode.innerHTML = timer;

                if(timer === 0)
                {
                    clearInterval(timeRef)

                    endGame();
                }
               
            },1000);

        }

  

        const generateMoneyTree = ()=>
        {
    
    
            let treeValue = "";
           /* for(let i=(level1MoneyTree.length-1); i>=0;i--)
            {
    
    
                if(currentMoneyTreeLevelIndex==i)
                {
                    treeValue+=`<div class="btn btn-money-tree-value btn-active">${level1MoneyTree[i]}</div>`
                }
                else
                {
                    treeValue+=`<div class="btn btn-money-tree-value">${level1MoneyTree[i]}</div>`
                }
              
              
            
            }*/

            for(let i=(level1MoneyTree.length-1); i>=0; i--)
            {

                if(currentMoneyTreeLevelIndex==i)
                {
                    treeValue+=`<div class="btn btn-money-tree-value btn-active">${level1MoneyTree[i]}</div>`
                }
                else
                {
                    treeValue+=`<div class="btn btn-money-tree-value">${level1MoneyTree[i]}</div>`
                }
               
            }
    
            moneyTreeNode.innerHTML=treeValue;
    
    
        }


        const displayQuestionsAndAnswer = ()=>{

        }

        const endGame = ()=>{
         

            gameScreenNode.classList.add("hide");

            endGameScreenNode.classList.remove("hide");
        }


       //event listeners
       bankButtonNode.addEventListener("click",()=>{
           alert("You pressed the bank button")
       });

       choicesNodes[0].addEventListener("click",()=>{

        alert("You pressed choice one button")
       })

       choicesNodes[1].addEventListener("click",()=>{

        alert("You pressed choice 2 button")
       })


       choicesNodes[2].addEventListener("click",()=>{

        alert("You pressed choice 3 button")
       })


       choicesNodes[3].addEventListener("click",()=>{

        alert("You pressed choice 4 button")
       })




       //init (What you whant to happen AS SOON as the screen loads)
       const init = ()=>{

            startTimer();
            generateMoneyTree();
            displayQuestionsAndAnswer();
       }

       init();


  

})();