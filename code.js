let _content = document.getElementById('content')
const body = document.querySelector("body")
let _all = document.getElementById('all')
let _legacy = document.getElementById('legacy')
let _legendary = document.getElementById('legendary')
let _limited = document.getElementById('limited')
let _filter = document.getElementById('filter')
let _search = document.getElementById('search')
let _modal = document.getElementById('modal')
let _modalData =
'<div id="modal-content" class="modal-content">\
 <div class="modalhead"><div class="skin-name">$$skinname</div><button id="closemodel" class="close-modal-btn">&times;</button></div>\
        <div class="modalcontent">\
            <div class="data">\
            $$skinname  <br/>\
           a <span class="span">$$type</span> Skin for $$champname released on <span class="span">$$releasedate</span><br/>\
            Price on Riot store: <span class="span">$$RpPrice RP</span> <br />\
            <button class=" btn3">Order Now</button>\
            <p class="sub">Order now and save up to 40% on purchase</p>\
            </div>\
            <div class="data-img"><img class="infoimg" src="images/$$imgurl.jpg" alt=""></div>\
        </div>\
    </div>'        
let searchValue = ''
let selectedType = 'All Skins'
let _card =
  '<div  class="box1 col-6 col-md-3 col-sm-4 ">\
            <div id="$$imageurl" class="box" >\
                <div id="$$imgID" class="imgdiv" style="background-image: url(images/$$imageurl.jpg);"></div>\
                <div id="$$IDprice" class="price">\
                    <button id="$$infoBtn" class=" btn1">More info</button>\
                    <button class=" btn1">Order Now</button>\
                    $$price\
                </div>\
                <div class="info">$$name</div>\
            </div>\
        </div>'
let _nothingFound =
  '<div class="col-12 nothingwasfound"><img src="images/notfoundicon.png" alt=""> <p>Sorry no Skin was found</p></div> '
