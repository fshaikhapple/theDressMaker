import React, { useState, useEffect, useRef } from 'react';

// import './css/css-open-iconic-bootstrap.min.css';
import './css/css-animate.css';
// import './css/css-owl.carousel.min.css';
import './css/css-owl.theme.default.min.css';
import './css/css-magnific-popup.css';
import './css/css-aos.css';
import './css/css-ionicons.min.css';
import './css/css-bootstrap-datepicker.css';
import './css/css-jquery.timepicker.css';
// import './css/css-flaticon.css';
import './css/css-icomoon.css';
import './css/css-style.css';
// import { LetsStart } from './Components/LetsStart';
import { LeStyle } from './Components/LeStyle';
import { Trending } from './Components/Trending';
import { Modist } from './Components/Modist';
import { OurProducts } from './Components/OurProducts';
import { SummerSale } from './Components/SummerSale';
import { Testimony } from './Components/Testimony';
import { Blog } from './Components/Blog';
import { Services } from './Components/Services';
import { Subscribe } from './Components/Subscribe';
import { Footer } from './Components/Footer';
import { top100data } from './topPosts';


const App=()=> {
//   const images= top100data.map(i=>i.media_url)
//   function uniq(a) {
//     return Array.from(new Set(a));
//  }
// console.log("top 100",uniq(images))
  return (
    <div className='w-100'>
      <div>
        <LeStyle />
        <div className="goto-here"></div>
        <Trending />
        <Modist />
        <OurProducts />
        <SummerSale />
        <Testimony />
        <Blog />
        <Services />
        <Subscribe />
      </div>
    </div>
  );
}

export default App;
