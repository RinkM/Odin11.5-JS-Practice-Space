const pics = [ 
  {imgName:".\\images\\avacado-toast-ryan-quintal.jpg",
  imgDescription: "Fresh avacado with sun ripened tomatoes!"  ,
  altText: "Avacado Toast"
  },
  {imgName:".\\images\\bread - yeh-xintong-go.jpg",
  imgDescription: "Bread baked daily"  ,
  altText: "Bread in a bakery"
  },
  {imgName:".\\images\\coffee3-dumlao.jpg",
  imgDescription: "Hand crafted drinks"  ,
  altText: "Different coffee drinks"
  },
  {imgName:".\\images\\coffee-milk-demi-deherrera - Copy.jpg",
  imgDescription: "Iced Coffee"  ,
  altText: "Iced Coffee"
  },
  {imgName:".\\images\\eggs-bacon-james-kern.jpg",
  imgDescription: "Wakey Wakey. Eggs and Bakey"  ,
  altText: "Eggs and Bacon"
  },
  {imgName:".\\images\\eggs-morgane-perraud.jpg",
  imgDescription: "Eggs from happy chickens"  ,
  altText: "Carton of Eggs"
  },
  {imgName:".\\images\\french-toast-joseph-gonzalez.jpg",
  imgDescription: "French Toast with fruit"  ,
  altText: "French Toast"
  },
  {imgName:".\\images\\interior-shawnanggg.jpg",
  imgDescription: "Our restaurant"  ,
  altText: "interior"
  },
  {imgName:".\\images\\pancakes-albany-capture-.jpg",
  imgDescription: "Pancakes"  ,
  altText: "Pancakes"
  },
  {imgName:".\\images\\pancakes-brian-suman-.jpg",
  imgDescription: "and more pancakes"  ,
  altText: "Pancakes"
  },
  {imgName:".\\images\\pancakes-portuguese-gravity.jpg",
  imgDescription: "and MORE pancakes!"  ,
  altText: "Pancakes"
  },
  {imgName:".\\images\\ryan-beltz-j81ptH7PD7U-unsplash.jpg",
  imgDescription: "Powdered Sugar blizzard"  ,
  altText: "Sugar falling from heaven"
  },
  {imgName:".\\images\\wright-brand-bacon-VVtVBLKkrik-unsplash.jpg",
  imgDescription: "The Bacon!"  ,
  altText: "Bacon!"}
]




imageSlidshow()

