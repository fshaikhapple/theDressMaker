import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import App from "../App";
import { LeStyle } from '../Components/LeStyle';
import { Trending } from '../Components/Trending';
import { Modist } from '../Components/Modist';
import { OurProducts } from '../Components/OurProducts';
import { SummerSale } from '../Components/SummerSale';
import { Testimony } from '../Components/Testimony';
import { Blog } from '../Components/Blog';
import { Services } from '../Components/Services';
import { Subscribe } from '../Components/Subscribe';
import { Footer } from '../Components/Footer';
import { top100data } from '../topPosts';

export const Home = (props) => {
    console.log("rrfProps", props);
    return (
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
    )
}