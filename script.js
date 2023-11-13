let row=document.querySelector(".row")
const product=[{
    id:1,
    name:"ASUS ROG Strix G18 (RTX4050)",
    price:3419,
    brend:"Asus",
    image:"https://gamenotebaku.az/cdn/storage/product_images/qKXTHatKKCJbSxrEH/HD/qKXTHatKKCJbSxrEH.png",
    othername:"ASUS ROG / TUF",
    deliver:"Azerbaijan, Bakı ünvanına 0azn qiymətinə çatdırılır",

    special:{
        color:"black",
        size:"RAM 16GB DDR5 4800MHz",
        madein:"China",
      
    },
 }]
 function renderUI(arr){
    let innerHTML=""
    for (let i = 0; i < arr.length; i++) {
      innerHTML+=`
      <div class="col">
      <div class="card">
        <img src="${arr[i].image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${arr[i].name}</h5>
          <p class="card-text">${arr[i].brend}</p>
        </div>
      </div>
    </div>`
        
    }
    row.innerHTML=innerHTML
 }
renderUI(product)

 

// let roww=document.querySelector(".roww")
// const product=[{
//     id:2,
//     name:"ASUS ROG G16",
//     price:2999,
//     brend:"Asus",
//     image:"https://gamenotebaku.az/cdn/storage/product_images/qKXTHatKKCJbSxrEH/HD/qKXTHatKKCJbSxrEH.png",
//     othername:"ASUS ROG / TUF",
//     deliver:"Azerbaijan, Bakı ünvanına 0azn qiymətinə çatdırılır",
//     special:{
//         color:"black",
//         madein:"China",
//         size:"RAM: 16GB DDR5 4800MHz",
//     },

// }]
// function renderUI(arr){
//     let innerHTML=""
//     for (let i = 0; i < arr.length; i++) {
//         innerHTML+=`  <div class="col">
//         <div class="card">
//           <img src="${arr[i].image}" class="card-img-top" alt="...">
//           <div class="card-body">
//             <h5 class="card-title">${arr[i].name}</h5>
//             <p class="card-text">${arr[i].brend}</p>
//           </div>
//         </div>
//       </div>`
        
//     }
//     row.innerHTML=innerHTML
// }
// renderUI(product)