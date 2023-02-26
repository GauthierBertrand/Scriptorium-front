// import Class from "../Class/Class";
// import Race from "../Race/Race";
// import General from "../General/General";
import Generator from "../Generator/Generator";
import Stat from "../Stat/Stat";
// import Way from "../Way/Way";
// import Preview from "../Preview/Preview";
// import User from "../User/User";
// import Notice from "../Notice/Notice";
// import Sheet from "../Sheet/Sheet";
// import Profile from "../Profile/Profile";
// import Register from "../Register/Register";
import { Routes, Route } from "react-router-dom";

const Scriptorium = () => {
  return (
  <Routes>
    <div>
      {/* <User /> */}
      {/* <Route path="/classe" element={<Class/>} /> */}
      {/* {races.map((race, index) => (
        <Route 
          key={index}
          path="/general" 
          element={(props) => (
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
        {/* <Route path="/general" element={<General/>} /> */}
        <Route path="/generation-des-stats" element={<Generator/>} />
        <Route path="/stats" element={<Stat/>} />
{/*     <Route path="/voies" element={<Way/>} />
        <Route path="/apercu" element={<Preview/>} />
        <Route path="/mentions-legales" element={<Notice/>} />
        <Route path="/fiches" element={<Sheet/>} />
        <Route path="/profil" element={<Profile/>} /> */}
      {/* <Register /> */}
    </div>
  </Routes>
  );
};

export default Scriptorium;
