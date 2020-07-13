import React from "react";
import DiscordWidget from "./DiscordWidget";

const Announcements = () => {
    return (
        <div>
            <h1 className="announcement-title">Latest Announcements</h1>
            <h2 className="announcement-desc">Want to stay up-to-date on all things TOR? We have an active Discord!</h2>
            <div className="announcement-layout">
                <div className="discord-wiget">
                    <DiscordWidget />
                </div>
            </div>
        </div>
    )
}

export default Announcements