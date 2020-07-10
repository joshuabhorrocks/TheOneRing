import React from "react";
import DiscordWidget from "./DiscordWidget";
import phoenixPic from "../media/phone.jpg";


const Announcements = () => {
    return (
        <div>
            <h1 className="announcement-title">Announcements</h1>
            <h2 className="announcement-desc">Check back here for the latest Announcements!</h2>
            <h1 className="announcement-staff">Meet the Staff!</h1>
            <div className="announcement-layout-left">
                <div className="discord-wiget">
                    <DiscordWidget />
                </div>
            </div>
            <div className="announcement-layout-right">
                <div className="staff-phoenix">
                    <h1 className="phoenix-nick">Nick: ~Phoenix</h1>
                    <h2 className="phoenix-ign">IGN: Phoenix___</h2>
                    <h2 className="phoenix-position">Position: Owner</h2>
                    <img className="phoenix-img" src={phoenixPic} alt="Phoenix, The Owner of TOR"></img>
                </div>
                <div className="staff-vanderm">
                    <h1 className="vanderm-nick">Nick: ~Phoenix</h1>
                    <h2 className="vanderm-ign">IGN: Vanderm135</h2>
                    <h2 className="vanderm-position">Position: Admin</h2>
                    <img className="vanderm-img" src={phoenixPic} alt="Vanderm, an Admin on TOR"></img>
                </div>
                <div className="staff-fin">
                    <h1 className="fin-nick">Nick: ~Phoenix</h1>
                    <h2 className="fin-ign">IGN: FinTheGrand</h2>
                    <h2 className="fin-position">Position: Admin</h2>
                    <img className="fin-img" src={phoenixPic} alt="FinTheGrand, an Admin on TOR"></img>
                </div>
                <div className="staff-staloner">
                    <h1 className="stalone-nick">Nick: ~Phoenix</h1>
                    <h2 className="stalone-ign">IGN: StaloneRanger</h2>
                    <h2 className="stalone-position">Position: Moderator</h2>
                    <img className="stalone-img" src={phoenixPic} alt="StaloneRanger, a Moderator on TOR"></img>
                </div>
                <div className="staff-athasin">
                    <h1 className="athasin-nick">Nick: ~Phoenix</h1>
                    <h2 className="athasin-ign">IGN: Athasin</h2>
                    <h2 className="athasin-position">Position: Moderator</h2>
                    <img className="athasin-img" src={phoenixPic} alt="Athasin, a Moderator on TOR"></img>
                </div>
                <div className="staff-mass">
                    <h1 className="mass-nick">Nick: ~Phoenix</h1>
                    <h2 className="mass-ign">IGN: Masstheman</h2>
                    <h2 className="mass-position">Position: Moderator</h2>
                    <img className="mass-img" src={phoenixPic} alt="Masstheman, a Moderator on TOR"></img>
                </div>
                <div className="staff-mass">
                    <h1 className="moyran-nick">Nick: ~Phoenix</h1>
                    <h2 className="moyran-ign">IGN: Moyran1105</h2>
                    <h2 className="moyran-position">Position: Moderator</h2>
                    <img className="moyran-img" src={phoenixPic} alt="Moyran1105, a Helper on TOR"></img>
                </div>
                <div className="staff-bella">
                    <h1 className="bella-nick">Nick: ~Phoenix</h1>
                    <h2 className="bella-ign">IGN: BellaNoche2014</h2>
                    <h2 className="bella-position">Position: Moderator</h2>
                    <img className="bella-img" src={phoenixPic} alt="BellaNoche2014, a Helper on TOR"></img>
                </div>
                <div className="staff-acentis">
                    <h1 className="acentis-nick">Nick: ~Phoenix</h1>
                    <h2 className="acentis-ign">IGN: Acentis</h2>
                    <h2 className="acentis-position">Position: Moderator</h2>
                    <img className="acentis-img" src={phoenixPic} alt="Acentis, a Helper on TOR"></img>
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