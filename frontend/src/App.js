import { Container } from "react-bootstrap";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to ProShop</h1>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
