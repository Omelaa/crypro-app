import {Link} from "react-router-dom";
import {Space, Typography} from "antd";
import {Route, Routes} from "react-router";

import "./App.css";

import {Cryptocurrencies, CryptoDetails, Exchanges, HomePage, Navbar, News} from "./components";

function App() {

    return (
        <div className={"app"}>
            <div className={"navbar"}>
                <Navbar/>
            </div>
            <div className={"main"}>
                <div className={'routes'}>
                    <Routes>
                        <Route path={'/'} element={<HomePage/>}/>
                        <Route path={'/exchanges'} element={<Exchanges/>}/>
                        <Route path={'/cryptocurrencies'} element={<Cryptocurrencies/>}/>
                        <Route path={'/crypto/:coinId'} element={<CryptoDetails/>}/>
                        <Route path={'/news'} element={<News/>}/>
                    </Routes>
                </div>
                <div className={"footer"}>
                    <Typography.Title level={5} style={{color: "white", textAlign: 'center'}}>
                        Cryptoverse <br/>
                        All rights reserved
                    </Typography.Title>
                    <Space>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/exchanges"}>Exchanges</Link>
                        <Link to={"/news"}>News</Link>
                    </Space>
                </div>
            </div>
        </div>
    );
}

export default App;
