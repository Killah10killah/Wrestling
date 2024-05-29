// script.js

let experience = 0;
let popularity = 0;
let connections = 0;

function updateStats() {
    document.getElementById('experience').innerText = experience;
    document.getElementById('popularity').innerText = popularity;
    document.getElementById('connections').innerText = connections;
}

function makeChoice(choice) {
    let story = document.getElementById('story');
    switch (choice) {
        case 'train':
            experience += 10;
            story.innerHTML = "<p>You train hard and improve your wrestling skills. Your experience increases!</p>";
            break;
        case 'network':
            connections += 5;
            story.innerHTML = "<p>You network with key promoters and wrestlers. Your connections increase!</p>";
            break;
        case 'match':
            if (connections > 0) {
                popularity += 10;
                experience += 5;
                connections -= 1;
                story.innerHTML = "<p>You got a match thanks to your connections! You win the match and gain popularity and experience!</p>";
            } else {
                story.innerHTML = "<p>You don't have enough connections to get a match. Network more to increase your chances!</p>";
            }
            break;
        default:
            story.innerHTML = "<p>Welcome to the world of wrestling! Your journey begins at the local wrestling circuit. Make strategic decisions to rise through the ranks.</p>";
            break;
    }
    updateStats();
}

// Initialize stats on load
updateStats();
