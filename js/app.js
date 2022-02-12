



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
       const questionAnswerHolderNode = document.querySelector(".question-option-holder");
     

        //declaration of reg variables
       const END_POINT =`https://opentdb.com/api.php?amount=1&type=multiple`
       let timer=1000;
       const level1MoneyTree = [0,1000,5000,10000,50000,75000,125000,250000,500000];
       let currentMoneyTreeLevelIndex = 0;
       let json;
       let bankPot = 0;
   

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


    //Function that returns a quest from the API ( This is an async function) 
        const getQuestionsFromAPI = ()=>{


            return new Promise (async(resolve,reject)=>{


                try
                {
                    const response = await fetch(END_POINT)

                    const json = await response.json()     
                        
                    resolve(json)

                }
                catch(err)
                {
                    reject(err)
                }

            
        })


         }

        const displayQuestionsAndChoicesToScreen= (json)=>
        {


            questionTitleNode.innerHTML =  json.results[0].question;

            choicesNodes[0].innerHTML = json.results[0].correct_answer;
            choicesNodes[1].innerHTML = json.results[0].incorrect_answers[0]
            choicesNodes[2].innerHTML = json.results[0].incorrect_answers[1]
            choicesNodes[3].innerHTML = json.results[0].incorrect_answers[2]

        }

        const generateMoneyTree = ()=>
        {
    
    
            let treeValue = "";
        

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

        const determinIfPlayerChoiceIsCorrect = (correctAnswer, playerChoice)=>{

            if(correctAnswer === playerChoice)
            {
                return true;
            }

            else
            {
                return false;
            }

        }

        const increaseLevel = async()=>{

            currentMoneyTreeLevelIndex++;  
            generateMoneyTree();
            json =  await getQuestionsFromAPI(); //local variable
            displayQuestionsAndChoicesToScreen(json);
            
            

        }

        const decreaseLevel = async()=>{

            currentMoneyTreeLevelIndex=0;  
            generateMoneyTree();
            json =  await getQuestionsFromAPI(); //local variable
            displayQuestionsAndChoicesToScreen(json);

        }

        const updateBankPot  = ()=>{

                bankPot=bankPot+level1MoneyTree[currentMoneyTreeLevelIndex];
                bankPotNode.innerHTML = `<h1>${bankPot}</h1>`
                currentMoneyTreeLevelIndex = 0;
                generateMoneyTree();
        }

        const endGame = ()=>{
         

            gameScreenNode.classList.add("hide");

            endGameScreenNode.classList.remove("hide");
        }

    


       //event listeners
       bankButtonNode.addEventListener("click",()=>{
          
        updateBankPot();


       });

 


       //What is Event Bubbling ?????

       questionAnswerHolderNode.addEventListener("click",(event)=>{

            const correctAnser = json.results[0].correct_answer;
            const playerChoice = event.target.innerText.trim();

           const result= determinIfPlayerChoiceIsCorrect(correctAnser,playerChoice)

           if(result === true)
           {
                increaseLevel()
           }
           else // THE player selected the wrong answer
           {
                 decreaseLevel()
           }
              
       })
       
    


       //init (What you whant to happen AS SOON as the screen loads)
       const init = async()=>{

            try
            {
                startTimer();
                generateMoneyTree();
                json =  await getQuestionsFromAPI(); //local variable
                displayQuestionsAndChoicesToScreen(json);
            }
            catch(err)
            {
                console.log(err);
            }
        
       }

       init();


  

})();