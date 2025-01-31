import React from "react";

const IPadProIframe = ({ url }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "908px",
        height: "auto",
        maxHeight: "1403px",
        overflow: "hidden",
      }}
    >
      <svg
        width="908"
        height="1403"
        viewBox="0 0 908 1403"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.0524902 1344.09L0.0524902 59.6167C0.0524902 27.1837 24.6028 0.891602 54.8871 0.891602H852.482C882.767 0.891602 907.317 27.1837 907.317 59.6167L907.317 1344.09C907.317 1376.53 882.767 1402.82 852.482 1402.82H54.8871C24.6028 1402.82 0.0524902 1376.53 0.0524902 1344.09Z"
          fill="#DEDEDE"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.03735 1344.09L5.03735 59.6163C5.03735 30.1318 27.3558 6.22998 54.887 6.22998H852.482C880.013 6.22998 902.332 30.1318 902.332 59.6163L902.332 1344.09C902.332 1373.58 880.013 1397.48 852.482 1397.48H54.887C27.3558 1397.48 5.03735 1373.58 5.03735 1344.09Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M459.667 60.6844C459.667 57.1463 456.988 54.2781 453.685 54.2781C450.381 54.2781 447.703 57.1463 447.703 60.6844C447.703 64.2226 450.381 67.0908 453.685 67.0908C456.988 67.0908 459.667 64.2226 459.667 60.6844Z"
          fill="#DEDEDE"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M453.685 1317.4C469.102 1317.4 481.601 1330.79 481.601 1347.3C481.601 1363.81 469.102 1377.19 453.685 1377.19C438.267 1377.19 425.769 1363.81 425.769 1347.3C425.769 1330.79 438.267 1317.4 453.685 1317.4ZM453.685 1321.14C467.175 1321.14 478.111 1332.85 478.111 1347.3C478.111 1361.74 467.175 1373.46 453.685 1373.46C440.194 1373.46 429.258 1361.74 429.258 1347.3C429.258 1332.85 440.194 1321.14 453.685 1321.14Z"
          fill="#DEDEDE"
        />
        <path
          d="M37.9382 1295.51L37.9382 101.513H871.938L871.938 1295.51H37.9382Z"
          fill="black"
          fillOpacity="0.2"
        />
      </svg>
      <iframe
        src={url}
        style={{
          position: "absolute",
          top: "100px",
          left: "37.5px",
          width:" 835px",
          height: "1196px",
          borderRadius: "6px",
          border: "none",
          overflow: "hidden",
          zIndex: 2,
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        className="no-scrollbar"
        title="iframe"
      />
    </div>
  );
};

export default IPadProIframe;
