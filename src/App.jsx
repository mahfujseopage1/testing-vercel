import { useState } from "react";
import "./App.css";
import IPadProIframe from "./components/IPadProIframe";
import IphoneSEIframe from "./components/IphoneSEIframe";
import IphoneXRIframe from "./components/IphoneXRIframe";
import MacbookIframe from "./components/MacbookIfrome";
import SamsungGalaxyS20 from "./components/SamsungGalaxyS20";

function App() {
  const [url, setUrl] = useState("");
  const [text, setText] = useState("");

  console.log(url);
  console.log(text);
  return (
    <div className="App">
      <div className="py-10">
        <div className="mb-10 flex gap-5">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter URL"
            className="p-2 w-1/2"
          />
          <button
            onClick={() => {
              setUrl(text);
            }}
            className="p-2 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
        <div className="flex gap-20 mb-10">
          <IphoneSEIframe url={url} />
          <SamsungGalaxyS20 url={url} />
          <IphoneXRIframe url={url} />
        </div>
        <div className="flex justify-center mb-10">
          <IPadProIframe url={url} />
        </div>
        <div className="flex justify-center">
          <MacbookIframe url={url} />
        </div>
      </div>
    </div>
  );
}

export default App;
