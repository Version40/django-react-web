import React from 'react';
import Header from "./components/Header/Header";
import Films from "./components/Films/Films";
import AllItems from "./components/All_items/AllItems";
import Serials from "./components/Serials/Serials";
import DescMain from "./components/Description_main_page/Desc_main";
import Footer from "./components/Footer/Footer";

const MainPage = () => {
    return (
        <div>
            <Header></Header>
            <Films></Films>
            <AllItems></AllItems>
            <Serials></Serials>
            <DescMain></DescMain>
            <Footer></Footer>
        </div>
    );
};

export default MainPage;