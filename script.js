const pics = [ 
  {imgName:".\\images\\avacado-toast-ryan-quintal.jpg",
  imgDescription: "Fresh avacado with sun ripened tomates!"  ,
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


{/* <img class ="image" src=".\images\avacado-toast-ryan-quintal.jpg"  */}
let index = 1

const displayImage = ()=>{
  let leftIndex = index-1
  let rightIndex = index +1
    
  const image = pics[index]
  const leftImage = pics[leftIndex]
  const rightImage = pics[ rightIndex]
  const mainImage = document.getElementById('mainImage')
  const prevImage = document.getElementById('prevImage')
  const nextImage = document.getElementById('nextImage')

  const titleLeft = document.getElementById('titleLeft')
  const titleCenter = document.getElementById('titleCenter')
  const titleRight = document.getElementById('titleRight')
  
  titleLeft.innerText= leftImage.imgDescription;
  titleCenter.innerText= image.imgDescription;
  titleRight.innerText = rightImage.imgDescription;

  mainImage.src = image.imgName;
  mainImage.setAttribute("alt",image.altText);
  mainImage.classList.add("singleImage");
  
  prevImage.src = leftImage.imgName;
  prevImage.setAttribute("alt",leftImage.altText);
  prevImage.classList.add("singleImage");
  
  nextImage.src = rightImage.imgName;
  nextImage.setAttribute("alt",rightImage.altText);
  nextImage.classList.add("singleImage");
}

const indexReset = ()=>{
  if (index > pics.length){
    index = 0
  } else if (index < 0){
    index = (pics.length-1)
  }
  return index
}


displayImage()

prevArrow.addEventListener('click', ()=>{
  index = index-1
  indexReset()
  displayImage()
}
)

nextArrow.addEventListener('click', ()=>{
  index = index+1
  indexReset()
  displayImage()
}
)

