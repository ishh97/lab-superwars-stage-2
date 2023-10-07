const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    // let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    const detailedPlayers = players.map((player, index) => {
        return {
          name: player,
          strength: 2 + index,
          image: `images/super-${index + 1}.png`,
          type: index % 2 === 0 ? "hero" : "villain",
          id: index + 1,
        };
      });
    
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    return Math.ceil(Math.random() * 100);
}

const view = (playerObj) => {
    const { image, name, strength } = playerObj;
  
    const player = document.createElement('div');
    player.classList.add('player');
  
    player.innerHTML = `
      <img src="${image}" alt="">
      <div class="name">${name}</div>
      <div class="strength">${strength}</div>
    `;
  
    return player;
  };
  
const buildPlayers = (players, type) => {
    let fragment = document.createElement('div');
  players
    .filter((player) => player.type == type)
    .forEach((player) => fragment.append(view(player)));
  return fragment.innerHTML;

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here

}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
    buildPlayers(players, 'hero');
    buildPlayers(players,'villain');
}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}
