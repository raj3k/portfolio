import Background from "./components/Background";
import Introduction from "./components/Introduction";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import Portfolio from "./components/Portfolio";

function App() {

  return (
    <main>
      <Background />
      <div className="max-w-5xl w-11/12 mx-auto">
        <Introduction />
        <Portfolio />
        <Timeline />
        <Footer />
      </div>
    </main>
  )
}

export default App
