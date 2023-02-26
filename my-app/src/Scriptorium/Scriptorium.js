// import Class from "../Class/Class";
// import Race from "../Race/Race";
// import General from "../General/General";
// import Generator from "../Generator/Generator";
// import Stat from "../Stat/Stat";
// import Way from "../Way/Way";
// import Preview from "../Preview/Preview";
// import User from "../User/User";
// import Notice from "../Notice/Notice";
// import Sheet from "../Sheet/Sheet";
// import Profile from "../Profile/Profile";
// import Register from "../Register/Register";

import { BrowserRouter as Router, Route } from "react-router-dom";

const Scriptorium = () => {
  return (
    <div>
      {/* <User /> */}
      <Router>
      {/* <Route path="/classe" component={Class} /> */}
      {/* {races.map((race, index) => (
        <Route 
          key={index}
          path="/general" 
          render={(props) => (
            <Race
              {...props}
              name={race.name}
              description={race.description}
              bonus1={race.bonus1}
              bonus2={race.bonus2}
            />
          )}
        />
      ))} */}
    {/* <Route path="/general" component={General} />
        <Route path="/generation-des-stats" component={Generator} />
        <Route path="/stats" component={Stat} />
        <Route path="/voies" component={Way} />
        <Route path="/apercu" component={Preview} />
        <Route path="/mentions-legales" component={Notice} />
        <Route path="/fiches" component={Sheet} />
        <Route path="/profil" component={Profile} /> */}
      </Router>
      {/* <Register /> */}
    </div>
  );
};

export default Scriptorium;
