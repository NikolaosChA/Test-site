$(document).ready(function(){

    // R-P-S GAME
    $("#r-p-s").on("click", function(e){
        e.preventDefault();
        $(".g-text").addClass("hidden");
        $(".TICTACTOE").addClass("hidden");
        $(".ROCK").removeClass("hidden");
    })

    const choices = ['rock', 'paper', 'scissors']

    let choice, computer_choice;
    let player_score = 0
    let computer_score = 0
    const info = document.querySelector('#info-r-p-s')

    function play(choice){
        computer_choice = Math.floor( Math.random() * 3)
        // info.innerText = `PC: ${choices[computer_choice]}`
        if(choice === computer_choice) {
            info.innerText = `You Draw.`
            return;
        }    
        if(choice - computer_choice == -1 || choice - computer_choice == 2){
            player_score ++
            document.querySelector('#player_score').innerText = player_score
            info.innerText = `You win!`
        } else {
            computer_score ++
            document.querySelector('#computer_score').innerText = computer_score
            info.innerText = `You lose..`
        } 
    }

    document.querySelector('#rock').addEventListener('click',()=>{
        choice = 0
        play(choice)
    })
    document.querySelector('#scissors').addEventListener('click',()=>{
        choice = 2
        play(choice)
    })
    document.querySelector('#paper').addEventListener('click',()=>{
        choice = 1
        play(choice)
    })
    $("#reset-r-p-s").on("click", function(e){
        e.preventDefault();
        player_score = 0;
        computer_score = 0;
        $(".clearMyScore").html('You : <span id="player_score">0</span>  Computer : <span id ="computer_score">0</span>');
        $("#info-r-p-s").text("");
    })
})