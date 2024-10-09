const MacbookIframe = ({ url }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "1337px",
        height: "auto",
        maxHeight: "893px",
        overflow: "hidden",
      }}
    >
      <svg
        width="1337"
        height="893"
        viewBox="0 0 1337 893"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M157.672 0H1177.9C1195.24 0 1209.29 16.6115 1209.29 37.1028V843.248C1209.29 863.74 1195.24 880.351 1177.9 880.351H157.672C140.335 880.351 126.28 863.74 126.28 843.248V37.1028C126.28 16.6115 140.335 0 157.672 0Z"
          fill="#DEDEDE"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M157.672 3.37305H1177.9C1193.66 3.37305 1206.44 18.4744 1206.44 37.1029V843.248C1206.44 861.877 1193.66 876.978 1177.9 876.978H157.672C141.911 876.978 129.134 861.877 129.134 843.248V37.1029C129.134 18.4744 141.911 3.37305 157.672 3.37305Z"
          fill="white"
        />
        <path
          d="M0 862.21C0 857.792 3.58172 854.21 8 854.21H1329C1333.42 854.21 1337 857.792 1337 862.21V879.508H0V862.21Z"
          fill="#DEDEDE"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.85376 861.584C2.85376 859.374 4.64462 857.583 6.85376 857.583H1330.15C1332.36 857.583 1334.15 859.374 1334.15 861.583V876.135H2.85376V861.584Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 879.508H1337C1323.02 888.322 1306.82 893 1290.3 893H46.7044C30.175 893 13.9831 888.322 0 879.508V879.508Z"
          fill="#DEDEDE"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.28076 879.508H1332.72C1319.59 886.16 1305.07 889.627 1290.35 889.627H46.6505C31.9287 889.627 17.4138 886.16 4.28076 879.508V879.508Z"
          fill="white"
        />
        <path
          d="M572.898 854.21H764.816C764.816 863.99 756.888 871.919 747.108 871.919H590.607C580.827 871.919 572.898 863.99 572.898 854.21Z"
          fill="#DEDEDE"
        />
        <rect x="151" y="44" width="1024" height="768" fill="#F3F3F3" />
      </svg>
      <iframe
        src={url}
        style={{
          position: "absolute",
          top: "43.5px",
          left: "150.5px",
          width: "1024px",
          height: "768px",
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

export default MacbookIframe;
