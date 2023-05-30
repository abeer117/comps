import { GoBell } from "react-icons/go";
import { MdOutlineDangerous } from "react-icons/md";
import Button from "./components/Button";

function App() {
  const handlerEvent = () => {
    console.log("Clicked!");
  };
  return (
    <div>
      <div>
        <Button className="mb-5 mt-2" onClick={handlerEvent} outline primary>
          Click Me!
        </Button>
      </div>
      <div>
        <Button secondary outline rounded>
          Buy Now
        </Button>
      </div>
      <div>
        <Button success outline>
          See Deal
        </Button>
      </div>
      <div>
        <Button warning>
          <GoBell />
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <MdOutlineDangerous />
          Submit
        </Button>
      </div>
    </div>
  );
}

export default App;
