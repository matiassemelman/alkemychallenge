// Components
import Footer from "./components/Footer/Footer";
import { Login } from "./components/Login/Login";
import MovieList from "./components/MovieList/MovieList";
import Header from './components/header/Header'

// Styles
import { GlobalStyle } from "./globalStyles";

// Router
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
    <GlobalStyle />
    <Header />
    <main>
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/list" element={<MovieList />} />
    </Routes>
    </main>
    <Footer />
    </>
  );
}

export default App;
