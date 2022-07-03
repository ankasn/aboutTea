const welcome = () => {
    console.log("Witaj przyjacielu!");
    }
    
    welcome();

 let button = document.querySelector(".js-button");
 let image = document.querySelector(".js-image");

 button.addEventListener("click", () => {
     switch (button.innerText) {
         case "pokaż serwis chiński":
             button.innerText = "pokaż serwis polski";
             image.src = "images/serwis_chinski.jpg";
             image.alt = "serwis herbaciany chiński";
             break;
         case "pokaż serwis polski":
             button.innerText = "pokaż serwis włoski";
             image.src = "images/serwis_polski.jpg";
             image.alt = "serwis kawowy polski";
             break;
         case "pokaż serwis włoski":
             button.innerText = "pokaż serwis francuski";
             image.src = "images/serwis_wloski.jpg";
             image.alt = "serwis kawowy włoski";
             break;
         case "pokaż serwis francuski":
             button.innerText = "pokaż serwis chiński";
             image.src = "images/serwis_francuski.jpg";
             image.alt = "serwis herbaciany francuski";
             break;
     }
 });
 
