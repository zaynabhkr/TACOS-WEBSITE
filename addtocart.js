



const product = [
   {
       id: 0,
       image: 'images/tacos/beef-original.jpg',
       title: 'Beef Original Taco',
       price: 120,
   },
   {
       id: 1,
       image: 'images/tacos/Chicken-tacos.jpg',
       title: 'Grilled Chicken Tacos',
       price: 60,
   },
   {
       id: 2,
       image: 'images/tacos/fish-tacos.jpg',
       title: 'Baja Fish Tacos',
       price: 230,
   },
   {
       id: 3,
       image: 'images/tacos/shrimp-tacos.jpg',
       title: 'Shrimp tacos',
       price: 100,
   },
   {
   id: 3,
   image: 'images/tacos/vegan-tacos.jpg',
   title: 'Vegetarian tacos',
   price: 100,
}
];
const categories = [...new Set(product.map((item)=>
   {return item}))]
   let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
   var {image, title, price} = item;
   return(
       `<div class='box'>
           <div class='img-box'>
               <img class='images' src=${image}></img>
           </div>
       <div class='bottom'>
       <p>${title}</p>
       <h2>$ ${price}.00</h2>`+
       "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
       `</div>
       </div>`
   )
}).join('')

var cart =[];

function addtocart(a){
   cart.push({...categories[a]});
   displaycart();
}
function delElement(a){
   cart.splice(a, 1);
   displaycart();
}

function displaycart(){
   let j = 0, total=0;
   document.getElementById("count").innerHTML=cart.length;
   if(cart.length==0){
       document.getElementById('cartItem').innerHTML = "Your cart is empty";
       document.getElementById("total").innerHTML = "$ "+0+".00";
   }
   else{
       document.getElementById("cartItem").innerHTML = cart.map((items)=>
       {
           var {image, title, price} = items;
           total=total+price;
           document.getElementById("total").innerHTML = "$ "+total+".00";
           return(
               `<div class='cart-item'>
               <div class='row-img'>
                   <img class='rowimg' src=${image}>
               </div>
               <p style='font-size:14px;'>${title}</p>
               <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
               "<i class='fa fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
           );
       }).join('');
   }

   
}
