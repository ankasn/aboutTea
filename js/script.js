 console.log("Witaj przyjacielu!");

 let button = document.querySelector(".js-button");
 console.log("js-button")
 let image = document.querySelector(".js-image");
 console.log("js-image")

 button.addEventListener("click", () => {
     switch (button.innerText) {
         case "pokaż serwis chiński":
             button.innerText = "pokaż serwis polski";
             image.src = "https://imgur.com/TTzzux8.jpeg";
             image.alt = "serwis herbaciany chiński";
             break;
         case "pokaż serwis polski":
             button.innerText = "pokaż serwis włoski";
             image.src = "https://imgur.com/L7FEF3T.jpeg";
             image.alt = "serwis kawowy polski";
             break;
         case "pokaż serwis włoski":
             button.innerText = "pokaż serwis francuski";
             image.src = "https://imgur.com/cw8HGsQ.jpeg";
             image.alt = "serwis kawowy włoski";
             break;
         case "pokaż serwis francuski":
             button.innerText = "pokaż serwis chiński";
             image.src = "https://imgur.com/why4zi4.jpeg";
             image.alt = "serwis herbaciany francuski";
             break;
     }
 });
 
