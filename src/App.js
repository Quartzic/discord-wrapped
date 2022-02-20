import Main from "./components/Main";

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold leading-7 p-2 text-gray-900 sm:text-3xl sm:truncate">
          Discord Wrapped
        </h2>

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
