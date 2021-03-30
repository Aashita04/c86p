canvas = new fabric.Canvas("my_canvas");

playerx = 10;
playery = 10;

block_img_w = 30;
block_img_h = 30;

player_object = "";
block_img_obj = "";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object= Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:playery,
            left:playerx

        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_img_obj= Img;
        block_img_obj.scaleToWidth(block_img_w);
        block_img_obj.scaleToHeight(block_img_h);
        block_img_obj.set({
            top:playery,
            left:playerx

        });
        canvas.add(block_img_obj);
    });

}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);

    if (e.shiftKey ==true && keypressed =="80")
    {
        console.log("P & shift pressed togther");
        block_img_w = block_img_w + 10;
        block_img_h = block_img_h + 10;
        document.getElementById("current_width").innerHTML = block_img_w;
        document.getElementById("current_height").innerHTML = block_img_h;
    }

    if (e.shiftKey ==true && keypressed == "77")
    {
        console.log("M & shift pressed togther");
        block_img_w = block_img_w - 10;
        block_img_h = block_img_h - 10;
        document.getElementById("current_width").innerHTML = block_img_w;
        document.getElementById("current_height").innerHTML = block_img_h;
    }

    if (keypressed == "37")
    {
        left();
        console.log("left Key is pressed");
    }

    if (keypressed == "38")
    {
        up();
        console.log("up Key is pressed");
    }

    if (keypressed == "39")
    {
        right();
        console.log("right Key is pressed");
    }
    
    if (keypressed == "40")
    {
        down();
        console.log("down Key is pressed");
    }

    if (keypressed == "70")
    {
        new_image("face.png");
        console.log("f Key is pressed");
    }

    if (keypressed == "66"){
        new_image("body.png");
        console.log("b Key is pressed");
    }

    if (keypressed == "76"){
        new_image("legs.png");
        console.log("l Key is pressed");
    }

    if (keypressed == "72"){
        new_image("left_hand.png");
        console.log("h Key is pressed");
    }

    if (keypressed == "82"){
        new_image("right_hand.png");
        console.log("r Key is pressed");
    }
}