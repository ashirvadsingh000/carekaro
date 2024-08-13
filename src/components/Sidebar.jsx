import React, { useState } from "react";
import "../assets/css/sidebar.css";
import { Link } from 'react-router-dom';
import { IoIosCloseCircle } from "react-icons/io";

const Sidebar = ({ showSidebar, toggleSideBar }) => {
  const [asideMenuState, setAsideMenuState] = useState({
    asideMenu1: false,
    asideMenu2: false,
    asideMenu3: false,
    asideMenu4: false,
    asideMenu5: false,
    asideMenu6: false,
    asideMenu7: false,
    asideMenu8: false,
    asideMenu9: false,
    asideMenu10: false,
  });

  const handleAsideMenu = (key) => {
    let temp = {};
    Object.keys(asideMenuState).forEach((k) => {
      if (key === k) {
        temp[k] = true;
      } else {
        temp[k] = false;
      }
    });

    setAsideMenuState({
      ...temp,
    });
  };

  return (
    <>
      <div
        className="aside"
        style={{ display: showSidebar ? "flex" : "none" }}
        id="aside"
      >
        <div className="aside-top">
          <a >Category</a>
          <IoIosCloseCircle
            style={{ fontSize: "40px", color: "white" }}
            onClick={toggleSideBar}
          />
        </div>

        <div className="aside-bt">
          <ol>
            <li className="aside_1">
              <span onClick={() => handleAsideMenu("asideMenu1")}>
                Most Popular Retailers
              </span>
              <div className="asidemenu_1" id="asidemenu_1" style={{display: asideMenuState["asideMenu1"] ? "flex" :"none"}}>
                <div className="item">
                  <span>
                   
                    <a > Department Store</a>
                  </span>
                  <ol>
                    <li>
                  
                      <a > <Link to="/Amazon"> Amazon</Link></a>
                    </li>
                    <li>
                     
                      <a > <Link to="/Page2">Flipkart</Link> </a>
                    </li>
                    <li>
                    
                      <a > <Link to="/Page3">Snapdeal</Link></a>
                    </li>
                    <li>
                
                      <a > <Link to="/Page4">Tata Cliq</Link></a>
                    </li>
                  </ol>
                </div>
                <div className="item">
                  <span>
                
                    <a >  Electronics</a>
                  </span>
                  <ol>
                    <li>
                      {" "}
                      <a > <Link to="/Page5"> Croma</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page6"> Samsung</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page7"> Dell</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page8"> Apple</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page9"> lenovo</Link></a>
                    </li>
                  </ol>
                </div>
                <div className="item">
                  <span>
                    {" "}
                    <a > Popular Fashion</a>
                  </span>
                  <ol>
                    <li>
                      {" "}
                      <a > <Link to="/Page10"> myntra</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page11"> H & M</Link></a>
                    </li>
                    <li>
                      {" "}
                    <a > <Link to="/Page12"> Ajio</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page13"> nykaa Fashion</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page14"> libas</Link></a>
                    </li>
                  </ol>
                </div>
                <div className="item">
                  <span>
                    {" "}
                    <a >  Health & beauty</a>
                  </span>
                  <ol>
                    <li>
                      {" "}
                      <a > <Link to="/Page15"> Mcaffeine</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page16"> Lakme india</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page17"> Nykaa</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page18"> MamaEarth</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page19"> WoW</Link></a>
                    </li>
                  </ol>
                </div>
                <div className="item">
                  <span>
                    {" "}
                    <a >  Pharmecy</a>
                  </span>
                  <ol>
                    <li>
                      {" "}
                      <a > <Link to="/Page20"> Truemeds</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page21"> 1MG</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page22"> HealthKart</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page23"> Healthians</Link></a>
                    </li>
                  </ol>
                </div>
                <div className="item">
                  <span>
                    <a > Education</a>
                  </span>
                  <ol>
                    <li>
                      {" "}
                      <a > <Link to="/Page24"> Udemy</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page25"> Edureka</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page26"> Knowledge</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page27"> Autodesk</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page28"> Aakash Neet Booster</Link></a>
                    </li>
                  </ol>
                </div>
                <div className="item">
                  <span>
                    {" "}
                    <a > Banking</a>
                  </span>
                  <ol>
                    <li>
                      {" "}
                      <a > <Link to="/Page29"> Axis MyZone Credit card</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page30"> IDFC First Credit Card</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page31"> Axis Flipkart Credit Card</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page32"> AU LIT Credit card</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page33"> Bajaj RBL Finserv</Link></a>
                    </li>
                  </ol>
                </div>
                <div className="item">
                  <span>
                    {" "}
                    <a >  Lingerie</a>
                  </span>
                  <ol>
                    <li>
                      {" "}
                      <a > <Link to="/Page34"> Clovia</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page35"> Jockey</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page36"> XYXX Crew</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page37"> Shyaway</Link></a>
                    </li>
                  </ol>
                </div>
                <div className="item">
                  <span>
                    {" "}
                    <a > Flight Offers</a>
                  </span>
                  <ol>
                    <li>
                      {" "}
                      <a > <Link to="/Page38"> Cleartrip</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page39"> EtihadAirlines</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page40"> Makemytrip</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page41"> Indigo</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page42"> Ixigo</Link></a>
                    </li>
                  </ol>
                </div>
              </div>
            </li>
            <li className="aside_2">
              <span onClick={() => handleAsideMenu("asideMenu2")}>
                Retailers By Category
              </span>
              <div className="asidemenu_1" id="asidemenu_2" style={{display: asideMenuState["asideMenu2"] ? "flex" :"none"}}>
                <div className="item">
                  <span>
                    {" "}
                    <a >  New User Offers</a>
                  </span>
                  <ol>
                    <li>
                      {" "}
                      <a > <Link to="/Page43"> Wellcome offers</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page44"> Exclusive Offers For you</Link></a>
                    </li>
                  </ol>
                </div>
                <div className="item">
                  <span>
                    {" "}
                    <a >  Fashion</a>
                  </span>
                  <ol>
                    <li>
                      {" "}
                      <a > <Link to="/Page45"> Clothing & Footwear</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page46"> Watches</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page47"> Lingerie</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page48"> Accessories & Jewellry</Link></a>
                    </li>
                  </ol>
                </div>
                <div className="item">
                  <span>
                    {" "}
                    <a >  Health & Beauty</a>
                  </span>
                  <ol>
                    <li>
                      {" "}
                      <a > <Link to="/Page49"> Beauty & Personal care</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page50"> Health Supplements</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page51">Pharmacy</Link></a>
                    </li>
                  </ol>
                </div>
                <div className="item">
                  <span>
                    {" "}
                    <a >  Travel</a>
                  </span>
                  <ol>
                    <li>
                      {" "}
                      <a > <Link to="/Page52"> Domestic Flights</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page53"> Domestic Hotels</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page54"> International hotels</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page55"> International Flights</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page56"> Car Rental</Link></a>
                    </li>
                  </ol>
                </div>
                <div className="item">
                  <span>
                    {" "}
                    <a >  Electronics</a>
                  </span>
                  <ol>
                    <li>
                      {" "}
                      <a > <Link to="/Page57"> Mobile Phone</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page58">Electronics Accessories</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page59"> TVs & Large Appliences</Link></a>
                    </li>
                  </ol>
                </div>
                <div className="item">
                  <span>
                    <a > Home & Kitchen</a>
                  </span>
                  <ol>
                    <li>
                      {" "}
                      <a > <Link to="/Page60"> Home & Kitchen Appliences</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page61"> Home & Kitchen Products</Link></a>
                    </li>
                  </ol>
                </div>
                <div className="item">
                  <span>
                    {" "}
                    <a > <Link to="/Page62"> Food & Grocery</Link></a>
                  </span>
                  <ol>
                    <li>
                      {" "}
                      <a > <Link to="/Page63">Grocery</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page64"> Food Delivery</Link></a>
                    </li>
                  </ol>
                </div>
                <div className="item">
                  <span>
                    {" "}
                    <a > More Categories</a>
                  </span>
                  <ol>
                    <li>
                      {" "}
                      <a > <Link to="/Page65"> Baby & Kids</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page66"> Banking & Finance</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page67"> Department Stores</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page68"> Domain & Hosting</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page69"> Entertainment</Link></a>
                    </li>
                  </ol>
                </div>
              </div>
            </li>
            <li className="aside_3">
              <span onClick={() => handleAsideMenu("asideMenu3")}>Top Product Deals</span>
              <div className="asidemenu_1" id="asidemenu_3" style={{display: asideMenuState["asideMenu3"] ? "flex" :"none"}}>
                <div className="item">
                  <span>
                    {" "}
                    <a > <Link to="/Page70"> Flash Deals</Link></a>
                  </span>
                  <ol>
                    <li>
                      {" "}
                      <a > <Link to="/Page"> </Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page"> </Link></a>
                    </li>
                  </ol>
                </div>
                <div className="item">
                  <span>
                    {" "}
                    <a > <Link to="/Page71"> Flipkart Top Deals</Link></a>
                  </span>
                  <ol>
                    <li>
                      {" "}
                      <a > <Link to="/Page"> </Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page"></Link></a>
                    </li>
                  </ol>
                </div>
                <div className="item">
                  <span>
                    {" "}
                    <a > <Link to="/Page72"> Amazon_Top Selling Pr..</Link></a>
                  </span>
                  <ol>
                    <li>
                      {" "}
                      <a > <Link to="/Page"></Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page"> </Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page"></Link></a>
                    </li>
                  </ol>
                </div>
                <div className="item">
                  <span>
                    {" "}
                    <a > <Link to="/Page73"> Best In Pharmacy</Link></a>
                  </span>
                  <ol>
                    <li>
                      {" "}
                      <a > <Link to="/Page"> </Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page"> </Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page"> </Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page"> </Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page"> </Link></a>
                    </li>
                  </ol>
                </div>
                <div className="item">
                  <span>
                    {" "}
                    <a > <Link to="/Page74"> Best In Finance</Link></a>
                  </span>
                  <ol>
                    <li>
                      {" "}
                      <a > <Link to="/Page"> </Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page"> </Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page"> </Link></a>
                    </li>
                  </ol>
                </div>
                <div className="item">
                  <span>
                    <a > <Link to="/Page75">Amazon-Top Deals</Link></a>
                  </span>
                  <ol>
                    <li>
                      {" "}
                      <a > <Link to="/Page"> </Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page"> </Link></a>
                    </li>
                  </ol>
                </div>
                <div className="item">
                  <span>
                    {" "}
                    <a > <Link to="/Page76"> Most selling MObile Ph..</Link></a>
                  </span>
                  <ol>
                    <li>
                      {" "}
                      <a > <Link to="/Page"></Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page"> </Link></a>
                    </li>
                  </ol>
                </div>
                <div className="item">
                  <span>
                    {" "}
                    <a > <Link to="/Page77"> Myntra-Top Deals</Link></a>
                  </span>
                  <ol>
                    <li>
                      {" "}
                      <a > <Link to="/Page"> </Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page"> </Link></a>
                    </li>
                  </ol>
                </div>
                <div className="item">
                  <span>
                    {" "}
                    <a > <Link to="/Page78">Best In Beauty</Link></a>
                  </span>
                  <ol>
                    <li>
                      {" "}
                      <a > <Link to="/Page"> </Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page"> </Link></a>
                    </li>
                  </ol>
                </div>
              </div>
            </li>
          </ol>
          <ol>
            <li className="aside_4">
              <a> <Link to="/Page79">Mobiles</Link></a>
            </li>
            <li className="aside_5">
              <a > <Link to="/Page80">Headphones</Link></a>
            </li>
            <li className="aside_6">
              <a > <Link to="/Page81">Laptops</Link></a>
            </li>
          </ol>
          <ol>
            <li className="aside_7">
              <a > <Link to="/Page82">Men Fashion</Link></a>
            </li>
            <li className="aside_8">
              <a > <Link to="/Page83">Women Fashion</Link></a>
            </li>
            <li className="aside_9">
              <a > <Link to="/Page84">Men Shoes</Link></a>
            </li>
            <li className="aside_10">
              <a > <Link to="/Page85">Women Shoes</Link></a>
            </li>
          </ol>
          <ol>
            <li className="aside_11">
              <a > <Link to="/Page86">Beauty</Link></a>
            </li>
            <li className="aside_12">
              <a > <Link to="/Page87">Grocery</Link></a>
            </li>
            <li className="aside_13">
              <a > <Link to="/Page88">Diapers</Link></a>
            </li>
            <li className="aside_14">
              <span onclick="toggleBox('asidemenu_4')">
                See All The Categories
              </span>
              <div className="asidemenu_1" id="asidemenu_4">
                <div className="item">
                  <span>
                    {" "}
                    <a > <Link to="/Page89"> Mobile Phones</Link></a>
                  </span>
                  <ol>
                    <li>
                      {" "}
                      <a > <Link to="/Page90"> Television</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page91"> Speakers</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page92">Power Banks </Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page93"> Data Storage</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page94"> View All</Link></a>
                    </li>
                  </ol>
                </div>
                <div className="item">
                  <span>
                    {" "}
                    <a > <Link to="/Page95"> Men Clothing</Link></a>
                  </span>
                  <ol>
                    <li>
                      {" "}
                      <a > <Link to="/Page96">Men T-Shirts</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page97">Men Shirts</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page98">Men Jeans & Tousers</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page99">Men Winterwear</Link></a>
                    </li>
                  </ol>
                </div>
                <div className="item">
                  <span>
                    {" "}
                    <a > <Link to="/Page100">Pet Care</Link></a>
                  </span>
                  <ol>
                    <li>
                      {" "}
                      <a > <Link to="/Page"></Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page"> </Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page"></Link></a>
                    </li>
                  </ol>
                </div>
                <div className="item">
                  <span>
                    {" "}
                    <a > <Link to="/Page101"> Kitchen Appliances & Ess..</Link></a>
                  </span>
                  <ol>
                    <li>
                      {" "}
                      <a > <Link to="/Page102"> Juicer Mixer Grinder</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page103"> Breakfast Appliance</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page104">Hand Blenders</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page105">Microwave Ovens</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page106"> View All</Link></a>
                    </li>
                  </ol>
                </div>
                <div className="item">
                  <span>
                    {" "}
                    <a > <Link to="/Page107"> Health Care & Suppleme..</Link></a>
                  </span>
                  <ol>
                    <li>
                      {" "}
                      <a > <Link to="/Page108"> Sports Supplements</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page109">Wellness Supplements </Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page"> </Link></a>
                    </li>
                  </ol>
                </div>
                <div className="item">
                  <span>
                    <a > <Link to="/Page110">Baby Products</Link></a>
                  </span>
                  <ol>
                    <li>
                      {" "}
                      <a > <Link to="/Page111">Diapers</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page112">Baby Skin Care</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page113">Bath Essentials</Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page114">Baby Wipes</Link></a>
                    </li>
                  </ol>
                </div>
                <div className="item">
                  <span>
                    {" "}
                    <a > <Link to="/Page115">View All</Link></a>
                  </span>
                  <ol>
                    <li>
                      {" "}
                      <a > <Link to="/Page"></Link></a>
                    </li>
                    <li>
                      {" "}
                      <a > <Link to="/Page"> </Link></a>
                    </li>
                  </ol>
                </div>
              </div>
            </li>
          </ol>
          <ol>
            <li className="aside_15">
              <a > <Link to="/Page116">All Stores</Link></a>
            </li>
            <li className="aside_16">
              <a > <Link to="/Page117">All Brands</Link></a>
            </li>
            <li className="aside_17">
              <a > <Link to="/Page118">All Ctegory</Link></a>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
