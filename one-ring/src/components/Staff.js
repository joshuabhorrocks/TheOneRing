import React from "react";

import placeholderPic from "../media/phone.jpg";
import phoenixPic from "../media/StaffPics/phoenixPic.png";
import stalonePic from "../media/StaffPics/stalonePic.png";
import massPic from "../media/StaffPics/massPic.png";
import barzulPic from "../media/StaffPics/barzulPic.png";
import bellaPic from "../media/StaffPics/bellaPic.png";
import moryanPic from "../media/StaffPics/moryanPic.png";
import athasinPic from "../media/StaffPics/athasinPic.png";
import botoPic from "../media/StaffPics/botoPic.png";
import vandPic from "../media/StaffPics/vandPic.png";
import wofflePic from "../media/StaffPics/wofflePic.png";

const Staff = () => {
    return (
        <div className="staff-bgi">
            <h1 className="staff-title">Introducing our Amazing Staff!</h1>
        <div className="staff-layout-top">
            <div className="staff-phoenix">
                <div className="phoenix-info">
                    <h1 className="phoenix-nick">Nickname: ~Phoenix</h1>
                    <h2 className="phoenix-ign">IGN: Phoenix___</h2>
                    <h2 className="phoenix-position">Position: Owner</h2>
                    <h2 className="phoenix-bio">"O before E when spelling to me!"</h2>
                </div>
                <img className="phoenix-img" src={phoenixPic} alt="Phoenix, The Owner of TOR"></img>
            </div>
        </div>
        <div className="staff-layout-bottom">
            <div className="staff-layout-row-1">
                <div className="staff-vanderm">
                <div className="vanderm-info">
                    <h1 className="vanderm-nick">Nickname: ~Vand</h1>
                    <h2 className="vanderm-ign">IGN: vanderm135</h2>
                    <h2 className="vanderm-position">Position: Admin</h2>
                    <h2 className="vanderm-bio">"chess?"</h2>
                </div>
                    <img className="vanderm-img" src={vandPic} alt="Vanderm, an Admin on TOR"></img>
                </div>
                <div className="staff-fin">
                <div className="fin-info">
                    <h1 className="fin-nick">Nickname: ~Fin</h1>
                    <h2 className="fin-ign">IGN: FinTheGrand</h2>
                    <h2 className="fin-position">Position: Admin</h2>
                    <h2 className="fin-bio">"O before E when spelling to me!"</h2>
                </div>
                    <img className="fin-img" src={placeholderPic} alt="FinTheGrand, an Admin on TOR"></img>
                </div>
            </div>
            <div className="staff-layout-row-2">
                <div className="staff-staloner">
                <div className="stalone-info">
                    <h1 className="stalone-nick">Nickname: StaloneRanger</h1>
                    <h2 className="stalone-ign">IGN: StaloneRanger</h2>
                    <h2 className="stalone-position">Position: Moderator</h2>
                    <h2 className="stalone-bio">"women love me, fish fear me"</h2>
                </div>
                    <img className="stalone-img" src={stalonePic} alt="StaloneRanger, a Moderator on TOR"></img>
                </div>
                <div className="staff-athasin">
                <div className="athasin-info">
                    <h1 className="athasin-nick">Nickname: ~Athasin</h1>
                    <h2 className="athasin-ign">IGN: Athasin</h2>
                    <h2 className="athasin-position">Position: Moderator</h2>
                    <h2 className="athasin-bio">"This is an Aspen. You can tell that it's an Aspen because of the way it is." -Neature Walk</h2>
                </div>
                    <img className="athasin-img" src={athasinPic} alt="Athasin, a Moderator on TOR"></img>
                </div>
            </div>
            <div className="staff-layout-row-3">
                <div className="staff-mass">
                <div className="mass-info">
                    <h1 className="mass-nick">Nickname: ~Mass</h1>
                    <h2 className="mass-ign">IGN: Masstheman</h2>
                    <h2 className="mass-position">Position: Moderator</h2>
                    <h2 className="mass-bio">"Who am I, Gamling?"</h2>
                </div>
                    <img className="mass-img" src={massPic} alt="Masstheman, a Moderator on TOR"></img>
                </div>
                <div className="staff-acentis">
                <div className="acentis-info">
                    <h1 className="acentis-nick">Nickname: ~Woffle</h1>
                    <h2 className="acentis-ign">IGN: Woffle1888</h2>
                    <h2 className="acentis-position">Position: Moderator</h2>
                    <h2 className="acentis-bio">"There is no mercy."</h2>
                </div>
                    <img className="acentis-img" src={wofflePic} alt="Acentis, a Moderator on TOR"></img>
                </div>
            </div>
            <div className="staff-layout-row-4">
                <div className="staff-moryan">
                <div className="moryan-info">
                    <h1 className="moryan-nick">Nickname: ~Moryan</h1>
                    <h2 className="moryan-ign">IGN: Moyran1105</h2>
                    <h2 className="moryan-position">Position: Moderator</h2>
                    <h2 className="moryan-bio">"Please donate your stone to me."</h2>
                </div>
                    <img className="moryan-img" src={moryanPic} alt="Moryan1105, a Moderator on TOR"></img>
                </div>
            </div>
            <div className="staff-layout-row-5">
                <div className="staff-bella">
                <div className="bella-info">
                    <h1 className="bella-nick">Nickname: ~Aurora</h1>
                    <h2 className="bella-ign">IGN: BellaNoche2014</h2>
                    <h2 className="bella-position">Position: Helper</h2>
                    <h2 className="bella-bio">"If you made a mistake or crashed the server again...</h2>
                    <h2 className="bella-bio2">always remember to just blame Fin."</h2>
                </div>
                    <img className="bella-img" src={bellaPic} alt="BellaNoche2014, a Helper on TOR"></img>
                </div>
                <div className="staff-barzul">
                <div className="barzul-info">
                    <h1 className="barzul-nick">Nickname: ~Barzul</h1>
                    <h2 className="barzul-ign">IGN: OldTomBarzuldil</h2>
                    <h2 className="barzul-position">Position: Helper</h2>
                    <h2 className="barzul-bio">"A positive attitude may not solve all life's problems, but it will annoy enough people to make it worth the effort."</h2>
                </div>
                    <img className="barzul-img" src={barzulPic} alt="OldTomBarzuldil, a Helper on TOR"></img>
                </div>
            </div>
            <div className="staff-layout-row-6">
            <div className="staff-boto">
                <div className="boto-info">
                    <h1 className="boto-nick">Nickname: ~Boto</h1>
                    <h2 className="boto-ign">IGN: Boto122</h2>
                    <h2 className="boto-position">Position: Helper</h2>
                    <h2 className="boto-bio">"ACHTUNG!"</h2>
                </div>
                    <img className="boto-img" src={botoPic} alt="Boto, a Helper on TOR"></img>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Staff