import Layout from "./components/Layout";
import Me from "./components/Me";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <main className="overflow-x-hidden">
          <Me />
          <Technologies />
          <Projects />
        </main>
      </Layout>
    </>
  );
}

export default App;