let skins = [
    {
    imageurl: 'ahri-spirit-blossom',
    price: '$ 8.99',
    type: 'Legendary',
    RpPrice: '1820',
    releasDate: '2020-08-06'
    },
    {
    imageurl: 'akali-star-guardian',
    price: '$ 7.99',
    type: 'Legendary',
    RpPrice: '1820',
    releasDate: '2022-07-17'
    },
    {
    imageurl: 'ashe-fae-dragon',
    price: '$ 3.99',
    type: 'Legacy',
    RpPrice: '1350',
    releasDate: '2020-10-01'
    },
    {
    imageurl: 'ashe-heartseeker',
    price: '$ 5.99',
    type: 'Legacy',
    RpPrice: '1820',
    releasDate: '2020-10-01'
    },
    {
    imageurl: 'ashe-high-noon',
    price: '$ 9.99',
    type: 'Legendary',
    RpPrice: '1820',
    releasDate: '2019-10-10'
    },
    {
    imageurl: 'ashe-project',
    price: '$ 6.99',
    type: 'Legacy',
    RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'ashe-sherwood-forest',
    price: '$ 3.99',
    type: 'Legacy',
    RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'chogath-shan-hai-scrolls',
    price: '$ 6.99',
    type: 'Legacy',
    RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'ekko-star-guardian-prestige',
    price: '$ 11.99',
    type: 'Limited',
    RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'ekko-true-damage',
    price: '$ 9.99',
    type: 'Legendary',
    RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'ezreal-pulsefire',
    price: '$ 18.99',
    type: 'Limited',
    RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'graves-sentinel',
    price: '$ 8.99',
    type: 'Legendary',
    RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'jhin-dark-cosmic',
    price: '$ 12.99',
    type: 'Legendary',
    RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'jinx-star-guardian',
    price: '$ 12.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'kaisa-star-guardian',
    price: '$ 12.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'katarina-battle-queen',
    price: '$ 9.99',
    type: 'Legacy',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'katarina-redcard',
    price: '$ 7.99',
    type: 'Legacy',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'kindred-shadowfire',
    price: '$ 13.99',
    type: 'Legacy',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'kindred-spirit-blossom',
    price: '$ 15.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'kindred-super-galaxy',
    price: '$ 13.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'leblanc-coven-prestige-edition',
    price: '$ 19.99',
    type: 'Limited',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'lee-sin-storm-dragon',
    price: '$ 14.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'leona-battle-academia',
    price: '$ 8.99',
    type: 'Legacy',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'leona-battle-academia-prestige-edition',
    price: '$ 13.99',
    type: 'Limited',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'leona-debonair',
    price: '$ 6.99',
    type: 'Legacy',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'leona-high-noon',
    price: '$ 11.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'leona-lunar-eclipse',
    price: '$ 12.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'lucian-high-noon',
    price: '$ 12.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'lux-dark-cosmic',
    price: '$ 14.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'lux-elementalist',
    price: '$ 23.99',
    type: 'Limited',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'lux-empyrean',
    price: '$ 16.99',
    type: 'Limited',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'lux-pajama-guardian',
    price: '$ 8.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'lux-spellthief',
    price: '$ 4.99',
    type: 'Legacy',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'master-yi-cosmic-blade',
    price: '$ 12.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'master-yi-assassin',
    price: '$ 5.99',
    type: 'Legacy',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'master-yi-project',
    price: '$ 5.99',
    type: 'Legacy',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'master-yi-psyops',
    price: '$ 6.99',
    type: 'Legacy',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'miss-fortune-battlebunny',
    price: '$ 12.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'miss-fortune-gungoddess',
    price: '$ 12.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'mordekaiser-dark-star',
    price: '$ 16.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'mordekaiser-infernal',
    price: '$ 4.99',
    type: 'Legacy',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'mordekaiser-project',
    price: '$ 17.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'morgana-blackthorn',
    price: '$ 5.99',
    type: 'Legacy',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'morgana-blade-mistress',
    price: '$ 6.99',
    type: 'Legacy',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'morgana-coven',
    price: '$ 12.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'morgana-dawn-bringer',
    price: '$ 9.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'morgana-star-nemesis',
    price: '$ 11.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'neeko-star-guardian-prestige-edition',
    price: '$ 19.99',
    type: 'Limited',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'poppy-astronaut',
    price: '$ 12.99',
    type: 'Legacy',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'poppy-battle-regalia',
    price: '$ 3.99',
    type: 'Legacy',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'poppy-bewitching',
    price: '$ 11.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'poppy-lollipoppy',
    price: '$ 9.99',
    type: 'Legacy',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'poppy-noxus',
    price: '$ 4.99',
    type: 'Legacy',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'poppy-star-guardian',
    price: '$ 14.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'pyke-blood-moon',
    price: '$ 9.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'pyke-empyrean',
    price: '$ 18.99',
    type: 'Limited',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'pyke-project',
    price: '$ 8.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'pyke-psyops',
    price: '$ 7.99',
    type: 'Legacy',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'pyke-sentinel',
    price: '$ 13.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'renekton-project',
    price: '$ 7.99',
    type: 'Legacy',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'senna-high-noon',
    price: '$ 14.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'senna-true-damage-prestige-edition',
    price: '$ 19.99',
    type: 'Limited',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'sett-spirit-blossom',
    price: '$ 13.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'sion-hextech',
    price: '$ 8.99',
    type: 'Legacy',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'sion-lumber-jack',
    price: '$ 9.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
  },
  {
    imageurl: 'sion-mechazero',
    price: '$ 7.99',
    type: 'Legacy',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'sona-dj',
    price: '$ 17.99',
    type: 'Legacy',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'thresh-spirit-blossom',
    price: '$ 9.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'tristana-firefighter',
    price: '$ 8.99',
    type: 'Legacy',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'vayne-sentinel',
    price: '$ 15.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'xayah-star-guardian',
    price: '$ 16.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'yasuo-truth-dragon',
    price: '$ 11.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'zed-galaxy-slayer',
    price: '$ 12.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'zoe-arcanist-prestige-edition',
    price: '$ 19.99',
    type: 'Limited',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'zoe-edg',
    price: '$ 16.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'zoe-star-guardian',
    price: '$ 16.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'zoe-winter-blessed',
    price: '$ 17.99',
    type: 'Limited',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'jax-empyrean',
    price: '$ 18.99',
    type: 'Limited',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'ksante-empyrean',
    price: '$ 18.99',
    type: 'Limited',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'senna-lunar-eclipse',
    price: '$ 16.99',
    type: 'Legendary',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
    },
    {
    imageurl: 'senna-lunar-eclipse-prestige-edition',
    price: '$ 19.99',
    type: 'Limited',RpPrice: 'XXXX',
    releasDate: 'YYYY-MM-DD'
  },
]  

let innerhtml = ''

