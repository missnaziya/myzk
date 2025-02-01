"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import { Box, Typography, IconButton, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
  };

  const slides = [
    {
      id: 1,
      image: "/homebanner1.jpg",
    
    },
    {
      id: 2,
      image: "/homebanner2.jpg ",
     
    },
    {
      id: 3,
      image: "/img/banner.jpg",
    },
  ];

  return (
    <Box sx={{ position: "relative", maxWidth: "100%", margin: "auto", height:"auto" }}>
      <Slider {...settings} ref={sliderRef}>
        {slides.map((slide) => (
          <Box key={slide.id} sx={{ position: "relative" }}>
            <img
              src={slide.image}
              alt={`slide-${slide.id}`}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: "200px",
                left: "50%", // Move the text box to the right
                transform: "translateX(-10%)", // Adjust to fine-tune position to make it look centered at 60%
                color: "black",
                padding: "16px 24px",
                borderRadius: "8px",
                textAlign: "center",
                animationName: "captionAnimation",
                animationDuration: "2s",
                animationIterationCount: 1,
                animationTimingFunction: "ease-in-out",
                animationFillMode: "forwards",
                "@keyframes captionAnimation": {
                  "0%": {
                    transform: "translateX(100%) skewY(30deg)",
                    opacity: 0,
                  },
                  "50%": {
                    transform: "translateX(0) skewY(10deg)",
                    opacity: 0.8,
                  },
                  "100%": {
                    transform: "translateX(-10%) skewY(0deg)",
                    opacity: 1,
                  },
                },
              }}
            >
              {/* Line 1 of Caption */}
              <Typography variant="h6" sx={{ fontSize: "40px" }}>
                {/* {slide.captionLine1} */}
              </Typography>

              {/* Line 2 of Caption */}
              <Typography
                variant="h4"
                sx={{
                  fontSize: "70px",
                  fontWeight: "bold",
                  mt: 1,
                  background: "linear-gradient(90deg, #f37321, black)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {/* {slide.captionLine2} */}
              </Typography>

              {/* Shop Now Button */}
              {/* <Button
                href="/shop"
                variant="contained"
                color="primary"
                sx={{ mt: 4 }}
              >
                Shop Now
              </Button> */}
            </Box>
          </Box>
        ))}
      </Slider>

      {/* Navigation Buttons */}
      <IconButton
        onClick={() => sliderRef.current?.slickPrev()}
        sx={{
          position: "absolute",
          top: "50%",
          left: "16px",
          zIndex: 1,
          transform: "translateY(-50%)",
          color: "#fff",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton
        onClick={() => sliderRef.current?.slickNext()}
        sx={{
          position: "absolute",
          top: "50%",
          right: "16px",
          zIndex: 1,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "#fff",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default Hero;
// // *********************
// // Role of the component: Classical hero component on home page
// // Name of the component: Hero.tsx
// // Developer: Aleksandar Kuzmanovic
// // Version: 1.0
// // Component call: <Hero />
// // Input parameters: no input parameters
// // Output: Classical hero component with two columns on desktop and one column on smaller devices
// // *********************

// import Image from "next/image";
// import React from "react";

// const Hero = () => {
//   return (
//     <div className="h-[700px] w-full bg-black max-lg:h-[900px] max-md:h-[750px]">
//       <div className="grid grid-cols-3 items-center justify-items-center px-10 gap-x-10 max-w-screen-2xl mx-auto h-full max-lg:grid-cols-1 max-lg:py-10 max-lg:gap-y-10">
//         <div className="flex flex-col gap-y-5 max-lg:order-last col-span-2">
//           <h1 className="text-6xl text-white font-bold mb-3 max-xl:text-5xl max-md:text-4xl max-sm:text-3xl">
//             THE PRODUCT OF THE FUTURE
//           </h1>
//           <p className="text-white max-sm:text-sm">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor modi
//             iure laudantium necessitatibus ab, voluptates vitae ullam. Officia
//             ipsam iusto beatae nesciunt, consequatur deserunt minima maiores
//             earum obcaecati. Optio, nam!
//           </p>
//           <div className="flex gap-x-1 max-lg:flex-col max-lg:gap-y-1">
//             <button className="bg-white text-orange-600 font-bold px-12 py-3 max-lg:text-xl max-sm:text-lg hover:bg-gray-100">
//               BUY NOW
//             </button>
//             <button className="bg-white text-orange-600 font-bold px-12 py-3 max-lg:text-xl max-sm:text-lg hover:bg-gray-100">
//               LEARN MORE
//             </button>
//           </div>
//         </div>
//         <Image
//           src="/watch for banner.png"
//           width={400}
//           height={400}
//           alt="smart watch"
//           className="max-md:w-[300px] max-md:h-[300px] max-sm:h-[250px] max-sm:w-[250px] w-auto h-auto"
//         />
//       </div>
//     </div>
//   );
// };

// export default Hero;
