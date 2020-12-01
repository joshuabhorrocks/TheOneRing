import React from "react";
import ReactPlayer from "react-player";

const Home = () => {
    return (
        <div>
            <h1 className="home-title">Welcome to the Official Site for The One Ring Minecraft Server!</h1>
            <h2 className="home-ip">IP: torlotr.com</h2>
            <div className="home-video">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=7I8Osweq4BQ"
                />
            </div>
            <div className="home-faq">
                <div className="home-faq-1">
                    <h1 className="home-faq-what">What is The One Ring Server?</h1>
                    <h2 className="home-faq-what-a">The One Ring is a Minecraft Server that runs The Lord of the Rings Minecraft Mod. First opened in April of 2014, The One Ring has continued to thrive for years under several great owners, assisted by diligent staff. The One Ring family boasts seasoned veterans and new players alike, all of whom contribute to dot the landscapes of Middle-Earth with impressive fortresses, friendly (and not-so-friendly) trading hubs, and so much more!</h2>
                </div>
                <div className="home-faq-2">
                    <h1 className="home-faq-how">How Can I Join?</h1>
                    <h2 className="home-faq-how-a">The first thing you'll need is the latest version of The Lord of the Rings Minecraft Mod: Bringing Middle-Earth to Minecraft mod. To find the latest version, go to <a className="home-wiki-link" href="http://lotrminecraftmod.fandom.com/">Lord of the Rings Wiki</a> and scroll down until you see the download link on the right-hand side. Install the mod using Forge and you're set to join!</h2>
                </div>
                <div className="home-faq-3">
                    <h1 className="home-faq-ip">What's the Address?</h1>
                    <h2 className="home-faq-ip-a">The IP address is: torlotr.com</h2>
                </div>
            </div>
            <div className="home-soon">
                <h1 className="home-see">See you around the server!</h1>
            </div>
            <div className="copyright">
                <p className="copy-top">© The One Ring Minecraft Server 2020</p> 
                <p className="copy-bottom">© Website created by TheWitchKing 2020</p>
            </div>
        </div>
    )
}

export default Home;