import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import clorox from "../../../assets/ProductDetails/clorox.png";
import heart from "../../../assets/ProductDetails/heart.png";
import "./MainProdDet.css"; // Import CSS file for component styles

const MainProdDet = () => {
  const history = useHistory();
  const [showDescription, setShowDescription] = useState(false);
  const [showReturnPolicy, setShowReturnPolicy] = useState(false);
  const [showCitizenPolicy, setShowCitizenPolicy] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
    setShowReturnPolicy(false);
    setShowCitizenPolicy(false);
  };

  const toggleReturnPolicy = () => {
    setShowReturnPolicy(!showReturnPolicy);
    setShowDescription(false);
    setShowCitizenPolicy(false);
  };

  const toggleCitizenPolicy = () => {
    setShowCitizenPolicy(!showCitizenPolicy);
    setShowDescription(false);
    setShowReturnPolicy(false);
  };

  const handleAddToCart = () => {
    setShowMessage(true);
    setTimeout(() => {
      history.push("/checkout"); 
    }, 2000); 
  };

  return (
    <div className="prod_det_div">
      <div className="main_prod">
        <div className="prod_det">
          <div className="prod_breadcrumb">
            <div className="bc_first bc">Home /</div>
            <div className="bc_second bc"> Products /</div>
            <div className="bc_third bc"> Product</div>
          </div>
          <div className="prod_main">
            <div className="prod_imgs">
              <div className="prod_imgs_all">
                <div className="prod_sm_img">
                  <div className="sm_imgs">
                    <img src={clorox} alt="" />
                  </div>
                  <div className="sm_imgs">
                    <img src={clorox} alt="" />
                  </div>
                  <div className="sm_imgs">
                    <img src={clorox} alt="" />
                  </div>
                  <div className="sm_imgs">
                    <img src={clorox} alt="" />
                  </div>
                </div>
                <div className="prod_lg_img">
                  <div className="lg_img">
                    <img src={clorox} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="prod_info">
              <div className="prod_name">
                <div>
                  <h1>CLOROX WIPES</h1>
                </div>
                <div>
                  <img src={heart} alt="" />
                </div>
              </div>
              <div className="prod_price">
                <p>₹ 40.00</p>
              </div>
              <div className="prod_type">
                <div className="prod_type_btn">
                  <button type="">BLACK</button>
                </div>
                <div className="prod_type_btn">
                  <button type="">GOLD</button>
                </div>
                <div className="prod_type_btn">
                  <button type="">APOLLO</button>
                </div>
              </div>
              <div className="add_cart">
                <button type="button" onClick={handleAddToCart}>
                  ADD TO CART
                </button>
                {showMessage && (
                  <div className="custom-message">
                    <p>Taking you to checkout...</p>
                  </div>
                )}
              </div>
              <div className="prod_desc">
                <p>
                  Aliquam faucibus, odio nec commodo aliquam, neque felis
                  placerat dui, a porta ante lectus dapibus est. Aliquam a
                  bibendum mi, condimentum est. Mauris arcu odio, vestibulum
                  quis dapibus sit amet.
                </p>
              </div>
              <div className="dropdown-sections">
                <div className="dropdown">
                  <button onClick={toggleDescription} className="dropdown-button">
                    Description
                  </button>
                  {showDescription && (
                    <div className="dropdown-content">
                      <p>
                        Clorox wipes are a convenient and effective way to clean and disinfect surfaces.
                        They are specially formulated to kill 99.9% of viruses and bacteria, including
                        COVID-19 virus strains. Ideal for use on countertops, appliances, and other
                        frequently touched surfaces. Each wipe is durable and ready-to-use, making them
                        perfect for home and office use. Stock up on Clorox wipes today for a cleaner,
                        healthier environment.
                      </p>
                    </div>
                  )}
                </div>
                <div className="dropdown">
                  <button onClick={toggleReturnPolicy} className="dropdown-button">
                    Return Policy
                  </button>
                  {showReturnPolicy && (
                    <div className="dropdown-content">
                      <p>
                        We want you to be completely satisfied with your purchase. If you are not
                        satisfied for any reason, you may return the item(s) within 30 days of
                        receipt for a full refund or exchange. Items must be returned in their
                        original condition and packaging. Please contact our customer service team
                        to initiate a return or for any further assistance.
                      </p>
                    </div>
                  )}
                </div>
                <div className="dropdown">
                  <button onClick={toggleCitizenPolicy} className="dropdown-button">
                    Citizen Policy
                  </button>
                  {showCitizenPolicy && (
                    <div className="dropdown-content">
                      <p>
                        At our company, we are committed to ethical and sustainable practices. We
                        prioritize transparency, fair labor practices, and community engagement
                        across our operations. We strive to make a positive impact on the
                        environment and support initiatives that benefit our local communities. Learn
                        more about our citizen policy and how we contribute to creating a better
                        world for everyone.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProdDet;
