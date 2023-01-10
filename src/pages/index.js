
import React,{useState} from "react"
import * as indexStyles from '../styling/style.module.css'
import {  graphql} from "gatsby"
import Layout from "../components/layout/layout"
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import Accordion from 'react-bootstrap/Accordion';
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { BsBuilding } from "react-icons/bs";

import {BsArrowRight}  from "react-icons/bs"
import { StaticImage } from "gatsby-plugin-image"

// react Bootstrap Confirguration
import "../../node_modules/react-bootstrap/dist/react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

import Seo from '../components/seo'

const Home =({data}) => {
  const [isActive, SetIsActive] = useState(false)
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
              <form>
                <input type="text" placeholder="Search.." name="search" className={indexStyles.searchInput}/>
                <button type="submit" className={indexStyles.searchButton}><AiOutlineSearch/></button>
              </form>
            </div>
            <div className= {indexStyles.dropdown}>
                  <div className={indexStyles.dropdownBtn} onClick ={(e) =>
                  SetIsActive(!isActive)}>Categories
                  <span><MdOutlineKeyboardArrowDown/></span>
                  </div>
                  {isActive && (
                      <div className={indexStyles.dropdownContent}>
                          <div className={indexStyles.dropdownItem}>
                            <div>
                              <StaticImage alt='logo' src='../images/home.png' className= {indexStyles.dropdownImage}/>
                            </div>
                            <span>House</span>
                          </div>
                          <div className={indexStyles.dropdownItem}>
                            <div>
                              <StaticImage alt='logo' src='../images/office.png' className= {indexStyles.dropdownImage}/>
                            </div>
                            <span>Office</span>
                          </div>
                          <div className={indexStyles.dropdownItem}>
                            <div>
                              <StaticImage alt='logo' src='../images/wardrobe.png' className= {indexStyles.dropdownImage}/>
                            </div>
                            <span>Wardrobe</span>
                          </div>
                          <div className={indexStyles.dropdownItem}>
                            <div>
                              <StaticImage alt='logo' src='../images/storage.png' className= {indexStyles.dropdownImage}/>
                            </div>
                            <span>Storage</span>
                          </div>
                          <div className={indexStyles.dropdownItem}>
                            <div>
                              <StaticImage alt='logo' src='../images/table.png' className= {indexStyles.dropdownImage}/>
                            </div>
                            <span>Table</span>
                          </div>
                          <div className={indexStyles.dropdownItem}>
                            <div>
                              <StaticImage alt='logo' src='../images/sofa.png' className= {indexStyles.dropdownImage}/>
                            </div>
                            <span>Sofa</span>
                          </div>
                          <div className={indexStyles.dropdownItem}>
                            <div>
                              <StaticImage alt='logo' src='../images/chair (2).png' className= {indexStyles.dropdownImage}/>
                            </div>
                            <span>Chair</span>
                          </div>
                          <div className={indexStyles.dropdownItem}>
                            <div>
                              <StaticImage alt='logo' src='../images/stand.png' className= {indexStyles.dropdownImage}/>
                            </div>
                            <span>Tv Stand </span>
                          </div>
                          <div className={indexStyles.dropdownItem}>
                            <div>
                              <StaticImage alt='logo' src='../images/wall.png' className= {indexStyles.dropdownImage}/>
                            </div>
                            <span>Wall Cladding</span>
                          </div>
                      </div>
                  )}
            </div>

            <div className= {indexStyles.dropdown}>
                  <div className={indexStyles.dropdownBtn} onClick ={(e) =>
                  SetIsActive(!isActive)}>Price
                  <span><MdOutlineKeyboardArrowDown/></span>
                  </div>
                  {isActive && (
                    <div className={indexStyles.dropdownContent}>
                      <div className={indexStyles.dropdownItem}><input type= "radio"/>Under 50,000</div>
                      <div className={indexStyles.dropdownItem}><input type= "radio"/>50,000-100,000</div>
                      <div className={indexStyles.dropdownItem}><input type= "radio"/>100,000-150,000</div>
                      <div className={indexStyles.dropdownItem}><input type= "radio"/>150,000-200,000</div>
                      <div className={indexStyles.dropdownItem}><input type= "radio"/>200,000-250,000</div>
                      <div className={indexStyles.dropdownItem}><input type= "radio"/>Over 250,000</div>
                    </div>
                  )}
            </div>
          </div>
          <div>
            <div className= {indexStyles.productImageGrid}>
              {
                data.allContentfulHomepage.nodes.map(node =>( 
                <div className= {indexStyles.productGridBox}>
                <div className= {indexStyles.productGridBoxImageCon}>
                <img 
                  alt='productImage'
                  src={ node?.productImage.url }
                  className= {indexStyles.productGridBoxImage}
                />
                </div>
                <h3 key={node.productName}>{node.productName}</h3>
                <p key={node.productParagraph}>{node.productParagraph}</p>
                  <div className= {indexStyles.productBoxGrid}>
                    <h5 key={node.productPrice}>{node.productPrice}</h5>
                    <h6>BUY NOW <span><BsArrowRight/></span></h6>
                  </div>
              </div>
                ))
            }
              
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
          <div>
          <Accordion defaultActiveKey="0" flush variant="outline-light">
            <Accordion.Item eventKey="0">
              <Accordion.Header><strong>How can I pay for my order?</strong></Accordion.Header>
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
              <Accordion.Header><strong>Can I pay by bank transfer?</strong></Accordion.Header>
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
              <Accordion.Header><strong>How will i get my order</strong></Accordion.Header>
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
export const query = graphql`
query Homepage {
  allContentfulHomepage {
    nodes {
      id
      productColor
      productDescription {
        raw
      }
      productImage {
        url
      }
      productMaterial
      productName
      productParagraph
      productPrice
      productSeatingCapacity
      productSize
    }
  }
}
`;
export default Home

export const Head = () => <Seo title="Home Page" />