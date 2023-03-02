import Class from "../Class/Class";
import Race from "../Race/Race";
// import General from "../General/General";
import Generator from "../Generator/Generator";
import Stat from "../Stat/Stat";
import Way from "../Way/Way";
// import Preview from "../Preview/Preview";
import Navbar from "../User/Navbar";
// import Notice from "../Notice/Notice";
// import Sheet from "../Sheet/Sheet";
import Profile from "../Profile/Profile";
import Settings from "../User/Settings";
// import Register from "../Register/Register";
import ProtectedRoute from "../User/ProtectedRoute";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "../UserContext";

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
        <Route path="/classes" element={<Class/>} />
        <Route path="/races" element={<Race/>} />
        {/* <Route path="/general" element={<General/>} /> */}
        <Route path="/generation-des-stats" element={<Generator />} />
        <Route path="/stats" element={<Stat />} />
        <Route path="/voies" element={<Way/>} />
    {/* <Route path="/apercu" element={<Preview/>} />
        <Route path="/mentions-legales" element={<Notice/>} />
        <Route path="/fiches" element={<Sheet/>} />
        <Route path="/profil" element={<Profile/>} /> */}
        {/* <Register /> */}
      </Routes>
    </div>
  );
};

export default Scriptorium;
