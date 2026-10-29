import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  const AppLayout = () => {
    return (
      <div className="font-montserrat">
        <Header />
        <Body />
      </div>
    );
  };
  return (
    <>
      <AppLayout />
    </>
  );
}

export default App;
