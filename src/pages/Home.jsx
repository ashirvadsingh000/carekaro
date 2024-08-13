import React, { useState, useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/pagesCss/home.css'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import logo1 from "../../public/img/baby-cont/Amazon Generic-Desktop Banner-1710818434.png";
import logo2 from "../../public/img/baby-cont/The Sleep Company Desktop Banner-1710904149.png";
import logo3 from "../../public/img/baby-cont/Desktop Banner-1710531689.png";
import logo4 from "../../public/img/baby-cont/26-06-23-Desktop-IDFC-1710846641.png";
import logo5 from "../../public/img/baby-cont/Apple Desktop Banner-1710762841.png";
import logo6 from "../../public/img/baby-cont/Aqualogica Desktop Banner-1710818502.png";
import logo7 from "../../public/img/baby-cont/Desk-Starts 21st March-1710817849.png";
import logo8 from "../../public/img/baby-cont/Desktop-V1-1710904122.png";
import logo9 from "../../public/img/baby-cont/Desktop-V2-1710817879.png";
import logo10 from "../../public/img/baby-cont/Generic-Myntra Desktop Banner-1710762812.png";
import logo11 from "../../public/img/baby-cont/Muscleblaze-Desktop Banner-1710738845.png";
import logo12 from "../../public/img/baby-cont2/beauty-personal-care-offers-4206-1696592051.png";
import logo13 from "../../public/img/baby-cont2/banking-finance-offers-4684-1674023915.png";
import logo14 from "../../public/img/baby-cont2/electronics-offers-4205-1674024311.png";
import logo15 from "../../public/img/baby-cont2/fashion-offers-4199-1674024044 (1).png";
import logo16 from "../../public/img/baby-cont2/fashion-offers-4199-1674024044.png";
import logo17 from "../../public/img/baby-cont2/health-medicine-offers-4203-1674024384 (1).png";
import logo18 from "../../public/img/baby-cont2/home-kitchen-offers-4209-1674024462.png";
import logo19 from "../../public/img/baby-cont2/mobiles-phones-offers-4200-1674024134.png";
import logo20 from "../../public/img/baby-cont2/new-on-ck-4908-1674024008.png";
import logo21 from "../../public/img/baby-cont2/travel-offers-4207-1687502610.png";
import logo22 from "../../public/img/img3/img3-1.png";
import logo23 from "../../public/img/img3/img3-2.png";
import logo24 from "../../public/img/img3/img3-3.png";
import logo25 from "../../public/img/img3/img3-4.png";
import logo26 from "../../public/img/img3/img3-5.png";
import logo27 from "../../public/img/img3/img3-6.png";
import logo28 from "../../public/img/img3/img3-7.png";
import logo29 from "../../public/img/img3/img3-8.png";
import logo30 from "../../public/img/img3/img3-9.png";
import logo31 from "../../public/img/img3/img3-10.png";
import logo32 from "../../public/img/img3-2/img3-1.png";
import logo33 from "../../public/img/img3-2/img3-2.png";
import logo34 from "../../public/img/img3-2/img3-3.png";
import logo35 from "../../public/img/img3-2/img3-4.png";
import logo36 from "../../public/img/img3-2/img3-5.jpg";
import logo37 from "../../public/img/img3-2/img3-6.jpg";
import logo38 from "../../public/img/img3-2/img3-7.png";
import logo39 from "../../public/img/img3-2/img3-8.png";
import logo40 from "../../public/img/img3-2/img3-9.jpg";
import logo41 from "../../public/img/img3-2/img3-10.png";
import logo42 from "../../public/img/img4/img1.jpg";
import logo43 from "../../public/img/img4/img2.jpg";
import logo44 from "../../public/img/img4/img3.png";
import logo45 from "../../public/img/img4/img4.png";
import logo46 from "../../public/img/img4/img5.png";
import logo47 from "../../public/img/img4/img6.png";
import logo48 from "../../public/img/img4/img7.png";
import logo49 from "../../public/img/img4/img8.png";
import logo50 from "../../public/img/foodimg/img1.png";
import logo51 from "../../public/img/foodimg/img2.png";
import logo52 from "../../public/img/foodimg/img3.jpg";
import logo53 from "../../public/img/foodimg/img4.png";
import logo54 from "../../public/img/skincare/img1.png";
import logo55 from "../../public/img/skincare/img2.jpg";
import logo56 from "../../public/img/skincare/img3.png";
import logo57 from "../../public/img/skincare/img4.png";
import logo58 from "../../public/img/skincare/img5.png";
import logo59 from "../../public/img/skincare/img6.png";
import logo60 from "../../public/img/travel/img1.png";
import logo61 from "../../public/img/travel/img2.jpg";
import logo62 from "../../public/img/travel/img3.png";
import logo63 from "../../public/img/travel/img4.png";
import logo64 from "../../public/img/travel/img5.png";
import logo65 from "../../public/img/travel/img6.png";
import logo66 from "../../public/img/health/img1.jpg";
import logo67 from "../../public/img/health/img2.webp";
import logo68 from "../../public/img/health/img3.webp";
import logo69 from "../../public/img/health/img4.webp";
import logo70 from "../../public/img/health/img5.webp";
import logo71 from "../../public/img/health/img6.webp";
import logo72 from "../../public/img/health/img7.webp";
import logo73 from "../../public/img/health/img8.webp";
import logo74 from "../../public/img/footer/img1.png";
import logo75 from "../../public/img/footer/img2.png";
import logo76 from "../../public/img/footer/img3.png";
import logo77 from "../../public/img/footer/img4.png";
import logo78 from "../../public/img/footer/img5.png";
import logo79 from "../../public/img/footer/img6.png";
import logo80 from "../../public/img/footer/img7.png";

const Home = () => {  
        
      const [showScrollLeft1, setShowScrollLeft1] = useState(false);
      const [showScrollRight1, setShowScrollRight1] = useState(false);
      const [showScrollLeft2, setShowScrollLeft2] = useState(false);
      const [showScrollRight2, setShowScrollRight2] = useState(false);
      const [showScrollLeft3, setShowScrollLeft3] = useState(false);
      const [showScrollRight3, setShowScrollRight3] = useState(false);
      const [showScrollLeft4, setShowScrollLeft4] = useState(false);
      const [showScrollRight4, setShowScrollRight4] = useState(false);
      const [showScrollLeft5, setShowScrollLeft5] = useState(false);
      const [showScrollRight5, setShowScrollRight5] = useState(false);
      const [showScrollLeft6, setShowScrollLeft6] = useState(false);
      const [showScrollRight6, setShowScrollRight6] = useState(false);
      const [showScrollLeft7, setShowScrollLeft7] = useState(false);
      const [showScrollRight7, setShowScrollRight7] = useState(false);
      const [showScrollLeft8, setShowScrollLeft8] = useState(false);
      const [showScrollRight8, setShowScrollRight8] = useState(false);
      const [showScrollLeft9, setShowScrollLeft9] = useState(false);
      const [showScrollRight9, setShowScrollRight9] = useState(false);
      const [showScrollLeft10, setShowScrollLeft10] = useState(false);
      const [showScrollRight10, setShowScrollRight10] = useState(false);
    
      const containerRef1 = useRef(null);
      const containerRef2 = useRef(null);
      const containerRef3 = useRef(null);
      const containerRef4 = useRef(null);
      const containerRef5 = useRef(null);
      const containerRef6 = useRef(null);
      const containerRef7 = useRef(null);
      const containerRef8 = useRef(null);
      const containerRef9 = useRef(null);
      const containerRef10 = useRef(null);
    
      useEffect(() => {
        const handleScroll = (containerRef, setShowScrollLeft, setShowScrollRight) => {
          const container = containerRef.current;
    
          setShowScrollLeft(container.scrollLeft > 0);
          setShowScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth);
        };
    
        const containers = [
          { ref: containerRef1, setLeft: setShowScrollLeft1, setRight: setShowScrollRight1 },
          { ref: containerRef2, setLeft: setShowScrollLeft2, setRight: setShowScrollRight2 },
          { ref: containerRef3, setLeft: setShowScrollLeft3, setRight: setShowScrollRight3 },
          { ref: containerRef4, setLeft: setShowScrollLeft4, setRight: setShowScrollRight4 },
          { ref: containerRef5, setLeft: setShowScrollLeft5, setRight: setShowScrollRight5 },
          { ref: containerRef6, setLeft: setShowScrollLeft6, setRight: setShowScrollRight6 },
          { ref: containerRef7, setLeft: setShowScrollLeft7, setRight: setShowScrollRight7 },
          { ref: containerRef8, setLeft: setShowScrollLeft8, setRight: setShowScrollRight8 },
          { ref: containerRef9, setLeft: setShowScrollLeft9, setRight: setShowScrollRight9 },
          { ref: containerRef10, setLeft: setShowScrollLeft10, setRight: setShowScrollRight10 },
        ];
    
        containers.forEach(({ ref, setLeft, setRight }) => {
          const container = ref.current;
          if (container.scrollWidth > container.clientWidth) {
            setLeft(true);
            setRight(true);
          }
    
          const handleScroll = () => {
            setLeft(container.scrollLeft > 0);
            setRight(container.scrollLeft < container.scrollWidth - container.clientWidth);
          };
    
          container.addEventListener('scroll', handleScroll);
          return () => {
            container.removeEventListener('scroll', handleScroll);
          };
        });
      }, []);
    
      const handleScroll = (containerRef, direction) => {
        const scrollStep = 700; // Change this value to adjust scroll step
        const container = containerRef.current;
    
        if (container) {
          if (direction === 'left') {
            container.scrollLeft -= scrollStep;
          } else {
            container.scrollLeft += scrollStep;
          }
        }
      };






  return (
    
    <>
    <Header/>
    <div className="body_container">
        <div className="baby_container1">
            <div className="wrapper" >
            {showScrollLeft1 && <i id="left"  onClick={() => handleScroll(containerRef1, 'left')}className="fa-solid fa-angle-left" > <FaChevronLeft />
</i>}
                <ul className="carousel"   ref={containerRef1}>
                    <li className="card">
                        <div className="img"><img src={logo11} alt="img" draggable="false"/></div>

                    </li>
                    <li className="card">
                        <div className="img"><img src={logo1}
                                alt="img" draggable="false"/></div>

                    </li>
                    <li className="card">
                        <div className="img"><img src={logo2} alt="img"
                                draggable="false"/></div>

                    </li>
                    <li className="card">
                        <div className="img"><img src={logo3} alt="img"
                                draggable="false"/></div>

                    </li>
                    <li className="card">
                        <div className="img"><img src={logo4} alt="img"
                                draggable="false"/></div>

                    </li>
                    <li className="card">
                        <div className="img"><img src={logo5} alt="img"
                                draggable="false"/></div>

                    </li>
                    <li className="card">
                        <div className="img"><img src={logo6} alt="img"
                                draggable="false"/></div>

                    </li>
                    <li className="card">
                        <div className="img"><img src={logo7} alt="img"
                                draggable="false"/></div>

                    </li>
                    <li className="card">
                        <div className="img"><img src={logo8} alt="img"
                                draggable="false"/></div>

                    </li>
                    <li className="card">
                        <div className="img"><img src={logo9}
                                alt="img" draggable="false"/></div>

                    </li>
                    <li className="card">
                        <div className="img"><img src={logo10}
                                alt="img" draggable="false"/></div>

                    </li>
                </ul>
               {showScrollRight1 &&  <i id="right" onClick={() => handleScroll(containerRef1, 'right')}className="fa-solid fa-angle-right" ><FaChevronRight />
</i>}
            </div>
        </div>
        <div className="definer">
            <a href="">Top Categories</a>
            <a href="">View All-</a>
        </div>
        <div className="baby_container2">
            <div className="wrapper2" id="wrapper2">
            {showScrollLeft2 &&    <i id="left2" onClick={() => handleScroll(containerRef2, 'left')} className=" left2"><FaChevronLeft />
</i>}
                <ul className="carousel2" id="carousel2"  ref={containerRef2}>
                    <li className="card2" id="card2">
                        <div className="img2"><img src={logo12}
                                alt="img" draggable="false"/></div>

                    </li>
                    <li className="card2" id="card2">
                        <div className="img2"><img src={logo13}
                                alt="img" draggable="false"/></div>

                    </li>

                    <li className="card2" id="card1">
                        <div className="img2"><img src={logo14 } alt="hi"
                                draggable="false"/></div>

                    </li>
                    <li className="card2" id="card2">
                        <div className="img"><img src={logo15} alt="img"
                                draggable="false"/></div>

                    </li>
                    <li className="card2" id="card3">
                        <div className="img2"><img src={logo16} alt="img"
                                draggable="false"/></div>
                    </li>
                    <li className="card2" id="card4">
                        <div className="img2"><img src={logo17}
                                alt="img" draggable="false"/></div>

                    </li>
                    <li className="card2" id="card5">
                        <div className="img2"><img src={logo18}
                                alt="img" draggable="false"/></div>

                    </li>
                    <li className="card2" id="card6">
                        <div className="img2"><img src={logo19}
                                alt="img" draggable="false"/></div>

                    </li>
                    <li className="card2" id="card7">
                        <div className="img2"><img src={logo20} alt="img"
                                draggable="false"/></div>

                    </li>
                    <li className="card2" id="card8">
                        <div className="img2"><img src={logo21} alt="img"
                                draggable="false"/></div>

                    </li>
                </ul>
                {showScrollRight2 &&   <i id="right2" onClick={() => handleScroll(containerRef2, 'right')} className=" right2"> <FaChevronRight />
</i>}
            </div>
        </div>
        <div className="definer">
            <a href="">Top Cashback Stores</a>
            <a href="">View All-</a>
        </div>
        <div className="baby_container3">
            <div className="wrapper3" id="wrapper3">
            {showScrollLeft3 && <i id="left3"  onClick={() => handleScroll(containerRef3, 'left')} className="fa-solid fa-angle-left left3"><FaChevronLeft />
</i>}
                <ul className="carousel3" id="carousel3" ref={containerRef3}>
                    <li className="card3">
                        <div className="card3_1">
                            <div className="img3"><img src={logo22} alt="img"
                                    draggable="false"/></div>
                            <div className="img3-bt"><a href="">EARN UPTO 45% CASHBACK NOW</a></div>
                            <a href="">Cashback Rates & Terms</a>
                        </div>
                        <div className="card3_2">
                            <div className="img3"><img src={logo23} alt="img"
                                    draggable="false"/></div>
                            <div className="img3-bt"><a href="">EARN UPTO 45% CASHBACK NOW</a></div>
                            <a href="">Cashback Rates & Terms</a>
                        </div>
                    </li>
                    <li className="card3">
                        <div className="card3_1">
                            <div className="img3"><img src={logo24} alt="img" draggable="false"/></div>
                            <div className="img3-bt"><a href="">EARN UPTO 16% CASHBACK NOW</a></div>
                            <a href="">Cashback Rates & Terms</a>
                        </div>
                        <div className="card3_2">
                            <div className="img3"><img src={logo25} alt="img"
                                    draggable="false"/></div>
                            <div className="img3-bt"><a href="">EARN UPTO 16% CASHBACK NOW</a></div>
                            <a href="">Cashback Rates & Terms</a>
                        </div>
                    </li>
                    <li className="card3">
                        <div className="card3_1">
                            <div className="img3"><img src={logo26} alt="img"
                                    draggable="false"/></div>
                            <div className="img3-bt"><a href="">EARN UPTO 6% CASHBACK NOW</a></div>
                            <a href="">Cashback Rates & Terms</a>
                        </div>
                        <div className="card3_2">
                            <div className="img3"><img src={logo27} alt="img"
                                    draggable="false"/></div>
                            <div className="img3-bt"><a href="">EARN UPTO 6% CASHBACK NOW</a></div>
                            <a href="">Cashback Rates & Terms</a>
                        </div>
                    </li>
                    <li className="card3">
                        <div className="card3_1">
                            <div className="img3"><img src={logo28} alt="img" draggable="false"/>
                            </div>
                            <div className="img3-bt"><a href="">EARN UPTO 11% CASHBACK NOW</a></div>
                            <a href="">Cashback Rates & Terms</a>
                        </div>
                        <div className="card3_2">
                            <div className="img3"><img src={logo29}
                                    alt="img" draggable="false"/></div>
                            <div className="img3-bt"><a href="">EARN UPTO 11% CASHBACK NOW</a></div>
                            <a href="">Cashback Rates & Terms</a>
                        </div>
                    </li>
                    <li className="card3">
                        <div className="card3_1">
                            <div className="img3"><img src={logo30} alt="img"
                                    draggable="false"/></div>
                            <div className="img3-bt"><a href=""> EARN UPTO 35% CASHBACK NOW</a></div>
                            <a href="">Cashback Rates & Terms</a>
                        </div>
                        <div className="card3_2">
                            <div className="img3"><img src={logo31} alt="img" draggable="false"/></div>
                            <div className="img3-bt"><a href=""> EARN UPTO 35% CASHBACK NOW</a></div>
                            <a href="">Cashback Rates & Terms</a>
                        </div>
                    </li>
                    <li className="card3">
                        <div className="card3_1">
                            <div className="img3"><img src={logo32} alt="img"
                                    draggable="false"/></div>
                            <div className="img3-bt"><a href="">EARN UPTO 35%CASHBACK NOW</a></div>
                            <a href="">Cashback Rates & Terms</a>
                        </div>
                        <div className="card3_2">
                            <div className="img3"><img src={logo33} alt="img"
                                    draggable="false"/></div>
                            <div className="img3-bt"><a href="">EARN UPTO 35%CASHBACK NOW</a></div>
                            <a href="">Cashback Rates & Terms</a>
                        </div>
                    </li>
                    <li className="card3">
                        <div className="card3_1">
                            <div className="img3"><img src={logo34} alt="img" draggable="false"/></div>
                            <div className="img3-bt"><a href="">
                                    EARN UPTO 9% CASHBACK NOW
                                </a></div>
                            <a href="">Cashback Rates & Terms</a>
                        </div>
                        <div className="card3_2">
                            <div className="img3"><img src={logo35} alt="img" draggable="false"/>
                            </div>
                            <div className="img3-bt"><a href="">
                                    EARN UPTO 9% CASHBACK NOW
                                </a></div>
                            <a href="">Cashback Rates & Terms</a>
                        </div>
                    </li>
                    <li className="card3">
                        <div className="card3_1">
                            <div className="img3"><img src={logo36} alt="img"
                                    draggable="false"/></div>
                            <div className="img3-bt"><a href="">EARN UPTO 5% CASHBACK NOW</a></div>
                            <a href="">Cashback Rates & Terms</a>
                        </div>
                        <div className="card3_2">
                            <div className="img3"><img src={logo37} alt="img"
                                    draggable="false"/></div>
                            <div className="img3-bt"><a href="">EARN UPTO 5% CASHBACK NOW</a></div>
                            <a href="">Cashback Rates & Terms</a>
                        </div>
                    </li>
                    <li className="card3">
                        <div className="card3_1">
                            <div className="img3"><img src={logo38} alt="img"
                                    draggable="false"/></div>
                            <div className="img3-bt"><a href="">EARN UPTO 25% CASHBACK NOW</a></div>
                            <a href="">Cashback Rates & Terms</a>
                        </div>
                        <div className="card3_2">
                            <div className="img3"><img src={logo39} alt="img"
                                    draggable="false"/></div>
                            <div className="img3-bt"><a href="">EARN UPTO 25% CASHBACK NOW</a></div>
                            <a href="">Cashback Rates & Terms</a>
                        </div>
                    </li>
                    <li className="card3">
                        <div className="card3_1">
                            <div className="img3"><img src={logo40} alt="img"
                                    draggable="false"/></div>
                            <div className="img3-bt"><a href="">EARN UPTO 8% CASHBACK NOW</a></div>
                            <a href="">Cashback Rates & Terms</a>
                        </div>
                        <div className="card3_2">
                            <div className="img3"><img src={logo41} alt="img"
                                    draggable="false"/></div>
                            <div className="img3-bt"><a href="">EARN UPTO 8% CASHBACK NOW</a></div>
                            <a href="">Cashback Rates & Terms</a>
                        </div>
                    </li>
                </ul>

                {showScrollRight3 &&    <i id="right3"onClick={() => handleScroll(containerRef3, 'right')} className="fa-solid fa-angle-right right3"><FaChevronRight />
</i>}
            </div>
        </div>
        <div className="definer">
            <a href="">Top Categories</a>
            <a href="">View All-</a>
        </div>
        <div className="baby_container4">
            <div className="wrapper4" id="wrapper4">
            {showScrollLeft4 &&   <i id="left4"onClick={() => handleScroll(containerRef4, 'left')} className="fa-solid fa-angle-left left4"><FaChevronLeft />
</i>}
                <ul className="carousel4" id="carousel4"  ref={containerRef4}>
                    <li className="card4" id="card4">
                        <div className="img4"><img src={logo37} alt=""/><img
                                src={logo42} alt="img" draggable="false"/></div>
                        <div className="cardclick">
                            <button>Grab Deal</button>
                        </div>
                    </li>
                    <li className="card4" id="card4">
                        <div className="img4"><img src={logo37} alt=""/><img
                                src={logo43} alt="img" draggable="false"/></div>
                        <div className="cardclick">
                            <button>Grab Deal</button>
                        </div>
                    </li>
                    <li className="card4" id="card4">
                        <div className="img4"><img src={logo37} alt=""/><img
                                src={logo44} alt="img" draggable="false"/>
                        </div>
                        <div className="cardclick">
                            <button>Grab Deal</button>
                        </div>
                    </li>
                    <li className="card4" id="card4">
                        <div className="img4"><img src={logo37} alt=""/><img
                                src={logo45} alt="img" draggable="false"/>
                        </div>
                        <div className="cardclick">
                            <button>Grab Deal</button>
                        </div>
                    </li>
                    <li className="card4" id="card4">
                        <div className="img4"><img src={logo37} alt=""/><img
                                src={logo46} alt="img"
                                draggable="false"/></div>
                        <div className="cardclick">
                            <button>Grab Deal</button>
                        </div>
                    </li>
                    <li className="card4" id="card4">
                        <div className="img4"><img src={logo37} alt=""/><img
                                src={logo47} alt="img" draggable="false"/>
                        </div>
                        <div className="cardclick">
                            <button>Grab Deal</button>
                        </div>
                    </li>
                    <li className="card4" id="card4">
                        <div className="img4"><img src={logo37} alt=""/><img
                                src={logo48} alt="img" draggable="false"/>
                        </div>
                        <div className="cardclick">
                            <button>Grab Deal</button>
                        </div>
                    </li>

                </ul>
                {showScrollRight4 &&    <i id="right4" onClick={() => handleScroll(containerRef4, 'right')}className="fa-solid fa-angle-right right4"><FaChevronRight />
</i>}
            </div>
        </div>
        <div className="definer">
            <a href="">Dot & Key -Live</a>
            <a href="">View All-</a>
        </div>
        <div className="baby_container5">
            <div className="wrapper5" id="wrapper5">
            {showScrollLeft5 && <i onClick={() => handleScroll(containerRef5, 'left')} id="left5" className="fa-solid fa-angle-left left5"><FaChevronLeft />
</i>}
                <ul className="carousel5" id="carousel5"  ref={containerRef5}>
                    <li className="card5">
                        <div className="img5"><img src={logo49} alt="img"
                                draggable="false"/></div>
                        <div className="cardclick">
                            <button>Grab Deal</button>
                        </div>
                    </li>
                    <li className="card5">
                        <div className="img5"><img src={logo48} alt="img"
                                draggable="false"/></div>
                        <div className="cardclick">
                            <button>Grab Deal</button>
                        </div>
                    </li>
                    <li className="card5">
                        <div className="img5"><img src={logo47} alt="img"
                                draggable="false"/></div>
                        <div className="cardclick">
                            <button>Grab Deal</button>
                        </div>
                    </li>
                    <li className="card5">
                        <div className="img5"><img src={logo46} alt="img"
                                draggable="false"/></div>
                        <div className="cardclick">
                            <button>Grab Deal</button>
                        </div>
                    </li>
                    <li className="card5">
                        <div className="img5"><img src={logo45} alt="img" draggable="false"/></div>
                        <div className="cardclick">
                            <button>Grab Deal</button>
                        </div>
                    </li>
                    <li className="card5">
                        <div className="img5"><img src={logo44} alt="img" draggable="false"/></div>
                        <div className="cardclick">
                            <button>Grab Deal</button>
                        </div>
                    </li>
                    <li className="card5">
                        <div className="img5"><img src={logo43} alt="img"
                                draggable="false"/></div>
                        <div className="cardclick">
                            <button>Grab Deal</button>
                        </div>
                    </li>

                </ul>
                {showScrollRight5 && <i onClick={() => handleScroll(containerRef5, 'right')}      id="right5" className="fa-solid fa-angle-right right5"><FaChevronRight />
</i>}
            </div>
        </div>
        <div className="definer">
            <a href="">Best Food & Grocery</a>
            <a href="">View All-</a>
        </div>
        <div className="baby_container6">
            <div className="wrapper6" id="wrapper6">
            {showScrollLeft6 && <i onClick={() => handleScroll(containerRef6, 'left')}  id="left6" className="fa-solid fa-angle-left left6"><FaChevronLeft />
</i>}
                <ul className="carousel6" id="carousel6"  ref={containerRef6}>
                    <li className="card6">
                        <div className="img6"><img src={logo51} alt="img"
                                draggable="false"/></div>
                        <div className="cardclick">
                            <button>Grab Deal</button>
                        </div>
                    </li>
                    <li className="card6">
                        <div className="img6"><img src={logo52} alt="img"
                                draggable="false"/></div>
                        <div className="cardclick">
                            <button>Grab Deal</button>
                        </div>
                    </li>
                    <li className="card6">
                        <div className="img6"><img src={logo53} alt="img"
                                draggable="false"/></div>
                        <div className="cardclick">
                            <button>Grab Deal</button>
                        </div>
                    </li>
                    <li className="card6">
                        <div className="img6"><img src={logo50} alt="img"
                                draggable="false"/></div>
                        <div className="cardclick">
                            <button>Grab Deal</button>
                        </div>
                    </li>
                    <li className="card6">
                        <div className="img6"><img src={logo53} alt="img" draggable="false"/></div>
                        <div className="cardclick">
                            <button>Grab Deal</button>
                        </div>
                    </li>
                    <li className="card6">
                        <div className="img6"><img src={logo52} alt="img"
                                draggable="false"/></div>
                        <div className="cardclick">
                            <button>Grab Deal</button>
                        </div>
                    </li>

                </ul>
                {showScrollRight6 && <i onClick={() => handleScroll(containerRef6, 'right')}   id="right6" className=" right6" ><FaChevronRight />
</i>}
            </div>
        </div>
        <div className="definer">
            <a href="">Best in beauty</a>
            <a href="">View All-</a>
        </div>
        <div className="baby_container7">
            <div className="wrapper7" id="wrapper6">
            {showScrollLeft7 && <i onClick={() => handleScroll(containerRef7, 'left')} id="left7" className="fa-solid fa-angle-left left7"><FaChevronLeft />
</i>}
                <ul className="carousel7" id="carousel7"  ref={containerRef7}>
                    <li className="card7">
                        <div className="img7"><img src={logo54} alt="img" draggable="false"/>
                        </div>
                        <div className="cardclick">
                            <button>Grab Deal</button>
                        </div>
                    </li>
                    <li className="card7">
                        <div className="img7"><img src={logo55} alt="img" draggable="false"/>
                        </div>
                        <div className="cardclick">
                            <button>Grab Deal</button>
                        </div>
                    </li>
                    <li className="card7">
                        <div className="img7"><img src={logo56} alt="img"
                                draggable="false"/></div>
                        <div className="cardclick">
                            <button>Grab Deal</button>
                        </div>
                    </li>
                    <li className="card7">
                        <div className="img7"><img src={logo57} alt="img"
                                draggable="false"/></div>
                        <div className="cardclick">
                            <button>Grab Deal</button>
                        </div>
                    </li>
                    <li className="card7">
                        <div className="img7"><img src={logo58} alt="img"
                                draggable="false"/></div>
                        <div className="cardclick">
                            <button>Grab Deal</button>
                        </div>
                    </li>
                    <li className="card7">
                        <div className="img7"><img src={logo59} alt="img"
                                draggable="false"/></div>
                        <div className="cardclick">
                            <button>Grab Deal</button>
                        </div>
                    </li>

                </ul>
                {showScrollRight7 && <i onClick={() => handleScroll(containerRef7, 'right')} id="right7" className="fa-solid fa-angle-right right7"><FaChevronRight />
</i>}
            </div>
        </div>
        <div className="definer">
            <a href="">Best In Travel</a>
            <a href="">View All-</a>
        </div>
        <div className="baby_container8">
            <div className="wrapper8" id="wrapper8">
            {showScrollLeft8 && <i onClick={() => handleScroll(containerRef8, 'left')} id="left8" className="fa-solid fa-angle-left left8"><FaChevronLeft />
</i>}
                <ul className="carousel8" id="carousel8"  ref={containerRef8}>
                    <li className="card8">
                        <div className="img8"><img src={logo65} alt="img"
                                draggable="false"/></div>
                        <div className="cardclick">
                            <button>Grab Deal</button>
                        </div>
                    </li>
                    <li className=" card8">
                        <div className="img8"><img src={logo64} alt="img"
                                draggable="false"/></div>
                        <div className="cardclick">
                            <button>Grab Deal</button>
                        </div>
                    </li>
                    <li className="card8">
                        <div className="img8"><img src={logo62} alt="img"
                                draggable="false"/></div>
                        <div className="cardclick">
                            <button>Grab Deal</button>
                        </div>
                    </li>
                    <li className=" card8">
                        <div className="img8"><img src={logo63} alt="img"
                                draggable="false"/></div>
                        <div className="cardclick">
                            <button>Grab Deal</button>
                        </div>
                    </li>
                    <li className=" card8">
                        <div className="img8"><img src={logo64} alt="img"
                                draggable="false"/></div>
                        <div className="cardclick">
                            <button>Grab Deal</button>
                        </div>
                    </li>
                </ul>
                {showScrollRight8 && <i onClick={() => handleScroll(containerRef8, 'right')} id="right8" className="fa-solid fa-angle-right right8"><FaChevronRight />
</i>}
            </div>
        </div>
        <div className="definer">
            <a href="">Top selling Mobile Pnones-Live Now !</a>
            <a href="">View All-</a>
        </div>
        <div className="baby_container9">
            <div className="wrapper9" id="wrapper9">
            {showScrollLeft9 && <i onClick={() => handleScroll(containerRef9, 'left')} id="left9" className="fa-solid fa-angle-left left9"><FaChevronLeft />
</i>}
                <ul className="carousel9" id="carousel9"  ref={containerRef9}>
                    <li className="card9">
                        <a href="">Price Compared (3 Sellers)</a>
                        <div className="img9"><img src={logo66} alt="img" draggable="false"/></div>
                        <a href="">Brand:<span>Optimum nutrition</span></a>

                        <div className="cardclick">
                            <i><span>&#8377;1399 </span>&#8377;699(36% off)</i>

                            <button>+122 cashback</button>
                        </div>
                        <a href="">Final Price &#8377;645</a>
                    </li>
                    <li className=" card9">
                        <a href="">Price Compared (2 Sellers)</a>
                        <div className="img9"><img src={logo67} alt="img" draggable="false"/></div>
                        <a href="">Brand:<span>Muscle Blaze</span></a>

                        <div className="cardclick">
                            <i><span>&#8377;1399 </span>&#8377;899(36% off)</i>
                            <button>+&#8377;144 Cashback</button>
                        </div>
                        <a href="">Final Price &#8377;755</a>

                    </li>
                    <li className="card9">
                        <a href="">Price Compared (5 Sellers)</a>
                        <div className="img9"><img src={logo68} alt="img" draggable="false"/></div>
                        <a href="">Brand:<span>Optimum nutrition</span></a>
                        <div className="cardclick">
                            <span>&#8377;1719 <i>&#8377;9499</i><i>(45% off)</i></span>
                            <button>+&#8377;152 Cashback</button>
                        </div>
                        <a href="">Final Price &#8377;797</a>
                    </li>
                    <li className=" card9">
                        <a href="">Price Compared (3 Sellers)</a>
                        <div className="img9"><img src={logo69} alt="img" draggable="false"/></div>
                        <div className="cardclick">
                            <span>&#8377;1390<i>&#8377;1190</i><i>(6% off)</i></span>
                            <button>+&#8377;190 Cashback</button>
                        </div>
                        <a href="">Final Price &#8377;1000</a>
                    </li>
                    <li className=" card9">
                        <a href="">Price Compared (3 Sellers)</a>
                        <div className="img9"><img src={logo70} alt="img" draggable="false"/></div>
                        <a href="">Brand:<span>GNC</span></a>

                        <div className="cardclick">
                            <span>&#8377;5499 <i>&#8377;2999</i><i>(45% off)</i></span>
                            <button>+&#8377;480 Cashback</button>
                        </div>
                        <a href="">Final Price &#8377;2519</a>
                    </li>
                    <li className=" card9">
                        <a href="">Price Compared (2 Sellers)</a>
                        <div className="img9"><img src={logo71} alt="img" draggable="false"/></div>
                        <a href="">Brand:<span>Bolt</span></a>

                        <div className="cardclick">
                            <span>&#8377;999 <i>&#8377;899</i><i>(36% off)</i></span>
                            <button>+&#8377;160 Cashback</button>
                        </div>
                        <a href="">Final Price &#8377;839</a>
                    </li>
                    <li className=" card9">
                        <a href="">Price Compared (4 Sellers)</a>
                        <div className="img9"><img src={logo72} alt="img" draggable="false"/></div>
                        <a href="">Brand:<span>Optimum nutrition</span></a>

                        <div className="cardclick">
                            <span>&#8377;299 <i>&#8377;199</i><i>(33% off)</i></span>
                            <button>+&#8377;50 Cashback</button>
                        </div>
                        <a href="">Final Price &#8377;149</a>
                    </li>
                    <li className=" card9">
                        <a href="">Price Compared (2 Sellers)</a>
                        <div className="img9"><img src={logo73} alt="img" draggable="false"/></div>
                        <a href="">Brand:<span>YogaBar</span></a>

                        <div className="cardclick">
                            <span>&#8377;999 <i>&#8377;899</i><i>(36% off)</i></span>
                            <button>+&#8377;160 Cashback</button>
                        </div>
                        <a href="">Final Price &#8377;839</a>
                    </li>
                </ul>
                {showScrollRight9 && <i onClick={() => handleScroll(containerRef9, 'right')} id="right9" className="fa-solid fa-angle-right right9"><FaChevronRight />
</i>}
            </div>
        </div>
        <div className="baby_container10">
            <div className="wrapper10" id="wrapper10">
            {showScrollLeft10 && <i onClick={() => handleScroll(containerRef10, 'left')} id="left10" className="fa-solid fa-angle-left left10"><FaChevronLeft />
</i>}
                <ul className="carousel10" id="carousel10"  ref={containerRef10}>
                    <li className="card10">
                        <div className="img10"><img src={logo74} alt="img" draggable="false"/></div>

                        <div className="h10">
                            <h1>What is CareKaro Cuppons?</h1>
                            <p>When you visit any online site, such as Amazon or Myntra, by clicking through CareKaro
                                and make a purchase, we receive a marketing fee. We then pass on most of this fee to you
                                in the form of 'Cashback'. Easily earn Up to ₹20,000 in Cashback with just 1 extra click
                            </p>
                        </div>
                    </li>
                    <li className="card10">
                        <div className="img10"><img src={logo75} alt="img" draggable="false"/>
                        </div>

                        <div className="h10">
                            <h1>What is CareKaro Cuppons?</h1>
                            <p>When you visit any online site, such as Amazon or Myntra, by clicking through CareKaro
                                and make a purchase, we receive a marketing fee. We then pass on most of this fee to you
                                in the form of 'Cashback'. Easily earn Up to ₹20,000 in Cashback with just 1 extra click
                            </p>
                        </div>

                    </li>
                    <li className="card10">
                        <div className="img10"><img src={logo76} alt="img" draggable="false"/></div>

                        <div className="h10">
                            <h1>What is CareKaro Cuppons?</h1>
                            <p>When you visit any online site, such as Amazon or Myntra, by clicking through CareKaro
                                and make a purchase, we receive a marketing fee. We then pass on most of this fee to you
                                in the form of 'Cashback'. Easily earn Up to ₹20,000 in Cashback with just 1 extra click
                            </p>
                        </div>
                    </li>

                </ul>
                {showScrollRight10 && <i onClick={() => handleScroll(containerRef10, 'right')}    id="right10" className="fa-solid fa-angle-right right10"><FaChevronRight />
</i>}
            </div>

        </div>
        <div className="baby_container11">
            <h1>Refer Friend and earn Forever</h1>
            <a href=""><img src={logo80} alt=""/></a>
        </div>
        <div className="baby_container11">
            <h1>Refer Friend and earn Forever</h1>
           <div className="imeger">
            <a href=""><img src={logo78} alt=""/></a>
            <a href=""><img src={logo79} alt=""/></a>
            <a href=""><img src={logo77} alt=""/></a>
           </div>
        </div>
        </div>
        <div><Footer/></div>
      
    </>
  );
}

export default Home;
