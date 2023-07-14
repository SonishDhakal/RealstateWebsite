import { RiFacebookBoxLine, RiFileAddLine, RiFileEditLine, RiFileListLine, RiInstagramLine, RiLinkedinBoxLine, RiMoneyDollarCircleLine, RiPhoneLine, RiSearch2Line, RiStarLine, RiTwitterFill, RiTwitterLine, RiUserLine } from "react-icons/ri";
import Qatar from '../assets/quatar.png'
import airBnb from '../assets/airbnb.png'
import booking from '../assets/booking.png'
import tripAdvisor from '../assets/tripadvisor.png'
export const navLinks = [
  {
    name: "home",
    path:'/'
  },
  {
    name: "offers",
    path:'/offer'
  },

  {
    name: "buy",
    path:'/sell'
  },
  {
    name: "rent",
    path:'/rent'
  },
  {
    name: "sell",
    path:'/profile/add'
  },
];

export const sideBarLinks = [
  {
    name: "User Info",
    icon: <RiUserLine />,
    link:'/profile/info',
  },
  {
    name: "Your Listings",
    icon: <RiFileListLine />,
    link:'/profile/listings'
  },
  {
    name: "Add Listings",
    icon: <RiFileAddLine />,
    link:'/profile/add'
   
  },
  {
    name: "WatchList ",
    icon: <RiStarLine />,
    link:'/profile/watchlist'
  },

];


export const partners = [
  {
    name:'Qatar Airways',
    img:Qatar
  },
  {
    name:'Booking',
    img:booking
  },
  {
    name:'TripAdvisor',
    img:tripAdvisor
  },
  {
    name:'airBnb',
    img:airBnb
  },
]


export const how =[
  {
    icon:<RiSearch2Line className="roateImg"/>,
    title:'Search For a house',
    para:`Search for a house for a rent or to buy, read it's review and click buy now to start negoitation`,

    
  },
  {
    icon:<RiPhoneLine className="roateImg"/>,
    title:'Talk to the agents',
    para:`We will provide you the contact info of the agents, thus you can start your negoitation and fix yoru house visit date.`,

  },
  {
    icon:<RiMoneyDollarCircleLine className="roateImg"/>,
    title:'Purchase or Rent',
    para:`After your negoitation is complete, and fully satisfied make your purchase with no additional fees.`,

  },
]


export const otherLinks = [{
  name:'About us',

},
{
  name:'Terms and Conditions',

},
{
  name:'Privacy Policy',

},
{
  name:'Refund Policy',

},]


export const follow = [
  {
    name:'Facebook',
    img:<RiFacebookBoxLine />
  },
  {
    name:'instagram',
    img:<RiInstagramLine />
  },
  {
    name:'Twitter',
    img:<RiTwitterLine />
  },
  {
    name:'Linkdin',
    img:<RiLinkedinBoxLine />
  },
]