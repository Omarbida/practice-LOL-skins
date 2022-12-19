let _content = document.getElementById("content")
let _card =  '<div class="box col-md-3 col-sm-4 ">\
            <img src="images/$$imageurl.jpg" alt="">\
            <div class="info">$$name</div>\
        </div>'
let skins = [
    {
        imageurl: "ahri-spirit-blossom",
        
    },
    {
        imageurl:"akali-star-guardian"
    },
    {
        imageurl:"ashe-fae-dragon"
    },
    {
        imageurl:"ashe-heartseeker"
    },
    {
        imageurl:"ashe-high-noon"
    },
    {
        imageurl:"ashe-project"
    },
    {
        imageurl:"ashe-sherwood-forest"
    },
    {
        imageurl:"chogath-shan-hai-scrolls"
    },
    {
        imageurl:"ekko-star-guardian-prestige"
    },
    {
        imageurl:"ekko-true-damage"
    },
    {
        imageurl:"ezreal-pulsefire"
    },
    {
        imageurl:"graves-sentinel"
    },
    {
        imageurl:"jhin-dark-cosmic"
    },
    {
        imageurl:"jinx-star-guardian"
    },
    {
        imageurl:"kaisa-star-guardian"
    },
    {
        imageurl:"katarina-battle-queen"
    },
    {
        imageurl:"katarina-redcard"
    },
    {
        imageurl:"kindred-shadowfire"
    },
    {
        imageurl:"kindred-spirit-blossom"
    },
    {
        imageurl:"kindred-super-galaxy"
    },
    {
        imageurl:"leblanc-coven-prestige-edition"
    },
    {
        imageurl:"lee-sin-storm-dragon"
    },
    {
        imageurl:"leona-battle-academia"
    },
    {
        imageurl:"leona-battle-academia-prestige-edition"
    },
    {
        imageurl:"leona-debonair"
    },
    {
        imageurl:"leona-high-noon"
    },
    {
        imageurl:"leona-lunar-eclipse"
    },
    {
        imageurl:"lucian-high-noon"
    },
    {
        imageurl:"lux-dark-cosmic"
    },
    {
        imageurl:"lux-elementalist"
    },
    {
        imageurl:"lux-empyrean"
    },
    {
        imageurl:"lux-pajama-guardian"
    },
    {
        imageurl:"lux-spellthief"
    },
    {
        imageurl:"master-yi-cosmic-blade"
    },
    {
        imageurl:"master-yi-assassin"
    },
    {
        imageurl:"master-yi-project"
    },
    {
        imageurl:"master-yi-psyops"
    },
    {
        imageurl:"miss-fortune-battlebunny"
    },
    {
        imageurl:"miss-fortune-gungoddess"
    },
    {
        imageurl:"mordekaiser-dark-star"
    },
    {
        imageurl:"mordekaiser-infernal"
    },
    {
        imageurl:"mordekaiser-project"
    },
    {
        imageurl:"morgana-blackthorn"
    },
    {
        imageurl:"morgana-blade-mistress"
    },
    {
        imageurl:"morgana-coven"
    },
    {
        imageurl:"morgana-dawn-bringer"
    },
    {
        imageurl:"morgana-star-nemesis"
    },
    {
        imageurl:"neeko-star-guardian-prestige-edition"
    },
    {
        imageurl:"poppy-astronaut"
    },
    {
        imageurl:"poppy-battle-regalia"
    },
    {
        imageurl:"poppy-bewitching"
    },
    {
        imageurl:"poppy-lollipoppy"
    },
    {
        imageurl:"poppy-noxus"
    },
    {
        imageurl:"poppy-star-guardian"
    },
    {
        imageurl:"pyke-blood-moon"
    },
    {
        imageurl:"pyke-empyrean"
    },
    {
        imageurl:"pyke-project"
    },
    {
        imageurl:"pyke-psyops"
    },
    {
        imageurl:"pyke-sentinel"
    },
    {
        imageurl:"renekton-project"
    },
    {
        imageurl:"senna-high-noon"
    },
    {
        imageurl:"senna-true-damage-prestige-edition"
    },
    {
        imageurl:"sett-spirit-blossom"
    },
    {
        imageurl:"sion-hextech"
    },
    {
        imageurl:"sion-lumber-jack"
    },
    {
        imageurl:"sion-mechazero"
    },
    {
        imageurl:"sona-dj"
    },
    {
        imageurl:"thresh-spirit-blossom"
    },
    {
        imageurl:"tristana-firefighter"
    },
    {
        imageurl:"vayne-sentinel"
    },
    {
        imageurl:"xayah-star-guardian"
    },
    {
        imageurl:"yasuo-truth-dragon"
    },
    {
        imageurl:"zed-galaxy-slayer"
    },
    {
        imageurl:"zoe-arcanist-prestige-edition"
    },
    {
        imageurl:"zoe-edg"
    },
    {
        imageurl:"zoe-star-guardian"
    },
    {
        imageurl:"zoe-winter-blessed"
    }
    
]  
let innerhtml=""
skins.forEach((skin) =>{
    let name = skin.imageurl.replaceAll("-"," ")
    innerhtml += _card
    .replace("$$imageurl",skin.imageurl)
    .replace("$$name",name)
});
_content.innerHTML = innerhtml;