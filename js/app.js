/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the element with the id of "name1":
	- Replace the content with the following string "Tay-Tay"
*/
document.getElementById("name1").innerHTML = "Tay-Tay";


/*2. DJ Khaled

Find the element with the id of "position2":
	- Replace the content with the following string "Project Manager"
	- Change the background color to red
*/
document.getElementById("position2").innerHTML = "Project Manager";
document.getElementById("position2").style.background = "red";


/*3. Piko Taro

Find the element with the id of "alias3":
	- Replace the content with the following string "Concatenation"
	- Change the font size to 40
*/
document.getElementById("alias3").innerHTML = "Concatenation";
document.getElementById("alias3").style.fontSize = "40px";


/*4. Prince

Find the element with the class name of "profile": 
	- Replace the content with a verse from your favorite Prince song
	- Change the styles of the font-family to Sans Serif
*/
document.getElementsByClassName("profile")[0].innerHTML = "She wore a Raspberry beret The kind you find in a second hand store Raspberry beret And if it was warm she wouldn't wear much more Raspberry beret I think I love her";
document.getElementsByClassName("profile")[0].style.fontFamily = "Sans Serif";


/*5. Bruce Lee

Find the element with the class name of "profile":
	- Replace the content with a quote from the legend himself
*/
document.getElementsByClassName("profile")[1].innerHTML = '"You must be shapeless, formless, like water. When you pour water in a cup, it becomes the cup. When you pour water in a bottle, it becomes the bottle. When you pour water in a teapot, it becomes the teapot. Water can drip and it can crash. Become like water my friend"';


/*6. Samuel L Jackson

Find the element with the class name of "alias": 
	- Replace the content with your favorite character that Sammy portrayed
*/
document.getElementsByClassName("alias")[2].innerHTML = "Jules Winnfield";


/*7. Peter Griffin

Create a div element and give it an id of "name7":
	- Inside this div element, give it the contents of "Peter Griffin"
	- Append this div element to the element with id "nameParent"
*/
var insert = document.createElement("div");
insert.id = "name7";
insert.innerHTML = "Peter Griffin";
document.getElementById("nameParent").appendChild(insert);


/*8. Tim Duncan

Create a div element give it an id of "alias8":
	- Inside this div element, give it the contents of "Old Man Riverwalk"
	- Append this div element to the element with id "aliasParent"
*/
var insert2 = document.createElement("div");
insert2.id = "alias8";
insert2.innerHTML = "Old Man RiverWalk";
document.getElementById("aliasParent").appendChild(insert2);


//Final Boss
/*9. Without modifying the HTML file, create your own profile.*/
var TRU = document.getElementsByClassName("block3 col-sm-4");
TRU[0].childNodes[0].src = "http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1502722460/hanauma-bay-nature-preserve-oahu-hawaii-HAWAIIFLIGHTDEAL0817.jpg?itok=5RHXufdE";



