var btn = document.getElementById("heartTxt");
btn.style.opacity = 0;
var btnVal = 0;
var showImageInterval;
var imgInterval;
var buttonInterval;
var imageDuration = 5000; // Image stays visible for 5 seconds
var imageIndex = 0;

function showImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    myTxt.innerHTML = txtArray[imageIndex];
    myImage.style.maxWidth = "100%"; // Ensure image fits within screen width
    myImage.style.maxHeight = "100vh"; // Ensure image fits within screen height
    myImage.style.objectFit = "contain"; // Maintain aspect ratio

    imageIndex++;
    if (imageIndex >= len) {
        imageIndex = 0;
    }
}

function play() {
    if (t == 0) {
        myImage.setAttribute("src", "");
        myTxt.innerHTML = "";
        imageIndex = 0;
        clearInterval(showImageInterval);
    }
    flag = 1 - flag;
    document.getElementById("typeDiv").style.opacity = flag;
    document.getElementById("imgTxt").style.opacity = 1 - flag;
    
    if (t == 0) {
        showImage(); // Show first image instantly
        showImageInterval = setInterval(showImage, imageDuration);
    }
    t++;
}

function buttonFadeIn() {
    if (btnVal < 1) {
        btnVal += 0.025;
        btn.style.opacity = btnVal;
    } else {
        clearInterval(buttonInterval);
        if (ok == 3) {
            ok += 1;
        }
    }
}

function event() {
    showImageInterval = setInterval(showImage, imageDuration);
    imgInterval = setInterval(function () {
        if (ok == 3) {
            setTimeout(function () {
                buttonInterval = setInterval(buttonFadeIn, 50);
            }, 1500);
            clearInterval(imgInterval);
        }
    }, 50);
}

event();