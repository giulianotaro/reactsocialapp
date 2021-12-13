import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const name = "ReactSocialApp";
  const nav = [

    { link: "/home", label: "Home" },
    { link: "/friends", label: "Friends" },
    { link: "/messages", label: "Messages" },

  ];
  return (
  

    <div>
      <Header name={name} links={nav} />
      <Footer />
    </div>
  );
}

export default App;
