// import Class from "../Class/Class";
// import Race from "../Race/Race";
// import General from "../General/General";
// import Generator from "../Generator/Generator";
// import Stat from "../Stat/Stat";
// import Route from "../Way/Way";
// import Preview from "../Preview/Preview";
import Login from "../User/LoginForm";
// import Notice from "../Notice/Notice";
// import Sheet from "../Sheet/Sheet";
import { UserProvider } from '../UserContext';

import { Routes, Route } from 'react-router-dom';
import Profile from '../User/Profile';
import Navbar from '../User/Navbar';
import ProtectedRoute from '../User/ProtectedRoute';
import Settings from '../User/Settings';

const Scriptorium = () => {
  return (
      <div>
        <UserProvider>
          <Navbar />
        </UserProvider>
        <Routes>
          <Route path="/profile" component={ProtectedRoute(Profile)} />
          <Route path="/parametres" component={ProtectedRoute(Settings)} />
          {/* <Route path="/mentions-legales" component={(MentionsLegales)} /> */}
        </Routes>
        {/* <Class /> */}
        {/* {races.map((race, index) => (
          <Race
            key={index}
            name={race.name}
            description={race.description}
            bonus1={race.bonus1}
            bonus2={race.bonus2}
          />
        ))} */}
        {/* <General religions={religions} /> */}
        {/* <Generator /> */}
        {/* <Stat/> */}
        {/* <Way /> */}
        {/* <Preview /> */}
        {/* <Notice /> */}
        {/* <Sheet /> */}
        {/* <Profile /> */}
        {/* <Register /> */}
      </div>
  );
};

export default Scriptorium;
