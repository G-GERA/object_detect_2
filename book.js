Status = "";
img = "";

function preload()
{
    img = loadImage('book.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.position(500, 200);

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('Status').innerHTML = 'Status: Detecting Objects';
}

function modelLoaded()
{
    console.log("Model Loaded!");
    Status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}

function draw()
{
    image(img, 0, 0, 640, 420);
}