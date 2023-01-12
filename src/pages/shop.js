import React,{useState} from "react"
import * as shoppingStyles from '../styling/style.module.css'
import Layout from "../components/layout/layout"
import { Link , graphql} from "gatsby"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import {BsArrowRight}  from "react-icons/bs";
import {  IoIosArrowBack,
          IoIosArrowForward} from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { StaticImage } from "gatsby-plugin-image"
// react Bootstrap Confirguration
import "../../node_modules/react-bootstrap/dist/react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

import Seo from '../components/seo'

const Shopping = ({data}) =>{
    const [isActive, SetIsActive] = useState(false)
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
            <div className= {shoppingStyles.dropdown}>
                  <div className={shoppingStyles.dropdownBtn} onClick ={(e) =>
                  SetIsActive(!isActive)}>Categories
                  <span><MdOutlineKeyboardArrowDown/></span>
                  </div>
                  {isActive && (
                      <div className={shoppingStyles.dropdownContent}>
                          <div className={shoppingStyles.dropdownItem}>
                            <div>
                              <StaticImage alt='logo' src='../images/home.png' className= {shoppingStyles.dropdownImage}/>
                            </div>
                            <span>House</span>
                          </div>
                          <div className={shoppingStyles.dropdownItem}>
                            <div>
                              <StaticImage alt='logo' src='../images/office.png' className= {shoppingStyles.dropdownImage}/>
                            </div>
                            <span>Office</span>
                          </div>
                          <div className={shoppingStyles.dropdownItem}>
                            <div>
                              <StaticImage alt='logo' src='../images/wardrobe.png' className= {shoppingStyles.dropdownImage}/>
                            </div>
                            <span>Wardrobe</span>
                          </div>
                          <div className={shoppingStyles.dropdownItem}>
                            <div>
                              <StaticImage alt='logo' src='../images/storage.png' className= {shoppingStyles.dropdownImage}/>
                            </div>
                            <span>Storage</span>
                          </div>
                          <div className={shoppingStyles.dropdownItem}>
                            <div>
                              <StaticImage alt='logo' src='../images/table.png' className= {shoppingStyles.dropdownImage}/>
                            </div>
                            <span>Table</span>
                          </div>
                          <div className={shoppingStyles.dropdownItem}>
                            <div>
                              <StaticImage alt='logo' src='../images/sofa.png' className= {shoppingStyles.dropdownImage}/>
                            </div>
                            <span>Sofa</span>
                          </div>
                          <div className={shoppingStyles.dropdownItem}>
                            <div>
                              <StaticImage alt='logo' src='../images/chair (2).png' className= {shoppingStyles.dropdownImage}/>
                            </div>
                            <span>Chair</span>
                          </div>
                          <div className={shoppingStyles.dropdownItem}>
                            <div>
                              <StaticImage alt='logo' src='../images/stand.png' className= {shoppingStyles.dropdownImage}/>
                            </div>
                            <span>Tv Stand </span>
                          </div>
                          <div className={shoppingStyles.dropdownItem}>
                            <div>
                              <StaticImage alt='logo' src='../images/wall.png' className= {shoppingStyles.dropdownImage}/>
                            </div>
                            <span>Wall Cladding</span>
                          </div>
                      </div>
                  )}
            </div>

            <div className= {shoppingStyles.dropdown}>
                  <div className={shoppingStyles.dropdownBtn} onClick ={(e) =>
                  SetIsActive(!isActive)}>Price
                  <span><MdOutlineKeyboardArrowDown/></span>
                  </div>
                  {isActive && (
                    <div className={shoppingStyles.dropdownContent}>
                      <div className={shoppingStyles.dropdownItem}><input type= "radio"/>Under 50,000</div>
                      <div className={shoppingStyles.dropdownItem}><input type= "radio"/>50,000-100,000</div>
                      <div className={shoppingStyles.dropdownItem}><input type= "radio"/>100,000-150,000</div>
                      <div className={shoppingStyles.dropdownItem}><input type= "radio"/>150,000-200,000</div>
                      <div className={shoppingStyles.dropdownItem}><input type= "radio"/>200,000-250,000</div>
                      <div className={shoppingStyles.dropdownItem}><input type= "radio"/>Over 250,000</div>
                    </div>
                  )}
            </div>
          </div>
          <div>
            <div className= {shoppingStyles.productImageGrid}>
            {
                data.allContentfulProduct.nodes.map(node =>( 
                <div className= {shoppingStyles.productGridBox}>
                <div className= {shoppingStyles.productGridBoxImageCon}>
                <img 
                  alt='productImage'
                  src={ node?.productImage.url }
                  className= {shoppingStyles.productGridBoxImage}
                />
                </div>
                <h3 key={node.productName}>{node.productName}</h3>
                <p key={node.productParagraph}>{node.productParagraph}</p>
                  <div className= {shoppingStyles.productBoxGrid}>
                    <h5 key={node.productPrice}>#{node.productPrice}</h5>
                    <Link to = {`/index/${node.id}`}><h6>BUY NOW <span><BsArrowRight/></span></h6></Link>
                  </div>
              </div>
                ))
            }      
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
export const query = graphql`
query Homepage {
allContentfulProduct{
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


  export default Shopping
  export const Head = () =><Seo title="Shop Page" />