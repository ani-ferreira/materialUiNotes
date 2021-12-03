import Switch from "@mui/material/Switch";
import { useState } from "react";
import Welcome from "../components/Welcome";
import HomeLinks from "../components/HomeLinks";

const Home = (props) => {
  //do I need cookies to show a welcome page just once?
  //when I figure it out, change state to true, uncomment and import useeffect

  const [welcomePage, setWelcomePage] = useState(false);

  /* useEffect(() => {
    const timer = setTimeout(() => setWelcomePage(false), 1700);
    return () => clearTimeout(timer);
  }, []); */

  return (
    <>
      {welcomePage && <Welcome />}
      {!welcomePage && (
        <>
          <Switch
            label="label"
            onChange={props.onChangeValue}
            sx={{
              marginTop: 4,
              marginLeft: 1,
              position: "absolute",
              zIndex: 2000,
            }}
          />
          <HomeLinks />
        </>
      )}
    </>
  );
};

export default Home;
