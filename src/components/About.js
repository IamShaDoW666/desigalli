import React from "react";
import Blog from "./Blog";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div class="bg_bg">
      <br>
      </br>
      <div class="title">
        {/* <i>
                <img src="images/title.png" alt="#" />
              </i> */}
      
        <div class="center">
          <a href="https://www.google.com/maps/place/Desi+Galli/@41.3836188,2.1570717,17z/data=!3m1!4b1!4m5!3m4!1s0x12a4a3f44cb0782f:0xe56629d8e6282851!8m2!3d41.3836188!4d2.1592604">
                             
            <button type="button" class="btn btn-light btn-lg btn-lg btn-outline-light"><h2>
              Location <i class="fa-solid fa-map-location-dot"></i></h2></button>
          </a>
        </div>
       
      
      </div>
      <br>
      </br>
      <div class="title">
        {/* <i>
                <img src="images/title.png" alt="#" />
              </i> */}
        <h2>About Our Food & Restaurant</h2>
        <p>
          Allow us to take you through the numerous streets of India with food carts of mouthwatering bites<br>
          </br> bringing unsatiable desire of wanting more everytime.
        </p>
      </div>
      <div class="about">
        <div class="row">

         
         
        
        </div>
        <br>
        </br>
        <div class="container">
          
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div class="about_box">
                <h3>Desi Galli</h3>
                <p>
                  India and Indian street food is a journey of culture and colours along with a lot of unforgetable experiences.
                  With Desi Galli, we would like to walk you through the streets of India bringing you explosion of flavours and nostalgia  for some, while allowing others to create new memories.
                  We are not just another Indian restaurant, we are one that reaches out to the hearts of all.{" "}
                </p>
                {/* <a href="#">
                  Read More{" "}
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a> */}
              </div>
            </div>
            <div class="col-xl-5 col-lg-5 col-md-10 col-sm-12 about_img_boxpdnt">
              <div class="about_img">
                <figure>
                  <img src="images/Vada.jpg" alt="#" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    
      <Blog />

      <section class="testimonial text-center">
        <div class="container">

          <div class="heading white-heading">
            Testimonial
            </div>
          <div id="testimonial4" class="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="3000" data-duration="4000">

            <div class="carousel-inner" role="listbox">
              <div class="carousel-item active">
                <div class="testimonial4_slide">
                  
                  <p>&#34; If you’re looking for Indian street food in Barcelona, go here.The Pav Bhaji is just like moms!It was exactly what we needed after a few days in town.The restaurants got a wonderful vibe.&#34;</p>
                  <h4>~Janam Patel</h4>
                </div>
              </div>
              <div class="carousel-item">
                <div class="testimonial4_slide">
                  <p>Visited Barcelona and felt at home here. It was decorated so cute and the food was even better. The staff is so kind and accommodating. Must stop by if you come into the city!!</p>
                  <h4>Sanam Patel</h4>
                </div>
              </div>
              <div class="carousel-item">
                <div class="testimonial4_slide">
                  {/* <img src="https://i.ibb.co/8x9xK4H/team.jpg" class="img-circle img-responsive" /> */}
                  <p>Amazing restaurant!!!! It is the best food I have eaten in Barcelona this whole trip. The service and food was impeccable. I would recommend this restaurant to everyone!!</p>
                  <h4>Sadie Kimsey</h4>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
