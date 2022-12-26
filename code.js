let _content = document.getElementById('content')
let _all = document.getElementById('all')
let _legacy = document.getElementById('legacy')
let _legendary = document.getElementById('legendary')
let _limited = document.getElementById('limited')
let _filter = document.getElementById('filter')
let _search = document.getElementById('search')
let searchValue = ''
let selectedType = 'All Skins'
let _card =
  '<div  class="box1 col-6 col-md-3 col-sm-4 ">\
            <div id="$$imageurl" class="box" >\
                <div id="$$imgID" class="imgdiv" style="background-image: url(images/$$imageurl.jpg);"></div>\
                <div id="$$IDprice" class="price">\
                    <button class=" btn1" type="submit">More info</button>\
                    <button class=" btn1" type="submit">Order Now</button>\
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
    },
    {
    imageurl: 'akali-star-guardian',
    price: '$ 7.99',
    type: 'Legendary',
    },
    {
    imageurl: 'ashe-fae-dragon',
    price: '$ 3.99',
    type: 'Legacy',
    },
    {
    imageurl: 'ashe-heartseeker',
    price: '$ 5.99',
    type: 'Legacy',
    },
    {
    imageurl: 'ashe-high-noon',
    price: '$ 9.99',
    type: 'Legendary',
    },
    {
    imageurl: 'ashe-project',
    price: '$ 6.99',
    type: 'Legacy',
    },
    {
    imageurl: 'ashe-sherwood-forest',
    price: '$ 3.99',
    type: 'Legacy',
    },
    {
    imageurl: 'chogath-shan-hai-scrolls',
    price: '$ 6.99',
    type: 'Legacy',
    },
    {
    imageurl: 'ekko-star-guardian-prestige',
    price: '$ 11.99',
    type: 'Limited',
    },
    {
    imageurl: 'ekko-true-damage',
    price: '$ 9.99',
    type: 'Legendary',
    },
    {
    imageurl: 'ezreal-pulsefire',
    price: '$ 18.99',
    type: 'Limited',
    },
    {
    imageurl: 'graves-sentinel',
    price: '$ 8.99',
    type: 'Legendary',
    },
    {
    imageurl: 'jhin-dark-cosmic',
    price: '$ 12.99',
    type: 'Legendary',
    },
    {
    imageurl: 'jinx-star-guardian',
    price: '$ 12.99',
    type: 'Legendary',
    },
    {
    imageurl: 'kaisa-star-guardian',
    price: '$ 12.99',
    type: 'Legendary',
    },
    {
    imageurl: 'katarina-battle-queen',
    price: '$ 9.99',
    type: 'Legacy',
    },
    {
    imageurl: 'katarina-redcard',
    price: '$ 7.99',
    type: 'Legacy',
    },
    {
    imageurl: 'kindred-shadowfire',
    price: '$ 13.99',
    type: 'Legacy',
    },
    {
    imageurl: 'kindred-spirit-blossom',
    price: '$ 15.99',
    type: 'Legendary',
    },
    {
    imageurl: 'kindred-super-galaxy',
    price: '$ 13.99',
    type: 'Legendary',
    },
    {
    imageurl: 'leblanc-coven-prestige-edition',
    price: '$ 19.99',
    type: 'Limited',
    },
    {
    imageurl: 'lee-sin-storm-dragon',
    price: '$ 14.99',
    type: 'Legendary',
    },
    {
    imageurl: 'leona-battle-academia',
    price: '$ 8.99',
    type: 'Legacy',
    },
    {
    imageurl: 'leona-battle-academia-prestige-edition',
    price: '$ 13.99',
    type: 'Limited',
    },
    {
    imageurl: 'leona-debonair',
    price: '$ 6.99',
    type: 'Legacy',
    },
    {
    imageurl: 'leona-high-noon',
    price: '$ 11.99',
    type: 'Legendary',
    },
    {
    imageurl: 'leona-lunar-eclipse',
    price: '$ 12.99',
    type: 'Legendary',
    },
    {
    imageurl: 'lucian-high-noon',
    price: '$ 12.99',
    type: 'Legendary',
    },
    {
    imageurl: 'lux-dark-cosmic',
    price: '$ 14.99',
    type: 'Legendary',
    },
    {
    imageurl: 'lux-elementalist',
    price: '$ 23.99',
    type: 'Limited',
    },
    {
    imageurl: 'lux-empyrean',
    price: '$ 16.99',
    type: 'Limited',
    },
    {
    imageurl: 'lux-pajama-guardian',
    price: '$ 8.99',
    type: 'Legendary',
    },
    {
    imageurl: 'lux-spellthief',
    price: '$ 4.99',
    type: 'Legacy',
    },
    {
    imageurl: 'master-yi-cosmic-blade',
    price: '$ 12.99',
    type: 'Legendary',
    },
    {
    imageurl: 'master-yi-assassin',
    price: '$ 5.99',
    type: 'Legacy',
    },
    {
    imageurl: 'master-yi-project',
    price: '$ 5.99',
    type: 'Legacy',
    },
    {
    imageurl: 'master-yi-psyops',
    price: '$ 6.99',
    type: 'Legacy',
    },
    {
    imageurl: 'miss-fortune-battlebunny',
    price: '$ 12.99',
    type: 'Legendary',
    },
    {
    imageurl: 'miss-fortune-gungoddess',
    price: '$ 12.99',
    type: 'Legendary',
    },
    {
    imageurl: 'mordekaiser-dark-star',
    price: '$ 16.99',
    type: 'Legendary',
    },
    {
    imageurl: 'mordekaiser-infernal',
    price: '$ 4.99',
    type: 'Legacy',
    },
    {
    imageurl: 'mordekaiser-project',
    price: '$ 17.99',
    type: 'Legendary',
    },
    {
    imageurl: 'morgana-blackthorn',
    price: '$ 5.99',
    type: 'Legacy',
    },
    {
    imageurl: 'morgana-blade-mistress',
    price: '$ 6.99',
    type: 'Legacy',
    },
    {
    imageurl: 'morgana-coven',
    price: '$ 12.99',
    type: 'Legendary',
    },
    {
    imageurl: 'morgana-dawn-bringer',
    price: '$ 9.99',
    type: 'Legendary',
    },
    {
    imageurl: 'morgana-star-nemesis',
    price: '$ 11.99',
    type: 'Legendary',
    },
    {
    imageurl: 'neeko-star-guardian-prestige-edition',
    price: '$ 19.99',
    type: 'Limited',
    },
    {
    imageurl: 'poppy-astronaut',
    price: '$ 12.99',
    type: 'Legacy',
    },
    {
    imageurl: 'poppy-battle-regalia',
    price: '$ 3.99',
    type: 'Legacy',
    },
    {
    imageurl: 'poppy-bewitching',
    price: '$ 11.99',
    type: 'Legendary',
    },
    {
    imageurl: 'poppy-lollipoppy',
    price: '$ 9.99',
    type: 'Legacy',
    },
    {
    imageurl: 'poppy-noxus',
    price: '$ 4.99',
    type: 'Legacy',
    },
    {
    imageurl: 'poppy-star-guardian',
    price: '$ 14.99',
    type: 'Legendary',
    },
    {
    imageurl: 'pyke-blood-moon',
    price: '$ 9.99',
    type: 'Legendary',
    },
    {
    imageurl: 'pyke-empyrean',
    price: '$ 18.99',
    type: 'Limited',
    },
    {
    imageurl: 'pyke-project',
    price: '$ 8.99',
    type: 'Legendary',
    },
    {
    imageurl: 'pyke-psyops',
    price: '$ 7.99',
    type: 'Legacy',
    },
    {
    imageurl: 'pyke-sentinel',
    price: '$ 13.99',
    type: 'Legendary',
    },
    {
    imageurl: 'renekton-project',
    price: '$ 7.99',
    type: 'Legacy',
    },
    {
    imageurl: 'senna-high-noon',
    price: '$ 14.99',
    type: 'Legendary',
    },
    {
    imageurl: 'senna-true-damage-prestige-edition',
    price: '$ 19.99',
    type: 'Limited',
    },
    {
    imageurl: 'sett-spirit-blossom',
    price: '$ 13.99',
    type: 'Legendary',
    },
    {
    imageurl: 'sion-hextech',
    price: '$ 8.99',
    type: 'Legacy',
    },
    {
    imageurl: 'sion-lumber-jack',
    price: '$ 9.99',
    type: 'Legendary',
  },
  {
    imageurl: 'sion-mechazero',
    price: '$ 7.99',
    type: 'Legacy',
    },
    {
    imageurl: 'sona-dj',
    price: '$ 17.99',
    type: 'Legacy',
    },
    {
    imageurl: 'thresh-spirit-blossom',
    price: '$ 9.99',
    type: 'Legendary',
    },
    {
    imageurl: 'tristana-firefighter',
    price: '$ 8.99',
    type: 'Legacy',
    },
    {
    imageurl: 'vayne-sentinel',
    price: '$ 15.99',
    type: 'Legendary',
    },
    {
    imageurl: 'xayah-star-guardian',
    price: '$ 16.99',
    type: 'Legendary',
    },
    {
    imageurl: 'yasuo-truth-dragon',
    price: '$ 11.99',
    type: 'Legendary',
    },
    {
    imageurl: 'zed-galaxy-slayer',
    price: '$ 12.99',
    type: 'Legendary',
    },
    {
    imageurl: 'zoe-arcanist-prestige-edition',
    price: '$ 19.99',
    type: 'Limited',
    },
    {
    imageurl: 'zoe-edg',
    price: '$ 16.99',
    type: 'Legendary',
    },
    {
    imageurl: 'zoe-star-guardian',
    price: '$ 16.99',
    type: 'Legendary',
    },
    {
    imageurl: 'zoe-winter-blessed',
    price: '$ 17.99',
    type: 'Limited',
    },
    {
    imageurl: 'jax-empyrean',
    price: '$ 18.99',
    type: 'Limited',
    },
    {
    imageurl: 'ksante-empyrean',
    price: '$ 18.99',
    type: 'Limited',
    },
    {
    imageurl: 'senna-lunar-eclipse',
    price: '$ 16.99',
    type: 'Legendary',
    },
    {
    imageurl: 'senna-lunar-eclipse-prestige-edition',
    price: '$ 19.99',
    type: 'Limited',
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
      } else {
        if (skin.type == selectedType) {
             innerhtml += _card
            .replaceAll('$$imageurl', skin.imageurl)
            .replaceAll('$$name', name)
            .replaceAll('$$price', skin.price)
            .replaceAll('$$IDprice', priceID)
            .replaceAll('$$imgID', imgID)
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
        if (document.getElementById(skin.imageurl)) {
      document
        .getElementById(skin.imageurl)
        .addEventListener('mouseenter', () => {
          showPrice(skin.imageurl.replaceAll('-', '_'))
          darkenBackground(skin.imageurl.replaceAll('-', '__'))
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
  console.log(skins)
  filterSkins()
}
