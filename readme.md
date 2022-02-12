# The Weakest Link Game


## Rules  of Game
You have been asked to develop a one player Web application that mimics the famous  game tv show called “The Weakest Link.”


The game features a single player who is required to answer general knowledge questions.  Your questions must be pulled from an API, specifically,  FREE QUESTION API : https://opentdb.com/api_config.php.  This API is used to retrieve trivia questions and choices.

The game  alllows the player to bank and earn money within a 90second period.

During the 90 second period, the main objective  of the game is to create a chain of consecutive correct answers to earn an increasing amount of money from a “Money Tree” for a “bank pot” within a the said time limit. 

An incorrect answer breaks the chain and will cause the player to lose all the money accumulated up to that point; however, the player can say "bank" (press a bank button), prior to their question being asked. This will cause the accumulated money to be stored and will reset the “Money Tree” to zero. 
For every question asked, the game must provide four possible answer choices to allow the player to choose the correct answer.

If players answers the $500,000.00 question correct, they automatically win the game, regardless of the timer!


The money tree is layered as follows:
 
$500,000
$250,000
$125,000
$75,000
$50,000
$10,000
$5000
$1000
$0



Lastly, when the time runs out, the player will go home with the money that they bank. If the no money is bank, the player will loose the game and be called THE WEAKEST LINK.


