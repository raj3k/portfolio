import Background from "./components/Background";
import Introduction from "./components/Introduction";

function App() {

  return (
    <main>
      <Background />
      <div className="max-w-5xl w-11/12 mx-auto">
        <Introduction />
      </div>
    </main>
  )
}

export default App
