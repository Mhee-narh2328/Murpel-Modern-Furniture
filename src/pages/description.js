import React from "react";
import * as descriptionStyles from "../styling/style.module.css";
import Layout from "../components/layout/layout";
import { StaticImage } from "gatsby-plugin-image";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "gatsby";
// react Bootstrap Configuration
import "../../node_modules/react-bootstrap/dist/react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import '../../src/styling/style.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


export default function description() {
    return (
        <Layout>
            <section>
                <div className={descriptionStyles.descriptionSection}>
                    <div className={descriptionStyles.descriptionContainer}>
                        <div>
                            <StaticImage
                                src="../images/sofa black.png"
                                className={descriptionStyles.descriptionContainerImage}
                            />
                        </div>
                        <div className={descriptionStyles.descriptionImages}>
                            <StaticImage src="../images/back.png" />
                            <StaticImage src="../images/side.png" />
                            <StaticImage src="../images/left.png" />
                        </div>
                    </div>
                    <div className={descriptionStyles.descriptionContainerContent}>
                        <h1>Hampstead Sofa</h1>
                        <p>
                            A Sectional sofa can make a great addition to your living room
                            based on your needs.{" "}
                        </p>
                        <h4>#70,000</h4>
                        <button>Contact Seller</button>
                        <div
                            className={descriptionStyles.descriptionContainerContentImages}
                        >
                            <StaticImage
                                src="../images/whatsapp.png"
                                className={descriptionStyles.descriptionContainerContentImage}
                            />
                            <StaticImage
                                src="../images/instagram.png"
                                className={descriptionStyles.descriptionContainerContentImage}
                            />
                            <StaticImage
                                src="../images/phone.png"
                                className={descriptionStyles.descriptionContainerContentImage}
                            />
                            <StaticImage
                                src="../images/gmail.png"
                                className={descriptionStyles.descriptionContainerContentImage}
                            />
                        </div>
                    </div>
                </div>
                <div className={descriptionStyles.pageDescription}>
                    <h1>Description</h1>
                    <div className={descriptionStyles.pageDescriptionBoxes}>
                        <div className={descriptionStyles.pageDescriptionBox}>
                            <StaticImage
                                src="../images/vector (3).png"
                                className={descriptionStyles.pageDescriptionBoxImage}
                            />
                            <p>Size</p>
                            <h4>172x72x65cm</h4>
                        </div>
                        <div className={descriptionStyles.pageDescriptionBox}>
                            <StaticImage
                                src="../images/paint.png"
                                className={descriptionStyles.pageDescriptionBoxImage}
                            />
                            <p>Color</p>
                            <h4>Grey</h4>
                        </div>
                        <div className={descriptionStyles.pageDescriptionBox}>
                            <StaticImage
                                src="../images/vector (4).png"
                                className={descriptionStyles.pageDescriptionBoxImage}
                            />
                            <p>Material</p>
                            <h4>OAK</h4>
                        </div>
                        <div className={descriptionStyles.pageDescriptionBox}>
                            <StaticImage
                                src="../images/office chair.png"
                                className={descriptionStyles.pageDescriptionBoxImage}
                            />
                            <p>Seating Capacity</p>
                            <h4>One</h4>
                        </div>
                    </div>
                    <div className={descriptionStyles.pageDescriptionContent}>
                        <p>
                            This Light chair will give your home a luxurious and elegant look.
                            It is a one sitter comfortable chair and it’s built with the best
                            quality luxurious materials. Please note that the oak frame may
                            have knots or grooves which is part of the natural solid oak. The
                            oak has a rustic finish which gives it an aged, timeworn
                            appearance. This one is gray in color! It highlights the classical
                            style.
                        </p>
                    </div>
                </div>

                <div className={descriptionStyles.similarProductsSection}>
                    <h2>You may also like</h2>

                    <Swiper
                        className="mySwiper"
                        spaceBetween={30}
                        loop= {"true"}
                        navigation
                        modules={[Navigation]}
                        slidesPerView={4}
                        id='box-swiper'  
                        breakpoints={{
                            320: {
                                slidesPerView: 2.2,
                                spaceBetween: 15,
                            },
                            768: {
                                slidesPerView: 3.2,
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 25,
                               
                            },
                        }}>

                        <SwiperSlide >
                        <div className={descriptionStyles.similarProducts}>
                            <div className={descriptionStyles.productGridBoxImageCon}>
                                <StaticImage
                                    alt="logo"
                                    src="../images/Table lamp.png"
                                    className={descriptionStyles.productGridBoxImage}
                                />
                            </div>
                            <h3>Table Pamp</h3>
                            <p>
                                Armchair in scandinaviaolstered with fabric Miss pattern buttons
                                legs in natural wood.
                            </p>
                            <div className={descriptionStyles.productBoxGrid}>
                                <h5>#10,000</h5>
                                <Link to="/">
                                    <h6>
                                        BUY NOW{" "}
                                        <span>
                                            <BsArrowRight />
                                        </span>
                                    </h6>
                                </Link>
                            </div>
                        </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        <div className={descriptionStyles.similarProducts}>
                            <div className={descriptionStyles.productGridBoxImageCon}>
                                <StaticImage
                                    alt="logo"
                                    src="../images/Bedside table (1).png"
                                    className={descriptionStyles.productGridBoxImage}
                                />
                            </div>
                            <h3>Bedside Table</h3>
                            <p>
                                Armchair in scandinaviaolstered with fabric Miss pattern buttons
                                legs in natural wood.
                            </p>
                            <div className={descriptionStyles.productBoxGrid}>
                                <h5>#20,000</h5>
                                <Link to="/">
                                    <h6>
                                        BUY NOW{" "}
                                        <span>
                                            <BsArrowRight />
                                        </span>
                                    </h6>
                                </Link>
                            </div>
                        </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        <div className={descriptionStyles.similarProducts}>
                            <div className={descriptionStyles.productGridBoxImageCon}>
                                <StaticImage
                                    alt="logo"
                                    src="../images/Tea table.png"
                                    className={descriptionStyles.productGridBoxImage}
                                />
                            </div>
                            <h3>Sofa Dark</h3>
                            <p>
                                Armchair in scandinaviaolstered with fabric Miss pattern buttons
                                legs in natural wood.
                            </p>
                            <div className={descriptionStyles.productBoxGrid}>
                                <h5>#20,000</h5>
                                <Link to="/">
                                    <h6>
                                        BUY NOW{" "}
                                        <span>
                                            <BsArrowRight />
                                        </span>
                                    </h6>
                                </Link>
                            </div>
                        </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        <div className={descriptionStyles.similarProducts}>
                            <div className={descriptionStyles.productGridBoxImageCon}>
                                <StaticImage
                                    alt="logo"
                                    src="../images/Chair.png"
                                    className={descriptionStyles.productGridBoxImage}
                                />
                            </div>
                            <h3>Kody Handchair</h3>
                            <p>
                                Armchair in scandinaviaolstered with fabric Miss pattern buttons
                                legs in natural wood.
                            </p>
                            <div className={descriptionStyles.productBoxGrid}>
                                <h5>#20,000</h5>
                                <Link to="/">
                                    <h6>
                                        BUY NOW{" "}
                                        <span>
                                            <BsArrowRight />
                                        </span>
                                    </h6>
                                </Link>
                            </div>
                        </div>
                        </SwiperSlide>


                        <SwiperSlide>
                        <div className={descriptionStyles.similarProducts}>
                            <div className={descriptionStyles.productGridBoxImageCon}>
                                <StaticImage
                                    alt="logo"
                                    src="../images/stool.png"
                                    className={descriptionStyles.productGridBoxImage}
                                />
                            </div>
                            <h3>Stool</h3>
                            <p>
                                Armchair in scandinaviaolstered with fabric Miss pattern buttons
                                legs in natural wood.
                            </p>
                            <div className={descriptionStyles.productBoxGrid}>
                                <h5>#20,000</h5>
                                <Link to="/">
                                    <h6>
                                        BUY NOW{" "}
                                        <span>
                                            <BsArrowRight />
                                        </span>
                                    </h6>
                                </Link>
                            </div>
                        </div>
                        </SwiperSlide>


                        <SwiperSlide>
                        <div className={descriptionStyles.similarProducts}>
                            <div className={descriptionStyles.productGridBoxImageCon}>
                                <StaticImage
                                    alt="logo"
                                    src="../images/Sofa black (1).png"
                                    className={descriptionStyles.productGridBoxImage}
                                />
                            </div>
                            <h3>Chair</h3>
                            <p>
                                Armchair in scandinaviaolstered with fabric Miss pattern buttons
                                legs in natural wood.
                            </p>
                            <div className={descriptionStyles.productBoxGrid}>
                                <h5>#20,000</h5>
                                <Link to="/">
                                    <h6>
                                        BUY NOW{" "}
                                        <span>
                                            <BsArrowRight />
                                        </span>
                                    </h6>
                                </Link>
                            </div>
                        </div>
                        </SwiperSlide>


                        <SwiperSlide>
                        <div className={descriptionStyles.similarProducts}>
                            <div className={descriptionStyles.productGridBoxImageCon}>
                                <StaticImage
                                    alt="logo"
                                    src="../images/Right.png"
                                    className={descriptionStyles.productGridBoxImage}
                                />
                            </div>
                            <h3>Soft Chair</h3>
                            <p>
                                Armchair in scandinaviaolstered with fabric Miss pattern buttons
                                legs in natural wood.
                            </p>
                            <div className={descriptionStyles.productBoxGrid}>
                                <h5>#20,000</h5>
                                <Link to="/">
                                    <h6>
                                        BUY NOW{" "}
                                        <span>
                                            <BsArrowRight />
                                        </span>
                                    </h6>
                                </Link>
                            </div>
                        </div>
                        </SwiperSlide>
                    </Swiper>

                    
                </div>
            </section>
        </Layout>
    );
}
export const Head = () => <title>Description Page</title>;
