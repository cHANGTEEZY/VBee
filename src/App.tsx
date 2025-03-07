import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  UNSAFE_DataRouterContext,
  UNSAFE_DataRouterStateContext,
} from "react-router";

import { ThemeProvider } from "./components/theme-provider";
import Home from "./pages/Home";
import Error from "./components/error/Error";
import Contact from "./pages/Contact";

// Create router with future flags
const router = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
};

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter {...router}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
