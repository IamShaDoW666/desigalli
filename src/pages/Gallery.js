import React from 'react'
import Top from "../components/Top"

const Gallery = () => {
   

   
    

    

    return (

        <div style={{ background: "black" }}>
          
            <Top />

            <div style={{ marginTop: "100px", padding:"30px" }}>
                <iframe src="https://www.youtube.com/embed/8KKwqW3v9eQ?autoplay=1" title="DESI GALLI" frameborder="1" width="100%" height="500px" allow="autoplay" allowfullscreen></iframe>

            </div>

            
            <div class="container">



                <div class="embedsocial-hashtag" data-ref="3b66df67e17c68870eea893271e9cb62aba408b8"></div>
            </div>
         
            <div class="row">
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <img
                        src="images/IMG_0765.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                    />

                    <img
                        src="images/IMG_0767.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Wintry Mountain Landscape"
                    />
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src="images/IMG_0769.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Mountains in the Clouds"
                    />

                    <img
                        src="images/IMG_0776.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                    />
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src="images/IMG_0781.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Waves at Sea"
                    />

                    <img
                        src="images/IMG_0771.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Yosemite National Park"
                    />
                </div>
            </div>
           

         
        </div>
        
    )
    
}

export default Gallery
