import Class from "../Class/Class";
import Race from "../Race/Race";
import General from "../General/General";
import Generator from "../Generator/Generator";
import Stat from "../Stat/Stat";
import Way from "../Way/Way";
import Preview from "../Preview/Preview";
import Navbar from "../User/Navbar";
import Notice from "../Notice/Notice";
import Profile from "../User/Profile";
import Settings from "../User/Settings";
import ProtectedRoute from "../User/ProtectedRoute";
import Edit from "../General/Edit";
import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserProvider } from "../UserContext";
import SheetProvider from "../SheetContext";
import { SheetContext } from "../SheetContext";
import "./Scriptorium.scss";

const Scriptorium = () => {
  const { selectedSheetId } = useContext(SheetContext);
  return (
    <div>
      <UserProvider>
        <Navbar />
      </UserProvider>
      <SheetProvider>
        <Routes>
        <Route path="/" element={<Navigate to="/classes" />} />
        <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <UserProvider>
                  <Profile />
                </UserProvider>                
              </ProtectedRoute>
            }
          />
          <Route
            path="/parametres"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />
          <Route path="/classes" element={<Class />} />{" "}
          <Route path="/races" element={<Race />} />
          <Route path="/general" element={<General />} />
          <Route path="/generation-des-stats" element={<Generator />} />
          <Route path="/stats" element={<Stat />} />
          <Route path="/voies" element={<Way />} />
          <Route path="/apercu" element={
             <UserProvider>
                <Preview />
             </UserProvider>} />
           <Route path="/mentions-legales" element={<Notice/>} />
           <Route
            path="/general/edit/:sheetId"
            element={
              <ProtectedRoute>
                <UserProvider>
                  <Edit />
                </UserProvider>                
              </ProtectedRoute>
            }
          />
        </Routes>
      </SheetProvider>
    </div>
  );
};

export default Scriptorium;
