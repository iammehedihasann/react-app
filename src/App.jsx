import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
// import { Outlet } from "react-router-dom";

// const App = () => {
//   return (
//     <div>
//       <h1>My Application</h1>
//       <Header />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// };

// export default App;
