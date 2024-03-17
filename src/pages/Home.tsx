import NavBar from "../Components/NavBar/NavBar"
import img1 from "../assets/images/banner-01.jpg"
import img2 from "../assets/images/banner-02.jpg"
import img3 from  "../assets/images/banner-03.jpg"
import featuredImg from '../assets/images/featured.jpg'
import Featured from "../Components/Featured/Featured"
import videobg from '../assets/images/video-bg.jpg'
import videosrc from '../assets/images/video-frame.jpg'
import Counter from "../Components/Counter/Counter"
import BestDeals from "../Components/BestDeals/BestDeals"
import dealsvillaimg from '../assets/images/deal-01.jpg'
import Properities from "../Components/Properities/Properities"
import villaphoto1 from '../assets/images/property-01.jpg'
import villaphoto2 from '../assets/images/property-01.jpg'
import villaphoto3 from '../assets/images/property-02.jpg'
import villaphoto4 from '../assets/images/property-03.jpg'
import villaphoto5 from '../assets/images/property-04.jpg'
import villaphoto6 from '../assets/images/property-05.jpg'
import CardsContainer from "../Components/CardContainer/CardsContainer"
import VideoFrame from "../Components/Video-section/VideoFrame"
import contactimg from '../assets/images/contact-bg.jpg'
import ContactSection from "../Components/ContactSection/ContactSection"
import Slider from "../Components/Slider/Slider"

 
const videotitledata=[
  {subtitle:"| Video View",maintitle:"Get Closer View & Different Feeling"}
];

const gpssrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth";

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


const propdata =[
  {subtitle:"| Properties",maintitle:"We Provide The Best Property You Like"}
];


const labels=["Full Name" ,"Email","Subject","Message"];





const Home = () => {

  const dealsbuttons =["Apartment","Villa House","Penthouse"];

  const dealstitledata=[
    {subtitle:"|Featured",maintitle:"Best Appartment & Sea view"}
  ];

  
  const dealsinfoData=[
    { title:"250 m2",desc:" Total Flat Space"},
    {title:"250 m2",desc:" Total Flat Space"},
    {
      title:"250 m2",desc:" Total Flat Space"},
    {title:"250 m2",desc:" Total Flat Space"}
  ];
  
  
  const dealsdescription=[{title:"Extra Info About Property",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendiss"
  }];
  
  const counterdata=[
    {timer:"34",text1:"Buildings",text2:"Finished Now"},
    {timer:"12",text1:"Buildings",text2:"Finished Now"},
    {timer:"25",text1:"Buildings",text2:"Finished Now"}
  
  ];

const slideImage=
[{url:img1 ,title :" Toront ,  Canada" ,description :"Hurry! Get the Best Villa for you"},
  {url:img2, title :"Malbourne ,Australia" ,description :"Be Quick!Get the best villa in town"},
  {url:img3 , title :"Miami ,Australia",description :"Act Now!Get the highest level penthouse"}
];





const infoAccordionData=[
  { imgurl:"../src/assets/images/info-icon-01.png" ,title:"250 m2",desc:" Total Flat Space"},
  {imgurl:"../src/assets/images/info-icon-02.png" ,title:"250 m2",desc:" Total Flat Space"},
  {imgurl:"../src/assets/images/info-icon-03.png" ,title:"250 m2",desc:" Total Flat Space"},
  {imgurl:"../src/assets/images/info-icon-04.png" ,title:"250 m2",desc:" Total Flat Space"}
];

const titledata=[
  {subtitle:"|Featured",maintitle:"Best Appartment & Sea view"}
];

const contactdata=[
  {subtitle:"|Featured",maintitle:"Best Appartment & Sea view"}
];

const data=[
 
  {question: "Best useful links" ,answer:"  website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the Get best free CSS templates in the world. Please tell your friends about it."},
  {question: "How does this work ?" ,answer:" Dolor<strong> almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "},
  {question: " Why is Villa Agency the best ?" , answer:"   Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
];



  return (

    <>
    
    <NavBar />
    <Slider slides={slideImage}/>
    <Featured
    img={featuredImg}
     titledata={titledata}
     data={data}
     info={infoAccordionData}/>
     <VideoFrame imgsrc={videobg} videosrc={videosrc} videotitledata={videotitledata} />
     <Counter counterdata={counterdata}/>
     <BestDeals   
     imgurl={dealsvillaimg}
     titledata={dealstitledata}
     description={dealsdescription}
     infotable={dealsinfoData}
     buttonsnames={dealsbuttons}
     />
    <Properities propsdata={propdata}/>
    <CardsContainer cards={cards}/>
    <ContactSection contactdata={contactdata}
    contactimg={contactimg}
    gpssrc={gpssrc}
    labels={labels}/>
    
    
    </>
  )
}

export default Home
