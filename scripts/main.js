

// Get the canvas element from the HTML document
const canvas = document.getElementById("gameCanvas");

// Create the canvas rendering context
const ctx = canvas.getContext("2d");

// Set up the player
const player = {
x: 100,
y: 100,
width: 32,
height: 32,
fillStyle: "blue",
frameIndex: 0,
animationCounter: 0,
animationSpeed: 10,
xSpeed: 0,
ySpeed: 0,
};


// Set up the game loop
function gameLoop() {
// Clear the canvas and set the background color
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Move the player
player.x += player.xSpeed;
player.y += player.ySpeed;

// Apply gravity to the player
const gravity = 0.5;
player.ySpeed += gravity;

// Call the animatePlayer function to update the player's animation
animatePlayer(ctx, player);

// Call the drawPlatform function to draw the platform
drawPlatform(ctx, canvas);

// Check if the player is colliding with the platform
if (player.y + player.height >= canvas.height - 50) {
// Move the player back up to the platform
player.y = canvas.height - player.height - 50;
// Set the player's ySpeed to zero to stop the jump
player.ySpeed = 0;
}

// Request the next frame of the game loop
requestAnimationFrame(gameLoop);
}

// Handle keypress events
function handleKeyPress(event) {
// Move the player left or right
if (event.keyCode === 37) {
player.xSpeed = -5;
} else if (event.keyCode === 39) {
player.xSpeed = 5;
}

// Make the player jump
if (event.keyCode === 38 && player.y + player.height === canvas.height - 50) {
player.ySpeed = -10;
}
}

// Handle keyup events
function handleKeyUp(event) {
// Stop moving the player left or right
if (event.keyCode === 37 || event.keyCode === 39) {
player.xSpeed = 0;
}
}

// Attach event listeners to the window
window.addEventListener("keydown", handleKeyPress);
window.addEventListener("keyup", handleKeyUp);

// Start the game loop
gameLoop();