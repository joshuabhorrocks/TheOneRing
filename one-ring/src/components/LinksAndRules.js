import React from "react";

const LinksAndRules = () => {
    return (
        <div className="lar-bgi">
            <h1 className="lar-title">Links and Rules</h1>
            <h2 className="lar-desc">Your one-stop destination for all links pertaining to TOR!</h2>
            <div className="lar-layout-right">
                <div className="rules-link">
                    <h2 classname="link-title">The One Ring's Rules:</h2>
                    <h3 className="link-address">Click <a className="link-click" href="https://docs.google.com/document/d/1OYSv-N6TkRcGpn9j5H4Ci7dJ-oQDowBEIiBQF0YQNU4/edit?usp=sharing">here</a> to see the rules!</h3>
                </div>
                <div className="wiki-link">
                    <h2 classname="link-title">The Lord of the Rings Mod Wiki:</h2>
                    <h3 className="link-address">Click <a className="link-click" href="http://lotrminecraftmod.fandom.com/">here</a> to access the wiki!</h3>
                </div>
                <div className="youtube-link">
                    <h2 classname="link-title">The Server's YouTube Channel:</h2>
                    <h3 className="link-address">Click <a className="link-click" href="https://www.youtube.com/channel/UCBlwyZZMgE5nZh3qjAhUkiA">here</a> to checkout the YouTube Channel!</h3>
                </div>
            </div>
            <div className="lar-layout-left">
                <div className="forum-link">
                    <h2 classname="link-title">Server's Enjin Forums:</h2>
                    <h3 className="link-address">Click <a className="link-click" href="https://tormc.enjin.com/">here</a> to got to the forum!</h3>
                </div>
                <div className="dicord-link">
                    <h2 classname="link-title">Discord Invite Link:</h2>
                    <h3 className="link-address">Click <a className="link-click" href="https://discord.gg/wfynk26">here</a> to join the discord!</h3>
                </div>
                <div className="donate-link">
                    <h2 classname="link-title">Donation Link:</h2>
                    <h3 className="link-address">Click <a className="link-click" href="https://tormc.enjin.com/donate">here</a> to donate to the server!</h3>
                </div>
            </div>
            <div className="builds-info">
                <h2 classname="link-title">Looking to save your builds for the next reset? Click "Your Builds" on the navigation bar.</h2>
            </div>
        </div>
    )
}

export default LinksAndRules;