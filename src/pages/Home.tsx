
import Hero from "../Components/Hero/Hero"
import NavBar from "../Components/NavBar/NavBar"
import img1 from "../assets/images/banner-01.jpg"
import img2 from "../assets/images/banner-02.jpg"
import img3 from  "../assets/images/banner-03.jpg"
import featuredImg from '../assets/images/featured.jpg'
import Featured from "../Components/Featured/Featured"
import Video from "../Components/Video-section/Video"
import videobg from '../assets/images/video-bg.jpg'
import videosrc from '../assets/images/video-frame.jpg'
import Counter from "../Components/Counter/Counter"
import BestDeals from "../Components/BestDeals/BestDeals"
import dealsvillaimg from '../assets/images/deal-01.jpg'
import Properities from "../Components/Properities/Properities"




const Home = () => {

  const dealsbuttons =[{btn1:"Apartment",btn2:"Villa House",btn3:"Penthouse"}];

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

const data=[
 
  {question: "Best useful links" ,answer:"  website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the Get best free CSS templates in the world. Please tell your friends about it."},
  {question: "How does this work ?" ,answer:" Dolor<strong> almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "},
  {question: " Why is Villa Agency the best ?" , answer:"   Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
];



  return (

    <>
    
    <NavBar />
    <Hero slides={slideImage}/>
    <Featured
    img={featuredImg}
     titledata={titledata}
     data={data}
     info={infoAccordionData}/>
     <Video imgsrc={videobg}  videosrc={videosrc} />
     <Counter counterdata={counterdata}/>
     <BestDeals   
     imgurl={dealsvillaimg}
     titledata={dealstitledata}
     description={dealsdescription}
     infotable={dealsinfoData}
     buttonsnames={dealsbuttons}
     />
    <Properities/>
    
    
    </>
  )
}

export default Home
