import React from "react";
import DiscordWidget from "./DiscordWidget";
import phoenixPic from "../media/phone.jpg";


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

{/* <div className="staff-">
<h1 className="-nick">Nick: ~Phoenix</h1>
<h2 className="-ign">IGN: Phoenix___</h2>
<h2 className="-position">Position: Owner</h2>
<img className="-img" src={phoenixPic} alt=""></img>
</div> */}

// Owner: Phoenix___
// Admin: Vanderm135
// Admin: FinTheGrand
// Moderator: StaloneRanger
// Moderator: Athasin
// Moderator: Masstheman
// Helper: Moyran1105
// Helper: BellaNoche2014
// Helper: Acentis