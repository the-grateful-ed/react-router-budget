// rrd import
import { Outlet, useLoaderData } from "react-router-dom";

// images
import wave from "../assets/wave.svg";

// import components
import Nav from "../components/Nav";

// helper function
import { fetchData } from "../helpers";

// loader
export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Main = () => {
  const { userName } = useLoaderData();

  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={wave} alt="" />
    </div>
  );
};

export default Main;
