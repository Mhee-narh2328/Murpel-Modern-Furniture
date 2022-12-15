
import React from "react"
import * as indexStyles from '../styling/style.module.css'
import Layout from "../components/layout/layout"
import { StaticImage } from "gatsby-plugin-image"
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
    </Layout>
  );
}

export const Head = () => <title>Home Page</title>