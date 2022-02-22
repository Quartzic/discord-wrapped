import Main from "./components/Main";

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8">
      <div className="my-8">
          <h1 className="text-3xl font-bold">📊 Discord Wrapped</h1>
          <p className="my-2">
          Explore your Discord chat history to find trends, patterns, and cool facts.
          </p>
        </div>
        <Main />
      </div>
      <footer className="bg-white my-6">
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">
            Made with ❤️ by the Infinite Monkeys for HackMIT Blueprint '22
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
