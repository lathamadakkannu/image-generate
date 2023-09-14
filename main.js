let cooldrinks=["image/img1.jpg","image/img2.jpg","image/img3.jpg","image/img4.jpg","image/img5.jpg","image/img6.jpg",];

let items=document.getElementById("items")
console.log(items);

let btn=document.getElementById("btn")
console.log(btn);

btn.addEventListener('click',generate);
function generate(){
    cooldrinks.forEach(function(){
        
        let result=(Math.floor(Math.random()*cooldrinks.length))
        items.src=cooldrinks[result];
        console.log(result);
        })
}
