let height_proportion = 0.90; // take 75% of the screen total height
let WIDTH;
let HEIGHT;
let game_w;
let game_h;

document.onreadystatechange = function() {
    if (document.readyState == "complete") {
        let game_area = document.getElementById("game-area");
        WIDTH = window.innerWidth;
        HEIGHT = window.innerHeight;
        game_w = WIDTH;
        game_h = HEIGHT*height_proportion;
        console.log("WIDTH = " + WIDTH + ", HEIGHT = " + HEIGHT );
        game_area.style.width = WIDTH + "px";
        game_area.style.height = HEIGHT*height_proportion + "px";
        game_area.style.backgroundColor = "white";
    }
}
window.onresize = function () {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    game_w = WIDTH;
    game_h = HEIGHT*height_proportion;

    let game_area = document.getElementById("game-area");
    game_area.style.width = WIDTH + "px";
    game_area.style.height = HEIGHT*height_proportion + "px";
};
