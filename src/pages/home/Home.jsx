import React from 'react';
import Banner from './Banner';
import Category from './Category';
import PopulerMenue from './PopulerMenue';
import Featured from '../Featured';
import Testimonial from '../Testimonial';
import { Helmet} from 'react-helmet-async';
import { motion, useScroll } from "framer-motion"

const Home = () => {
    const { scrollYProgress } = useScroll();
    return (
        <div>
             <motion.div style={{ scaleX: scrollYProgress }} />
             <Helmet>
            <title>Home</title>
            </Helmet> 
            <Banner></Banner>
            <Category></Category>
            <PopulerMenue></PopulerMenue>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;