sortSkins()
function filterSkins() {
  innerhtml = ''
    _filter.innerHTML = selectedType
  skins.forEach((skin) => {
    let name = skin.imageurl.replaceAll('-', ' ')
    let priceID = skin.imageurl.replaceAll('-', '_')
    let imgID = skin.imageurl.replaceAll('-', '__')
    let infoBtnID = skin.imageurl.replaceAll('-','--')
    if (searchValue == undefined) {
      searchValue = ' '
    }
      if (name.includes(searchValue)) {
      if (selectedType == 'All Skins') {
        innerhtml += _card
          .replaceAll('$$imageurl', skin.imageurl)
          .replaceAll('$$name', name)
          .replaceAll('$$price', skin.price)
          .replaceAll('$$IDprice', priceID)
          .replaceAll('$$imgID', imgID)
          .replaceAll('$$infoBtn',infoBtnID)  
         
      } else {
        if (skin.type == selectedType) {
             innerhtml += _card
            .replaceAll('$$imageurl', skin.imageurl)
            .replaceAll('$$name', name)
            .replaceAll('$$price', skin.price)
            .replaceAll('$$IDprice', priceID)
            .replaceAll('$$imgID', imgID)  
            .replaceAll('$$infoBtn',infoBtnID)  
        }
    }  
      }
  })
  if (innerhtml == '') {
    innerhtml = _nothingFound
}
  showContent()
}
//add event listners for fillters values
_all.addEventListener('click', () => {
  selectedType = 'All Skins'
  sortSkins()
})
_legacy.addEventListener('click', () => {
  selectedType = 'Legacy'
  sortSkins()
})
_legendary.addEventListener('click', () => {
  selectedType = 'Legendary'
  sortSkins()
})
_limited.addEventListener('click', () => {
  selectedType = 'Limited'
  sortSkins()
})

function showPrice(ID) {
  document.getElementById(ID).style.visibility = 'visible'
}
function hidePrice(ID) {
  document.getElementById(ID).style.visibility = 'hidden'
}
function darkenBackground(ID) {
  document.getElementById(ID).style.filter = 'brightness(0.5)'
}
function unDarkenBackground(ID) {
  document.getElementById(ID).style.filter = 'brightness(1)'
}
function showContent() {
  _content.innerHTML = innerhtml
    //mouse related efects
  skins.forEach((skin) => {
    let infoBtnID = skin.imageurl.replaceAll('-','--')
        if (document.getElementById(skin.imageurl)) {
      document
        .getElementById(skin.imageurl)
        .addEventListener('mouseenter', () => {
          showPrice(skin.imageurl.replaceAll('-', '_'))
          darkenBackground(skin.imageurl.replaceAll('-', '__'))
        })
        document.getElementById(infoBtnID).addEventListener('click',()=>{
            showInfo(skin)
        })
        }
     if (document.getElementById(skin.imageurl)) {
      document
        .getElementById(skin.imageurl)
        .addEventListener('mouseleave', () => {
          hidePrice(skin.imageurl.replaceAll('-', '_'))
          unDarkenBackground(skin.imageurl.replaceAll('-', '__'))
        })
     }
  })
}
//search 
setInterval(function () {
  ObserveInputValue(_search.value.toLowerCase())
}, 100)
let oldvalue
function ObserveInputValue(value) {
  searchValue = value
  if (oldvalue != value) {
        filterSkins(searchValue)
    }
    oldvalue = value
}
function sortSkins() {
  do {
    swapped = false
    for (let i = 0; i < skins.length - 1; i++) {
      if (skins[i].imageurl > skins[i + 1].imageurl) {
        let temp = skins[i].imageurl
        skins[i].imageurl = skins[i + 1].imageurl
        skins[i + 1].imageurl = temp
        swapped = true
      }
    }
  } while (swapped)
  filterSkins()
}

function showInfo(skin){
    let infoContent = ""
    let skinName = skin.imageurl.replaceAll('-',' ')
    let type = skin.type
    let champName = ''
    for(i=0;i<skinName.length;i++){
        if (skinName[i] != ' ') {
            champName += skinName[i]
        }else{
            break
        }
    }
    let releasDate = skin.releasDate
    let RPprice
    if (skin.RpPrice) {
         RpPrice = skin.RpPrice
    }else{
         RpPrice = "Unknown"
    }
    
    infoContent = _modalData
        .replaceAll('$$skinname',skinName)
        .replaceAll('$$type',type)
        .replaceAll('$$champname',champName)
        .replaceAll('$$releasedate',releasDate)
        .replaceAll('$$RpPrice',RpPrice)
        .replaceAll('$$imgurl',skin.imageurl)
    
    _modal.innerHTML = infoContent  
    _modal.style.display = "block"
     const _modalContent = document.getElementById('modal-content')
    _modalContent.style.scale= `${50}%`
    body.style.overflow = 'hidden'
    const animate = setInterval(function () {
      _modalContent.style.scale= `${50+i}%`
      i+=3
      if (i>50) {
        clearInterval(animate)
        _modalContent.style.scale= `${100}%`
      }
      
    },1)
    document.getElementById('closemodel').addEventListener('click',()=>{
        _modal.style.display = "none";
        body.style.overflow = 'auto'
    })
}