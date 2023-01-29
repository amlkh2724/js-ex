const display2= document.querySelector(".display")


let player1 = 0;
let player2 = 0;
const max = 11;

document.addEventListener('keyup', function (event) {
    const keyName = event.key;

    if (keyName === 'ArrowRight') {
        player1 = updatePosition(player1, 'player1-race');
    } else if (keyName === 'ArrowLeft') {
        player2 = updatePosition(player2, 'player2-race');
    }

    if (player1 === max) {
        announceWinner('player1');
    } else if (player2 === max) {
        announceWinner('player2');
    }
});

function updatePosition(player, playerRaceId) {
    if (player >= max) {
        return player;
    }
    const currentActive = document.querySelector(`#${playerRaceId} .active`);
    currentActive.classList.remove('active');
    const nextActive = currentActive.nextElementSibling;
    nextActive.classList.add('active');
    return player + 1;
}

function announceWinner(player) {
    display2.style.display= "block"

    const message = `Player ${player} wins!`;
    alert(message);
}

function restartGame() {
    player1 = 0;
    player2 = 0;
    const player1Active = document.querySelector('#player1-race .active');
    player1Active.classList.remove('active');
    player1Active.previousElementSibling.classList.add('active');
    const player2Active = document.querySelector('#player2-race .active');
    player2Active.classList.remove('active');
    player2Active.previousElementSibling.classList.add('active');
}
