import React from "react"
import * as shoppingStyles from '../styling/style.module.css'
import Layout from "../components/layout/layout"
import { Link } from "gatsby"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import {BsArrowRight}  from "react-icons/bs";
import {  IoIosArrowBack,
          IoIosArrowForward} from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { StaticImage } from "gatsby-plugin-image"
// react Bootstrap Confirguration
import "../../node_modules/react-bootstrap/dist/react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

export default function Shopping() {
    return (
      <Layout>
        <section>
        <div className={shoppingStyles.productGrid}>
          <div>
          <div>
              <form>
                <input type="text" placeholder="Search.." name="search" className={shoppingStyles.searchInput}/>
                <button type="submit" className={shoppingStyles.searchButton}><AiOutlineSearch/></button>
              </form>
            </div>
            <div>
              <DropdownButton id="dropdown-basic-button" title="Categories" variant="light">
                <ul>
                  <li>
                    <Dropdown.Item href="">
                        <StaticImage alt='logo' src='../images/home.png'/>
                        <span>House</span>
                    </Dropdown.Item>
                  </li>
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
            <div className= {shoppingStyles.productImageGrid}>
              <div className= {shoppingStyles.productGridBox}>
                <div className= {shoppingStyles.productGridBoxImageCon}>
                <StaticImage alt='logo' src='../images/stool.png' className= {shoppingStyles.productGridBoxImage}/>
                </div>
                <h3>Wooden Tool</h3>
                <p>Armchair in scandinaviaolstered with fabric Miss pattern buttons legs in natural wood.</p>
                  <div className= {shoppingStyles.productBoxGrid}>
                    <h5>#20,000</h5>
                    <Link to="/description"><h6>BUY NOW <span><BsArrowRight/></span></h6></Link>
                    
                  </div>
              </div>
              <div className= {shoppingStyles.productGridBox}>
                <div className= {shoppingStyles.productGridBoxImageCon}>
                <StaticImage alt='logo' src='../images/chair.png' className= {shoppingStyles.productGridBoxImage}/>
                </div> 
                <h3>Kody Armchair</h3>
                <p>Scandinavian design upholstered with fabric Miss pattern buttons legs in natural wood.</p>
                  <div className= {shoppingStyles.productBoxGrid}>
                    <h5>#45,000</h5>
                    <h6>BUY NOW <span><BsArrowRight/></span> </h6>
                  </div>
              </div>
              <div className= {shoppingStyles.productGridBox}>
                <div className= {shoppingStyles.productGridBoxImageCon}>
                  <StaticImage alt='logo' src='../images/right.png' className= {shoppingStyles.productGridBoxImage}/>
                </div> 
                <h3>Light Chair</h3>
                <p>Armchair in scandinavian design upholstered with pattern buttons legs in natural wood.</p>
                  <div className= {shoppingStyles.productBoxGrid}>
                    <h5>#70,000</h5>
                    <h6>BUY NOW <span><BsArrowRight/></span></h6>
                  </div>
              </div>
              <div className= {shoppingStyles.productGridBox}>
                <div className= {shoppingStyles.productGridBoxImageCon}>
                <StaticImage alt='logo' src='../images/table lamp.png' className= {shoppingStyles.productGridBoxImage}/>
                </div> 
                <h3>Table Lamp</h3>
                <p>Armchair in scandinaviaolstered with fabric Miss pattern buttons legs in natural wood.</p>
                  <div className= {shoppingStyles.productBoxGrid}>
                    <h5>#15,000</h5>
                    <h6>BUY NOW <span><BsArrowRight/></span></h6>
                  </div>
              </div>
              <div className= {shoppingStyles.productGridBox}>
                <div className= {shoppingStyles.productGridBoxImageCon}>
                  <StaticImage alt='logo' src='../images/bedside table.png' className= {shoppingStyles.productGridBoxImage}/>
                </div> 
                <h3>Bedside Table</h3>
                <p>Finavian design upholstered with fabric Miss pattern buttons legs in natural wood.</p>
                  <div className= {shoppingStyles.productBoxGrid}>
                    <h5>#20,000</h5>
                    <h6>BUY NOW <span><BsArrowRight/></span></h6>
                  </div>
              </div>
              <div className= {shoppingStyles.productGridBox}>
                <div className= {shoppingStyles.productGridBoxImageCon}> 
                  <StaticImage alt='logo' src='../images/tea table.png' className= {shoppingStyles.productGridBoxImage}/>
                </div>
                <h3>Sofa Dark</h3>
                <p>Armchair in scandinaviaolstered with fabric Miss pattern buttons legs in natural wood.</p>
                  <div className= {shoppingStyles.productBoxGrid}>
                    <h5>#40,000</h5>
                    <h6>BUY NOW <span><BsArrowRight/></span></h6>
                  </div>
              </div>
              <div className= {shoppingStyles.productGridBox}>
                <div className= {shoppingStyles.productGridBoxImageCon}>
                  <StaticImage alt='logo' src='../images/chair (1).png' className= {shoppingStyles.productGridBoxImage}/>
                </div>
                <h3>Kody Armchair</h3>
                <p>Scandinavian design upholstered with fabric Miss pattern buttons legs in natural wood.</p>
                  <div className= {shoppingStyles.productBoxGrid}>
                    <h5>#45,000</h5>
                    <h6>BUY NOW <span><BsArrowRight/></span></h6>
                  </div>
              </div>
              <div className= {shoppingStyles.productGridBox}>
                <div className= {shoppingStyles.productGridBoxImageCon}>
                  <StaticImage alt='logo' src='../images/sofa black (1).png' className= {shoppingStyles.productGridBoxImage}/>
                </div> 
                <h3>Light Chair</h3>
                <p>Armchair in scandinavian design upholstered with pattern buttons legs in natural wood.</p>
                  <div className= {shoppingStyles.productBoxGrid}>
                    <h5>#70,000</h5>
                    <h6>BUY NOW <span><BsArrowRight/></span></h6>
                  </div>
              </div>
              <div className= {shoppingStyles.productGridBox}>
                <div className= {shoppingStyles.productGridBoxImageCon}>
                  <StaticImage alt='logo' src='../images/bedside table (1).png' className= {shoppingStyles.productGridBoxImage}/>
                </div>
                <h3>Bedside Table</h3>
                <p>Finavian design upholstered with fabric Miss pattern buttons legs in natural wood.</p>
                  <div className= {shoppingStyles.productBoxGrid}>
                    <h5>#20,000</h5>
                    <h6>BUY NOW <span><BsArrowRight/></span></h6>
                  </div>
              </div>
              
            </div>
          </div>
          
        </div>
        <div className={shoppingStyles.paginationButton}>
          <button><IoIosArrowBack className={shoppingStyles.paginationIcon}/></button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button><IoIosArrowForward className={shoppingStyles.paginationIcon}/></button>
        </div>
      </section>
      </Layout>
    );
  }
  export const Head = () => <title>Shopping Page</title>