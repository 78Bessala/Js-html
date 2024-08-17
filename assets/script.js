const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// var myArray=[];
const tailleTableau = slides.length;
console.log(slides[1]);

const parent=document.querySelector(".dots");
const btn_left=document.querySelector(".arrow_left");
const btn_right=document.querySelector(".arrow_right");
const banner=document.querySelector(".banner-img");
const text=document.querySelector(".banner-txt");

let k,j,i=0;

var compteur=0;
var b=parseInt(compteur);
var myArray=[];
myArray=Object.values(slides);//permet de 

	console.log(myArray[b].image);



while (i<tailleTableau) {
	//creer des balises ou element  avec le dom
	const bullet=document.createElement("div");
    parent.appendChild(bullet);
	bullet.classList.add("dot");
	if(i==0)
	   bullet.classList.add("dot_selected");
	i++;
     
	
}






parent.addEventListener("creer",() =>{
	console.log("vous");
	
})

const pb=document.querySelectorAll(".dot");
j=0;

btn_right.addEventListener("click",() => { 
	console.log( "Vous venez de faire");
	
	let b=j;
	pb[j].classList.remove("dot_selected");
    j++;
	if(j>3){
		j=0;
	}
	// parent.removeChild("dot_selector");

	console.log(j);
	const img=myArray[j].image;
	const texte=myArray[j].tagLine;
	console.log(img);
    text.innerHTML=texte;
	banner.src="./assets/images/slideshow/"+ img;
	pb[j].classList.add("dot_selected");
	
	
})


k=3;
btn_left.addEventListener("click",() => { 
 	console.log( "Vous venez de faire");
	 pb[k].classList.remove("dot_selected");
	k--;
	if(k<0){
		k=3;
	}
	console.log(k);
	const img=myArray[k].image;
	const texte=myArray[k].tagLine;
	console.log(img); 
    text.innerHTML=texte;
	banner.src="./assets/images/slideshow/"+img;
	pb[k].classList.add("dot_selected");
	 
})



