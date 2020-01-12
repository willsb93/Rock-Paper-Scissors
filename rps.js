	let playerScore = 0;
	let computerScore = 0;
	let userScoreSpan = document.getElementById("user-score");
	let cpuScoreSpan = document.getElementById("cpu-score");
	let gameScoreDiv = document.querySelector(".gameScore");
	let resultDiv = document.querySelector(".result");
	let rock = document.getElementById("R");
	let scissors = document.getElementById("S");
	let paper = document.getElementById("P");
	let selection = ["Rock", "Paper", "Scissors"];
	let computerChoice;
	let userPick;
	let round = 1;
	
		
		function playRound (playerSelection, ComputerSelection) {
			if (userPick === computerChoice) 
			{
				resultDiv.innerHTML = userPick + " ties with " + computerChoice + " . It's a tie!"; return;
			}
			
			if (userPick === "Rock" && computerChoice === "Scissors") {
				resultDiv.innerHTML = userPick + " beats " + computerChoice + " . You Win!"; playerScore++; return; 
			}
			if (userPick === "Rock" && computerChoice ==="Paper") {
				resultDiv.innerHTML = userPick + " loses to " + computerChoice + " . You Lose!"; computerScore++; return;
			}

			if (userPick === "Scissors" && computerChoice === "Paper") {
				resultDiv.innerHTML = userPick + " beats " + computerChoice + " . You Win!"; playerScore++; return;
			}
			
			if (userPick ==="Scissors" && computerChoice ==="Rock") {
				resultDiv.innerHTML = userPick + " loses to " + computerChoice + " . You Lose!"; computerScore++; return;
			}

			if (userPick ==="Paper" && computerChoice === "Rock") {
				resultDiv.innerHTML = userPick + " beats " + computerChoice + " . You Win!"; playerScore++; return;
			}
			else {
				resultDiv.innerHTML = userPick + " loses to " + computerChoice + " . You Lose!" ; computerScore++; return;
			}
		}
		 
		function game() {
			
			while (round <=6 || playerScore === computerScore) {
				if (round >= 7 && playerScore === computerScore){
					resultDiv.innerHTML = "It's tied! Playing one more round!"; }
				

				playRound(userPick,computerChoice);
				round++;
				return;
				
			};	
			
			if(playerScore > computerScore) {
               resultDiv.innerHTML = "You win " + playerScore + ":" + computerScore + "!"
            } else {
               resultDiv.innerHTML = "You lose " + playerScore + ":" + computerScore + "!"
            };
        };

		function userP () {
			rock.addEventListener("click", function(){
				userPick = "Rock";
				computerChoice = selection[Math.floor(Math.random()* selection.length)];
				game();
				userScoreSpan.innerHTML = playerScore;
				cpuScoreSpan.innerHTML = computerScore;

			})
			
			scissors.addEventListener("click", function(){
				userPick = "Scissors";
				computerChoice = selection[Math.floor(Math.random()* selection.length)];
				game();
				userScoreSpan.innerHTML = playerScore;
				cpuScoreSpan.innerHTML = computerScore;})
			
			paper.addEventListener("click", function(){
				userPick = "Paper";
				computerChoice = selection[Math.floor(Math.random()* selection.length)];
				game();
				userScoreSpan.innerHTML = playerScore;;
				cpuScoreSpan.innerHTML = computerScore;})

			
		}
		
		userP();
		// game();
		// playRound(userPick,computerChoice);