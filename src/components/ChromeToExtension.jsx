import { useState } from "react";

const ChromeToExtension = () => {
  const [website, setWebsite] = useState("");
  function getArrActivities() {
    document.dispatchEvent(
      new CustomEvent("getArrActivities", {
        detail: website,
      })
    );
  }

  return (
    <div className="flex flex-col mt-6">
      <div>
        <input
          type="text"
          onChange={(e) => {
            setWebsite(e.target.value);
          }}
          className="border-2 border-gray-400 bg-transparent  h-10 px-5 rounded-md text-sm focus:outline-none"
        />
        <button
          className="bg-red-400 h-10 px-5 rounded-md ml-4"
          onClick={getArrActivities}
        >
          Send Data
        </button>
      </div>
      <div className="all-emulator">
        <div className="wrapper">
          <div className="frame">
            <h2>
              375 &times; 667 <small>(iPhone Se)</small>
            </h2>
            <iframe src="" title="wix" width="375" height="667"></iframe>
          </div>
          <div className="frame">
            <h2>
              412 &times; 919 <small>(Samsung Galaxy)</small>
            </h2>
            <iframe
              src=""
              width="412"
              height="919"
              title="small-tablet"
            ></iframe>
          </div>
          <div className="frame">
            <h2>
              414 &times; 816 <small>(iPhone XR)</small>
            </h2>
            <iframe
              src=""
              width="414"
              height="816"
              title="tablet-portrait"
            ></iframe>
          </div>
          <div className="frame">
            <h2>
              1024 &times; 1366 <small>(tablet - landscape)</small>
            </h2>
            <iframe
              src=""
              width="1024"
              height="1366"
              title="tablet-landscape"
            ></iframe>
          </div>
          <div className="frame">
            <h2>
              1280 &times; 720<small>(desktop)</small>
            </h2>
            <iframe title="desktop" src="https://stackoverflow.com/questions/56199358/how-to-view-audit-a-chrome-extensions-source-code" width="1200" height="720"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChromeToExtension;
