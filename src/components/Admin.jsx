import React, { useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import {
  updateMeal,
  createMeal,
  addMealPlan,
  deleteMeal,
  addMealToPlan,
  deleteMealFromPlan,
} from "../apiAdapter/admin";
import AdminLogin from "./AdminLogin";
import { ColorModeContext, useMode } from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "../scenes/global/Topbar";
import Sidebar from "../scenes/global/Sidebar";
import Dashboard from "../scenes/dashboard";
// import Team from "../scenes/team";
// import Invoices from "../scenes/invoices";
// import Contacts from "../scenes/contacts";
// import Bar from "../scenes/bar";
// import Form from "../scenes/form";
// import Line from "../scenes/line";
// import Pie from "../scenes/pie";
// import FAQ from "../scenes/faq";
// import Geography from "../scenes/geography";
// import Calender from "../scenes/calendar";

function Admin(props) {
  const navigate = useNavigate();
  const [theme, colorMode] = useMode();

  console.log(props);
  console.log(props.isAdminLoggedIn);
  const loggedIn = props.isAdminLoggedIn;
  const loginFunc = props.setIsAdminLoggedIn;

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="admin">
          <main className="content">
            <Topbar />
            {loggedIn ? (
              <div className="homeAdmin">
                <Sidebar />
                <h1 id="admin-hello">
                  You've reached the Admin Page, click a button to begin
                </h1>
              </div>
            ) : (
              navigate("/admin/login")
            )}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Admin;
