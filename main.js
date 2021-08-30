var images=["https://i.pinimg.com/736x/fa/f3/19/faf319c1c50530dc31112fbf459c3c99.jpg",
"https://www.pngitem.com/pimgs/m/120-1203252_clip-art-mom-png-for-mother-cartoon-png.png",
"https://png.pngitem.com/pimgs/s/371-3718264_character-man-beard-uncle-png-and-vector-image.png",
"https://static.vecteezy.com/system/resources/previews/002/485/196/non_2x/grandmother-cartoon-design-free-vector.jpg",
"https://i.pinimg.com/originals/d5/6c/d2/d56cd25436d0d3f56ad2f143750f7455.png"]

var names=["Family book","Mummy","Mamaji","Grandmother","Grandfather"]

var familymember = 4

var i = 0;

function next(){
    i++;
    if (i > familymember){
        i = 0;
    }
    document.getElementById("family-picture").src = images[i];
    document.getElementById("member-name").innerHTML = names[i];
}