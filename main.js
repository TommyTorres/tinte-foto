function preload()
{

}

function setup()
{
   canvas=createCanvas(650,480); 
   canvas.position(450,250);
   video=createCapture(VIDEO);
   video.hide();

   tint_color="";
}

function draw()
{
    image(video,0,0,650,480);
    tint(tint_color);
}

function filter_tint()
{
   tint_color=document.getElementById("color_name").value;
}

function take_snapshot()
{
    save('Captura_Con_Tinte.png');
}