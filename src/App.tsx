import React from 'react';
import './App.css';
import MainLayout from "./layouts/MainLayout/MainLayout";
import MainPage from "./pages/MainPage";
import {Route, Routes} from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import LoginPage from "./pages/LoginPage";
import ComputerGoodsPage from "./pages/ComputerGoodsPage";
import UserPage from "./pages/UserPage";
import AuthorizedPage from "./pages/AuthorizedPage";
import BasketPage from "./pages/BasketPage";
import NotLoginPage from "./pages/NotLoginPage";
import PhonesGoodsPage from "./pages/PhonesGoodsPage";
import HeadphonesGoodsPage from "./pages/HeadphonesGoodsPage";
import HouseholdAppliancesGoodsPage from "./pages/HouseholdAppliancesGoodsPage";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={''} element={<MainLayout/>}>
          <Route index element={<MainPage/>} />
          <Route path={'/signIn'} element={<LoginPage/>}/>
          <Route path={'/auth'} element={<AuthPage/>}/>
            <Route path={'/computers'} element={<ComputerGoodsPage/>}/>
          <Route path={'/phones'} element={<PhonesGoodsPage/>}/>
          <Route path={'/headphones'} element={<HeadphonesGoodsPage/>}/>
          <Route path={'/houseHold'} element={<HouseholdAppliancesGoodsPage/>}/>

            <Route path={'/user'} element={<UserPage/>}/>
          <Route path={'/authorized'} element={<AuthorizedPage/>}/>
          <Route path={'/basket'} element={<BasketPage/>}/>
          <Route path={'/notLogin'} element={<NotLoginPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
