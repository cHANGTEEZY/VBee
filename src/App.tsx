import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "./components/theme-provider";
import Home from "./pages/Home";
import Error from "./components/error/Error";
import Contact from "./pages/Contact";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
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