function imageSlidshow (){
    
  const imgCarousel = document.getElementById('imgCarousel')
  const imageContainer = document.getElementById('imgContainer')
  const imgTitle = document.getElementById('imgTitle')
  const prevArrow = document.getElementById("prevArrow")
  const nextArrow = document.getElementById("nextArrow")


  let count = 0

  // makes the whole component. 
  const album = ()=>{
    console.log("thealbumcount", count)

    // creates the title and image in DOM. replaces old text+imgs
    const cardMaker = (imageInfo, cardDiv, cardId)=>{
      const titleDiv = document.createElement("div");
      titleDiv.innerText= imageInfo.imgDescription;
      titleDiv.classList.add("imageTitle");
      titleDiv.classList.add("transition");
      titleDiv.classList.add(cardId);
      titleDiv.classList.add(cardId+"Title");

      const imgDiv = document.createElement("img");
      imgDiv.src = imageInfo.imgName;
      imgDiv.setAttribute("alt",imageInfo.altText);
      imgDiv.classList.add("image");
      imgDiv.classList.add("transition");

      cardDiv.replaceChildren(titleDiv, imgDiv)
      setTimeout(()=>{imgDiv.classList.add(cardId)}, 5)
    }

    // finds correct card within pics array. passes this information to cardMaker
    const cardSelector = (count, cardId)=>{
      let index = count
      index = indexReset(index)
      const image = pics[index]
      const middleImage = document.getElementById(cardId)
      cardMaker(image,middleImage, cardId)
    }


    cardSelector(count-1, "leftCard")
    cardSelector(count, "middleCard")
    cardSelector(count+1, "rightCard")
  }

  const transitionRight = ()=>{
    let cards = [...document.getElementsByClassName("transition")]
    cards.forEach(element => {
      element.classList.add("transitionRight");
      element.classList.remove("leftCard");
    })
  }

  const transitionLeft = ()=>{
    let cards = [...document.getElementsByClassName("transition")]
    cards.forEach(element => {
      element.classList.add("transitionLeft")
      element.classList.remove("rightCard");
    })
  }

  // const removeTransition = ()=>{
  //   let left = [...document.getElementsByClassName("transitionLeft")]
  //   let right = [...document.getElementsByClassName("transitionRight")]
  //   left.forEach(element => element.classList.remove("transitionLeft"))
  //   right.forEach(element => element.classList.remove("transitionRight"))
  // }

  // keeps the count / index within bounds of the array length. allows the pics to loop, not end. 
  const indexReset = (index)=>{
    if (index > (pics.length-1)){
      index = 0
    } else if (index < 0){
      index = (pics.length-1)
    }
    return index
  }

  const dotIndex = ()=>{
    const dotsContainer = document.getElementById("dotsContainer");

    pics.forEach(element =>{
      const button = document.createElement("button")
      button.innerHTML = '<i class="fa fa-circle" aria-hidden="true"></i>';
      button.classList.add("dotButton");
      button.setAttribute("id","dot"+pics.indexOf(element))
      button.addEventListener("click", function (e){
        const dotArray = [...dotsContainer.children]
        dotArray.forEach(element => element.classList.remove("activeDotButton"))
        this.classList.add("activeDotButton")
        count = pics.indexOf(element)  
        album()
        console.log("thealbumcount", count)
      }
      )
      dotsContainer.appendChild(button)
    })
    // button> Dot Icon /<button


  }

  const highlightDots = ()=>{
    const activeDot = document.getElementById("dot"+count);
    const dotArray = [...dotsContainer.children];
    dotArray.forEach(element => element.classList.remove("activeDotButton"));
    activeDot.classList.add("activeDotButton");
  }


  prevArrow.addEventListener('click', ()=>{
    transitionRight()
    console.log("count - unadjusted", count)
    count = count-1
    count = indexReset(count)
    highlightDots()
    setTimeout(()=>{
      album();
      }, 601);
    
  }
  )

  const nextFunction = ()=>{
    transitionLeft()
    
    count = count+1
    count = indexReset(count)
    highlightDots()
    setTimeout(()=>{
      album();
      

    }, 601);
  }

  nextArrow.addEventListener('click', ()=>{
    console.log("count - unadjusted", count)
    nextFunction()  

  }
  )


  // runs album for the first time.  starts the app. 
  album()
  dotIndex()
  // setInterval(()=>nextFunction(),5000)


}


const navMenu = [{  
      title:"Breakfast",
      menuId:"menuBreakfast",
      className:"menuItemBreakfast",
      menuItems:[
        "Waffles", 
        "Pancakes", 
        "Pasteries", 
        "Yogurt"],
    },
  {
      title: "lunch",
      menuId:"menuLunch",
      className:"menuItemLunch",
      menuItems:[
        "Sandwich",
        "Salad",
        "Pizza"],
  },
  {
      title:"Dinner",
      menuId:"menuDinner",
      className:"menuItemDinner",
      menuItems:[
        "Steak", 
        "Chicken", 
        "Meatloaf", 
        "Pasta", 
        "Fish"]
  }
]

const expandMenu = (menuId, className) => {
  let menu = document.getElementById(menuId)
  let items = [...document.getElementsByClassName(className)]
  let allListItems = [...document.getElementsByTagName("li")]
  menu.addEventListener("click", ()=>{
    items.map((listItem)=>{
      
      listItem.classList.toggle("hidden")})
  })
}

// expandMenu("menuSandwich","menuItemSandwich")
// expandMenu("menuPizza","menuItemPizza")

const menuMaker = ()=>{
  navMenu.map((menu)=>{
    console.log(menu)
    let menuContainer = document.getElementById("menuContainerSide")
    let menuTitle = document.createElement("ul")
  
    menuTitle.setAttribute("id", "menuList"+menu.title)
    menuTitle.classList.add("listContainer")
    
    let menuSpan = document.createElement("span")
    menuSpan.setAttribute("id", "menuTitleSpan"+ menu.title)
    menuSpan.classList.add("menuTitle")
    menuSpan.innerText = menu.title
    menuTitle.appendChild(menuSpan)



  
    menu.menuItems.map((item)=>{
      let menuitem = document.createElement("li")
      menuitem.setAttribute("id", "item"+item)
      menuitem.classList.add("listItem")
      menuitem.classList.add("hidden")
      menuitem.classList.add("listItem"+menu.title)
      menuitem.innerText = item
      menuTitle.appendChild(menuitem)
    })

    menuContainer.appendChild(menuTitle)
  
    let items = [...document.getElementsByClassName("listItem"+menu.title)]
    console.log(items)
    menuSpan.addEventListener("click", ()=>{
      items.map((listItem)=>{
        
        listItem.classList.toggle("hidden")})
    })
  
  })


}

menuMaker()
