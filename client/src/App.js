import React,{Suspense} from "react"
import { BrowserRouter as Router } from "react-router-dom"
import {Container} from "@mui/material";
import { NotificationContainer } from "react-notifications"
import { AppLayout } from "./components/layout/app-layout"

function App() {
  return (
    <Suspense fallback={null}>
      <Container className="page-container">
        <Router>
          <AppLayout/>
          <NotificationContainer/>
        </Router>
      </Container>
    </Suspense>
  );
}

export default App;
