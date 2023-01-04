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

const imgCarousel = document.getElementById('imgCarousel')
const imageContainer = document.getElementById('imgContainer')
const imgTitle = document.getElementById('imgTitle')
const prevArrow = document.getElementById("prevArrow")
const nextArrow = document.getElementById("nextArrow")


let count = 0

// makes the whole component. 
const album = (count)=>{

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
{/* <i class="fa fa-circle" aria-hidden="true"></i> */}



  // creates each individual card. replaces old text+imgs
  const cardMaker = (imageInfo, cardDiv, cardId)=>{
    let allImages = [...document.getElementById("imgContainer").children]

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
  // finds correct card within pics. passes information to cardMaker
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
  }
  )
  
}

const transitionLeft = ()=>{
  let cards = [...document.getElementsByClassName("transition")]
  cards.forEach(element => {
    
    
    element.classList.add("transitionLeft")
    element.classList.remove("rightCard");
  })
}

const removeTransition = ()=>{
  let left = [...document.getElementsByClassName("transitionLeft")]
  let right = [...document.getElementsByClassName("transitionRight")]
  left.forEach(element => element.classList.remove("transitionLeft"))
  right.forEach(element => element.classList.remove("transitionRight"))

}

// keeps the count / index within bounds of the array length. 
const indexReset = (index)=>{
  if (index > (pics.length-1)){
    index = 0
  } else if (index < 0){
    index = (pics.length-1)
  }
  return index
}



const dotIndex = (count)=>{
  const dotsContainer = document.getElementById("dotsContainer");
  

  pics.forEach(element =>{
    const button = document.createElement("button")
    button.innerHTML = '<i class="fa fa-circle" aria-hidden="true"></i>';
    button.classList.add("dotButton");
    button.addEventListener("click", function (e){
      console.log([...dotsContainer.children])
      const dotArray = [...dotsContainer.children]
      dotArray.forEach(element => element.classList.remove("activeDotButton"))
      this.classList.add("activeDotButton")
      count = pics.indexOf(element)  
      album(count)
    }
    )
    dotsContainer.appendChild(button)
  })
  // button> Dot Icon /<button


}



prevArrow.addEventListener('click', ()=>{
  
  transitionRight()
  console.log("theCount", count)
  count = count-1
  count = indexReset(count)
  setTimeout(()=>{
    // removeTransition()
    album(count);
    }, 601);
  
}
)
const nextFunction = ()=>{
  transitionLeft()
  count = count+1
  count = indexReset(count)

  setTimeout(()=>{
    album(count);
    // removeTransition()

  }, 601);
}

nextArrow.addEventListener('click', ()=>{
  nextFunction()  
  
}
)


// runs album for the first time.  starts the app. 
album(count)
dotIndex(count)
// setInterval(()=>nextFunction(),5000)