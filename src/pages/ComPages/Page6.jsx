import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../assets/css/pagesCss/page.css";
import logo2 from "../../../public/img/PagesLogo/logo2.png";
const Page6= () => {
  return (
    <>
      <Header />
      <div className="bodyContainer">
        <div className="body-item" id="bodyItem1">
      <div className="subBodyItem">
      <div className="selbody">
       <div id="sel1">
            <img src={logo2} alt="Com" />
          </div>
          <div id="sel2">
            <span>
              <a>★</a>
              <span>
                <a>★</a>
                <span>
                  <a>★</a>
                  <span>
                    <a>★</a>
                    <span>
                      <a>★</a>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
       </div>
          <h1>Flipkart Promo Codes</h1>
          <h4>'Rewardify' Get rewords on Everything</h4>
      </div>
        </div>
        <div className="body-item" id="bodyItem2">
          <h3>Upto 80% Off Across Categories + 10% Bank Discount</h3>
          <h1>+ Upto 3% Rewardify Rewards on Fashion, Beauty & more</h1>
          <p>
            Add Products To your Flipkart Cart/Wishlist/Saved For Later only after
            going via Rewadify
          </p>
          <button class="button-19">Earn UpTo 3% Rewords</button>
        </div>
        <div className="body-item" id="bodyItem3">
          <a href="">Rewards Rates</a>
          <a href="">Offer Terms</a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page6;
