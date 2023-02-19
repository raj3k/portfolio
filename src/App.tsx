import Background from "./components/Background";
import Introduction from "./components/Introduction";
import Footer from "./components/Footer";

function App() {

  return (
    <main>
      <Background />
      <div className="max-w-5xl w-11/12 mx-auto">
        <Introduction />
        <Footer />
      </div>
    </main>
  )
}

export default App
