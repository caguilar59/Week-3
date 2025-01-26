var photos = []; //declare an empty array to store image element
var fileNames = []; //declare an empty element to store image file
var imageList = []; //declare an empty array to store html list that contains an image
var image; // declares an empty variable to store the assemble image list code
var openList = "<li id='photo'>"; // declare a variable to contain open list tag
var closeList = "</li>"; // declare a variable to contain close list tag
// create a loop to create 10 images starting with index of 0
for (var i=0; i<10; i++){
    fileNames.push("gallery"+ (i+1)); //creates image file name and store in the array
    photos.push("<img src='images/"+ fileNames[i] +".png'>");//assemble file name into image element and store in an array
    image = openList + photos[i] + closeList; // Assemble image element from array with list elements and store in a variable
    imageList.push(image); //store(push) the assemble list
}
console.log(imageList);

//display all six image codes stored in the array
document.getElementById("album").innerHTML = imageList;