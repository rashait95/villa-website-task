
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import Featured from "../Components/Featured/Featured";
import HeroSection from "../Components/HeroSection/HeroSection"
import NavBar from "../Components/NavBar/NavBar"
import heroimg from '../assets/images/page-heading-bg.jpg'
import featuredImg from '../assets/images/featured.jpg'

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

const proptitledata=[
  {subtitle:"Home / single properities",maintitle:" single properities"}
];

const PropDetails = () => {
  return (
    <div>
        <NavBar/>
   <HeroSection imgsrc={heroimg} titledata={proptitledata} />
   
   <Featured data={data}
   img={featuredImg}
   info={infoAccordionData}
   titledata={titledata}/>
    </div>
  )
}

export default PropDetails
