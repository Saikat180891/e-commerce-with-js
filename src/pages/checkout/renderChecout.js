document.addEventListener("DOMContentLoaded", ()=>{
    fetch("../../data/get-cart.json")
    .then((res)=> res.json())
    .then((res)=>renderChecoutItem(res))

    function renderChecoutItem(items){
        let main = document.querySelector("#main");
        items.forEach((item)=>{
            console.log(item);
            let section = document.createElement("section");
            section.className = "flex checkout-section";
            section.innerHTML = `<figure class="checkout-figure">
                                    <img class="checkout-img" src= ${item.img}
                                    alt="">
                                </figure>
                                <div class="flex direction-column justify-center">
                                    <span class="product_name">${item.prod_name}</span>
                                    <span>Price: ${item.sp}</span>
                                    <span>Discount: ${item.discount}</span>
                                </div>
                            `;
            main.appendChild(section);
        })
        
        
    }
    
})
