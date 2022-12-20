
import React from "react"
import * as indexStyles from '../styling/style.module.css'
import Layout from "../components/layout/layout"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Accordion from 'react-bootstrap/Accordion';
// import { AiOutlineHome } from "react-icons/ai";
// import { BsBuilding } from "react-icons/bs";
import {BsArrowRight}  from "react-icons/bs"
import { StaticImage } from "gatsby-plugin-image"

// react Bootstrap Confirguration
import "../../node_modules/react-bootstrap/dist/react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

export default function Home() {
  return (
    <Layout>
      <section>
        <div className={indexStyles.heroHeader}>
          <h1>Every <span>Furniture</span> has a <br/> beautiful story</h1>
        </div>
        <div className={indexStyles.heroGrid}>
          <div>
            <StaticImage alt='logo' src='../images/Group 10152.png'/>
          </div>
          <div className={indexStyles.heroContent}>
            <p>We are the best furniture platform. We are already working on thousands of <br/> future home projects. Trust us, you will surely be satisfied.</p>
            <div  className={indexStyles.heroContentGrid}>
              <StaticImage alt='logo' src='../images/vector.png' className={indexStyles.heroContentImage} />
              <button>Shop Now</button>
              <p>Contact Us <span><StaticImage alt='logo' src='../images/vectorr.png' className={indexStyles.heroContentArrow}/></span> </p>
            </div>
          </div>
          <div>
            <StaticImage alt='' src='../images/Group 10151.png'/>
          </div>
          
        </div>
        <div className={indexStyles.serviceGrid}>
          <div className={indexStyles.serviceGridBlue}>
            <StaticImage alt='logo' src='../images/car.png' className={indexStyles.serviceGridImg}/>
            <div className={indexStyles.serviceGridContentBlue}>
                <h4>Fast Delivery</h4>
                <p>We offer you the best shopping experience of same day delivery to our customers</p>
            </div>
          </div>
          <div className={indexStyles.serviceGridRed}>
            <StaticImage alt='logo' src='../images/truck.png' className={indexStyles.serviceGridImg} />
            <div className={indexStyles.serviceGridContentRed}>
                <h4>Free Return</h4>
                <p>You can return all eligible item(s) within 15 days for Official Store</p>
            </div>
          </div>
          <div className={indexStyles.serviceGridYellow}>
            <StaticImage alt='logo' src='../images/support.png' className={indexStyles.serviceGridImg} />
            <div className={indexStyles.serviceGridContentYellow}>
                <h4>24/7 Support</h4>
                <p>We are here to ensure our customers' success and business productivity</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={indexStyles.productGrid}>
          <div>
            <div>
              <DropdownButton id="dropdown-basic-button" title="Categories" variant="light">
                <ul>
                  <li><Dropdown.Item href="">Home</Dropdown.Item></li>
                  <li><Dropdown.Item href="">Office</Dropdown.Item></li>
                  <li><Dropdown.Item href="">Wardrobe</Dropdown.Item></li>
                  <li><Dropdown.Item href="">Storage</Dropdown.Item></li>
                  <li><Dropdown.Item href="">Table</Dropdown.Item></li>
                  <li><Dropdown.Item href="">Sofa</Dropdown.Item></li>
                  <li><Dropdown.Item href="">Chair</Dropdown.Item></li>
                  <li><Dropdown.Item href="">Tv Stand</Dropdown.Item></li>
                  <li><Dropdown.Item href="">Wall cladding</Dropdown.Item></li>
                </ul>
              </DropdownButton>
            </div>
            <div>
              <DropdownButton id="dropdown-basic-button" title="Price" variant="light">
                <ul>
                  <li><Dropdown.Item href=""><input type= "radio"/>Under 50,000</Dropdown.Item></li>
                  <li><Dropdown.Item href=""><input type= "radio"/>50,000-100,000</Dropdown.Item></li>
                  <li><Dropdown.Item href=""><input type= "radio"/>100,000-150,000</Dropdown.Item></li>
                  <li><Dropdown.Item href=""><input type= "radio"/>150,000-200,000</Dropdown.Item></li>
                  <li><Dropdown.Item href=""><input type= "radio"/>200,000-250,000</Dropdown.Item></li>
                  <li><Dropdown.Item href=""><input type= "radio"/>Over 250,000</Dropdown.Item></li>
                </ul>
              </DropdownButton>
            </div>
          </div>
          <div>
            <div className= {indexStyles.productImageGrid}>
              <div className= {indexStyles.productGridBox}>
                <div className= {indexStyles.productGridBoxImageCon}>
                <StaticImage alt='logo' src='../images/stool.png' className= {indexStyles.productGridBoxImage}/>
                </div>
                <h3>Wooden Tool</h3>
                <p>Armchair in scandinaviaolstered with fabric Miss pattern buttons legs in natural wood.</p>
                  <div className= {indexStyles.productBoxGrid}>
                    <h5>#20,000</h5>
                    <h6>BUY NOW <span><BsArrowRight/></span></h6>
                  </div>
              </div>
              <div className= {indexStyles.productGridBox}>
                <div className= {indexStyles.productGridBoxImageCon}>
                <StaticImage alt='logo' src='../images/chair.png' className= {indexStyles.productGridBoxImage}/>
                </div> 
                <h3>Kody Armchair</h3>
                <p>Scandinavian design upholstered with fabric Miss pattern buttons legs in natural wood.</p>
                  <div className= {indexStyles.productBoxGrid}>
                    <h5>#45,000</h5>
                    <h6>BUY NOW <span><BsArrowRight/></span> </h6>
                  </div>
              </div>
              <div className= {indexStyles.productGridBox}>
                <div className= {indexStyles.productGridBoxImageCon}>
                  <StaticImage alt='logo' src='../images/sofa black.png' className= {indexStyles.productGridBoxImage}/>
                </div> 
                <h3>Light Chair</h3>
                <p>Armchair in scandinavian design upholstered with pattern buttons legs in natural wood.</p>
                  <div className= {indexStyles.productBoxGrid}>
                    <h5>#70,000</h5>
                    <h6>BUY NOW <span><BsArrowRight/></span></h6>
                  </div>
              </div>
              <div className= {indexStyles.productGridBox}>
                <div className= {indexStyles.productGridBoxImageCon}>
                <StaticImage alt='logo' src='../images/table lamp.png' className= {indexStyles.productGridBoxImage}/>
                </div> 
                <h3>Table Lamp</h3>
                <p>Armchair in scandinaviaolstered with fabric Miss pattern buttons legs in natural wood.</p>
                  <div className= {indexStyles.productBoxGrid}>
                    <h5>#15,000</h5>
                    <h6>BUY NOW <span><BsArrowRight/></span></h6>
                  </div>
              </div>
              <div className= {indexStyles.productGridBox}>
                <div className= {indexStyles.productGridBoxImageCon}>
                  <StaticImage alt='logo' src='../images/bedside table.png' className= {indexStyles.productGridBoxImage}/>
                </div> 
                <h3>Bedside Table</h3>
                <p>Finavian design upholstered with fabric Miss pattern buttons legs in natural wood.</p>
                  <div className= {indexStyles.productBoxGrid}>
                    <h5>#20,000</h5>
                    <h6>BUY NOW <span><BsArrowRight/></span></h6>
                  </div>
              </div>
              <div className= {indexStyles.productGridBox}>
                <div className= {indexStyles.productGridBoxImageCon}> 
                  <StaticImage alt='logo' src='../images/tea table.png' className= {indexStyles.productGridBoxImage}/>
                </div>
                <h3>Sofa Dark</h3>
                <p>Armchair in scandinaviaolstered with fabric Miss pattern buttons legs in natural wood.</p>
                  <div className= {indexStyles.productBoxGrid}>
                    <h5>#40,000</h5>
                    <h6>BUY NOW <span><BsArrowRight/></span></h6>
                  </div>
              </div>
              <div className= {indexStyles.productGridBox}>
                <div className= {indexStyles.productGridBoxImageCon}>
                  <StaticImage alt='logo' src='../images/chair (1).png' className= {indexStyles.productGridBoxImage}/>
                </div>
                <h3>Kody Armchair</h3>
                <p>Scandinavian design upholstered with fabric Miss pattern buttons legs in natural wood.</p>
                  <div className= {indexStyles.productBoxGrid}>
                    <h5>#45,000</h5>
                    <h6>BUY NOW <span><BsArrowRight/></span></h6>
                  </div>
              </div>
              <div className= {indexStyles.productGridBox}>
                <div className= {indexStyles.productGridBoxImageCon}>
                  <StaticImage alt='logo' src='../images/sofa black (1).png' className= {indexStyles.productGridBoxImage}/>
                </div> 
                <h3>Light Chair</h3>
                <p>Armchair in scandinavian design upholstered with pattern buttons legs in natural wood.</p>
                  <div className= {indexStyles.productBoxGrid}>
                    <h5>#70,000</h5>
                    <h6>BUY NOW <span><BsArrowRight/></span></h6>
                  </div>
              </div>
              <div className= {indexStyles.productGridBox}>
                <div className= {indexStyles.productGridBoxImageCon}>
                  <StaticImage alt='logo' src='../images/bedside table (1).png' className= {indexStyles.productGridBoxImage}/>
                </div>
                <h3>Bedside Table</h3>
                <p>Finavian design upholstered with fabric Miss pattern buttons legs in natural wood.</p>
                  <div className= {indexStyles.productBoxGrid}>
                    <h5>#20,000</h5>
                    <h6>BUY NOW <span><BsArrowRight/></span></h6>
                  </div>
              </div>
              
            </div>
            <div className= {indexStyles.productGridButton}>
                <button>View more</button>
            </div>
          </div>
          
        </div>
      </section>
      <section>
        <div className={indexStyles.designGrid}>
          <div>
            <StaticImage  src='../images/Group 35260.png' />
          </div>
          <div className={indexStyles.designGridContent}>
            <h5>Designing Modern, Unique & <span>Smart Furniture</span> </h5>
            <p>Unique furniture makes a statement. With modern furniture design, you can transform a space in ways that wall art can’t. If you want to impress your guests, eye-catching furniture will have a bigger impact.</p>
            <p>There isn’t a rule that says you can’t use unique furniture in a living room, dining room, or home office. However, such furniture is relegated to game rooms or backyard areas.</p>
          </div>
        </div>
      </section>
      <section>
        <div className= {indexStyles.accordionContainer}>
          <h1>Frequently Asked <span>Questions</span> (FAQs)</h1>
          <div className= {indexStyles.accordion}>
          <Accordion variant="outline-light">
            <Accordion.Item eventKey="0">
              <Accordion.Header>How can I pay for my order?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Can I pay by bank transfer?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>How will i get my order</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
}
export const Head = () => <title>Home Page</title>