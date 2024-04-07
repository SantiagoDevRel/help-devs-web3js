const { Web3 } = require("web3");

function getLibrary(provider) {
  return new Web3(provider);
}

getLibrary();

/* const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </React.StrictMode>
);

reportWebVitals(); */
