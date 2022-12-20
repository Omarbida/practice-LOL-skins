let _content = document.getElementById("content")
let _card =  '<div id="$$imageurl" class="box col-6 col-md-3 col-sm-4 ">\
             <div id="$$imgID" class="imgdiv" style="background-image: url(images/$$imageurl.jpg);"></div>\
            <div id="$$IDprice" class="price">$$price</div>\
            <div class="info">$$name</div>\
        </div>'
let skins = [
    {
        imageurl: "ahri-spirit-blossom",
        price :"$ 8.99"
    },
    {
        imageurl:"akali-star-guardian",
        price :"$ 7.99"
    },
    {
        imageurl:"ashe-fae-dragon",
        price :"$ 3.99"
    },
    {
        imageurl:"ashe-heartseeker",
        price :"$ 5.99"
    },
    {
        imageurl:"ashe-high-noon",
        price :"$ 9.99"
    },
    {
        imageurl:"ashe-project",
        price :"$ 6.99"
    },
    {
        imageurl:"ashe-sherwood-forest",
        price :"$ 3.99"
    },
    {
        imageurl:"chogath-shan-hai-scrolls",
        price :"$ 6.99"
    },
    {
        imageurl:"ekko-star-guardian-prestige",
        price :"$ 11.99"
    },
    {
        imageurl:"ekko-true-damage",
        price :"$ 9.99"
    },
    {
        imageurl:"ezreal-pulsefire",
        price :"$ 18.99"
    },
    {
        imageurl:"graves-sentinel",
        price :"$ 8.99"
    },
    {
        imageurl:"jhin-dark-cosmic",
        price :"$ 12.99"
    },
    {
        imageurl:"jinx-star-guardian",
        price :"$ 12.99"
    },
    {
        imageurl:"kaisa-star-guardian",
        price :"$ 12.99"
    },
    {
        imageurl:"katarina-battle-queen",
        price :"$ 9.99"
    },
    {
        imageurl:"katarina-redcard",
        price :"$ 7.99"
    },
    {
        imageurl:"kindred-shadowfire",
        price :"$ 13.99"
    },
    {
        imageurl:"kindred-spirit-blossom",
        price :"$ 15.99"
    },
    {
        imageurl:"kindred-super-galaxy",
        price :"$ 13.99"
    },
    {
        imageurl:"leblanc-coven-prestige-edition",
        price :"$ 19.99"
    },
    {
        imageurl:"lee-sin-storm-dragon",
        price :"$ 14.99"
    },
    {
        imageurl:"leona-battle-academia",
        price :"$ 8.99"
    },
    {
        imageurl:"leona-battle-academia-prestige-edition",
        price :"$ 13.99"
    },
    {
        imageurl:"leona-debonair",
        price :"$ 6.99"
    },
    {
        imageurl:"leona-high-noon",
        price :"$ 11.99"
    },
    {
        imageurl:"leona-lunar-eclipse",
        price :"$ 12.99"
    },
    {
        imageurl:"lucian-high-noon",
        price :"$ 12.99"
    },
    {
        imageurl:"lux-dark-cosmic",
        price :"$ 14.99"
    },
    {
        imageurl:"lux-elementalist",
        price :"$ 23.99"
    },
    {
        imageurl:"lux-empyrean",
        price :"$ 16.99"
    },
    {
        imageurl:"lux-pajama-guardian",
        price :"$ 8.99"
    },
    {
        imageurl:"lux-spellthief",
        price :"$ 4.99"
    },
    {
        imageurl:"master-yi-cosmic-blade",
        price :"$ 12.99"
    },
    {
        imageurl:"master-yi-assassin",
        price :"$ 5.99"
    },
    {
        imageurl:"master-yi-project",
        price :"$ 5.99"
    },
    {
        imageurl:"master-yi-psyops",
        price :"$ 6.99"
    },
    {
        imageurl:"miss-fortune-battlebunny",
        price :"$ 12.99"
    },
    {
        imageurl:"miss-fortune-gungoddess",
        price :"$ 12.99"
    },
    {
        imageurl:"mordekaiser-dark-star",
        price :"$ 16.99"
    },
    {
        imageurl:"mordekaiser-infernal",
        price :"$ 4.99"
    },
    {
        imageurl:"mordekaiser-project",
        price :"$ 17.99"
    },
    {
        imageurl:"morgana-blackthorn",
        price :"$ 5.99"
    },
    {
        imageurl:"morgana-blade-mistress",
        price :"$ 6.99"
    },
    {
        imageurl:"morgana-coven",
        price :"$ 12.99"
    },
    {
        imageurl:"morgana-dawn-bringer",
        price :"$ 9.99"
    },
    {
        imageurl:"morgana-star-nemesis",
        price :"$ 11.99"
    },
    {
        imageurl:"neeko-star-guardian-prestige-edition",
        price :"$ 19.99"
    },
    {
        imageurl:"poppy-astronaut",
        price :"$ 12.99"
    },
    {
        imageurl:"poppy-battle-regalia",
        price :"$ 3.99"
    },
    {
        imageurl:"poppy-bewitching",
        price :"$ 11.99"
    },
    {
        imageurl:"poppy-lollipoppy",
        price :"$ 9.99"
    },
    {
        imageurl:"poppy-noxus",
        price :"$ 4.99"
    },
    {
        imageurl:"poppy-star-guardian",
        price :"$ 14.99"
    },
    {
        imageurl:"pyke-blood-moon",
        price :"$ 9.99"
    },
    {
        imageurl:"pyke-empyrean",
        price :"$ 18.99"
    },
    {
        imageurl:"pyke-project",
        price :"$ 8.99"
    },
    {
        imageurl:"pyke-psyops",
        price :"$ 7.99"
    },
    {
        imageurl:"pyke-sentinel",
        price :"$ 13.99"
    },
    {
        imageurl:"renekton-project",
        price :"$ 7.99"
    },
    {
        imageurl:"senna-high-noon",
        price :"$ 14.99"
    },
    {
        imageurl:"senna-true-damage-prestige-edition",
        price :"$ 19.99"
    },
    {
        imageurl:"sett-spirit-blossom",
        price :"$ 13.99"
    },
    {
        imageurl:"sion-hextech",
        price :"$ 8.99"
        
    },
    {
        imageurl:"sion-lumber-jack",
        price :"$ 9.99"
    },
    {
        imageurl:"sion-mechazero",
        price :"$ 7.99"
    },
    {
        imageurl:"sona-dj",
        price :"$ 17.99"
    },
    {
        imageurl:"thresh-spirit-blossom",
        price :"$ 9.99"
    },
    {
        imageurl:"tristana-firefighter",
        price :"$ 8.99"
    },
    {
        imageurl:"vayne-sentinel",
        price :"$ 15.99"
    },
    {
        imageurl:"xayah-star-guardian",
        price :"$ 16.99"
    },
    {
        imageurl:"yasuo-truth-dragon",
        price :"$ 11.99"
    },
    {
        imageurl:"zed-galaxy-slayer",
        price :"$ 12.99"
    },
    {
        imageurl:"zoe-arcanist-prestige-edition",
        price :"$ 19.99"
    },
    {
        imageurl:"zoe-edg",
        price :"$ 16.99"
    },
    {
        imageurl:"zoe-star-guardian",
        price :"$ 16.99"
    },
    {
        imageurl:"zoe-winter-blessed",
        price :"$ 17.99"
    }
    
]  
let skinPrices = [];
let innerhtml="";
skins.forEach((skin) =>{
    let name = skin.imageurl.replaceAll("-"," ")
    let priceID = skin.imageurl.replaceAll("-","_")
    let imgID = skin.imageurl.replaceAll("-","__")
    if (skin.price != undefined) {
        innerhtml += _card
    .replaceAll("$$imageurl",skin.imageurl)
    .replaceAll("$$name",name)
    .replaceAll("$$price",skin.price)
    .replaceAll("$$IDprice",priceID)
    .replaceAll("$$imgID",imgID)

    }else{
          innerhtml += _card
    .replaceAll("$$imageurl",skin.imageurl)
    .replaceAll("$$name",name)
    .replaceAll("$$price","")
    .replaceAll("$$IDprice",priceID)
    .replaceAll("$$imgID",imgID)
    }
   skinPrices.push(priceID)
    
});
 _content.innerHTML = innerhtml;
// console.log(skinPrices);

skins.forEach((skin)=>{
     document.getElementById(skin.imageurl).addEventListener("mouseenter",()=>{
        showPrice(skin.imageurl.replaceAll("-","_"));
        darkenBackground(skin.imageurl.replaceAll("-","__"))
     });
     document.getElementById(skin.imageurl).addEventListener("mouseleave",()=>{
        hidePrice(skin.imageurl.replaceAll("-","_"));
        unDarkenBackground(skin.imageurl.replaceAll("-","__"))
     });
});
function showPrice(ID) {
    
    document.getElementById(ID).style.visibility = "visible"
}
function hidePrice(ID) {
   
    document.getElementById(ID).style.visibility = "hidden"
}
function darkenBackground(ID) {
    
    document.getElementById(ID).style.filter = "brightness(0.5)"
}
function unDarkenBackground(ID) {
   
    document.getElementById(ID).style.filter = "brightness(1)"
}


