import ButtonContainer from "../Components/ButtonContainer/ButtonContainer";
import CardsContainer from "../Components/CardContainer/CardsContainer";
import Hero from "../Components/Slider/Slider"
import HeroSection from "../Components/HeroSection/HeroSection"
import NavBar from "../Components/NavBar/NavBar"

import heroimg from '../assets/images/page-heading-bg.jpg'
import villaphoto1 from '../assets/images/property-01.jpg'
import villaphoto2 from '../assets/images/property-01.jpg'
import villaphoto3 from '../assets/images/property-02.jpg'
import villaphoto4 from '../assets/images/property-03.jpg'
import villaphoto5 from '../assets/images/property-04.jpg'
import villaphoto6 from '../assets/images/property-05.jpg'

const proptitledata=[
  {subtitle:"Home / properities",maintitle:"properities"}
];


const cards=
[   
    {cardimg:villaphoto1,
        cardref:'/prop-details',
     villatype:"luxury",
     price:"$2.264.000",
     description:"18 New Street Miami, OR 972",
    
    
   },  {cardimg:villaphoto2,
    cardref:'/prop-details',
 villatype:"luxury",
 price:"$2.264.000",
 description:"18 New Street Miami, OR 972",
 

}
, {cardimg:villaphoto3,
  cardref:'/prop-details',
villatype:"luxury",
price:"$2.264.000",
description:"18 New Street Miami, OR 972",


}, {cardimg:villaphoto4,
  cardref:'/prop-details',
villatype:"luxury",
price:"$2.264.000",
description:"18 New Street Miami, OR 972",


}, {cardimg:villaphoto5,
  cardref:'/prop-details',
villatype:"luxury",
price:"$2.264.000",
description:"18 New Street Miami, OR 972",


},
{cardimg:villaphoto6,
  cardref:'/prop-details',
villatype:"luxury",
price:"$2.264.000",
description:"18 New Street Miami, OR 972",


}
];

const dealsbuttons =["Apartment","Apartment","Villa House","Penthouse"];
const Properities = () => {
  return (
    <div>
   
   <NavBar/>
   <HeroSection imgsrc={heroimg} titledata={proptitledata} />
   <ButtonContainer buttonsnames={dealsbuttons}/>
   <CardsContainer cards={cards}/>
    </div>
  )
}

export default Properities
