


const main = (()=>{



    const END_POINT =`https://opentdb.com/api.php?amount=1&type=multiple`
    

    const level1MoneyTree = [0,1000,5000,10000,50000,75000,125000,250000,500000];
    let currentMoneyTreeLevelIndex = 0;




    //fetching elements from the DOM
    const questionTitle = document.querySelector(".question-title");
    const questionOpitionsChoices = document.querySelectorAll(".question-option");
    const moneyTreeContainer = document.querySelector(".money-tree-container");


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





    //output to the screen
    const showQuestionToScreen = (json)=>
    {


        questionTitle.innerHTML =  json.results[0].question;

        questionOpitionsChoices[0].innerHTML = json.results[0].correct_answer;
        questionOpitionsChoices[1].innerHTML = json.results[0].incorrect_answers[0]
        questionOpitionsChoices[2].innerHTML = json.results[0].incorrect_answers[1]
        questionOpitionsChoices[3].innerHTML = json.results[0].incorrect_answers[2]

    
    }




    const generateMoneyTree = ()=>
    {


        let treeValue = "";
        for(let i=(level1MoneyTree.length-1); i>=0;i--)
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

        moneyTreeContainer.innerHTML=treeValue;

   

    }


   const init = async ()=>
   {


        try
        {
            const json =  await getQuestionsFromAPI();

            showQuestionToScreen(json);
            generateMoneyTree();

        }

        catch(err)
        {
            console.log(err);
        }



    }

    init();

    





})();