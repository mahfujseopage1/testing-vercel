const SamsungGalaxyS20 = ({ url }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "439px",
        height: "auto",
        maxHeight: "994px",
        overflow: "hidden",
      }}
    >
      <svg
        width="439"
        height="994"
        viewBox="0 0 439 994"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M56.6718 0H382.268C411.292 0 434.821 25.1795 434.821 56.2399V937.74C434.821 968.8 411.292 993.98 382.268 993.98H56.6718C27.6479 993.98 4.11938 968.8 4.11938 937.74V56.2399C4.11938 25.1795 27.6479 0 56.6718 0Z"
          fill="#DEDEDE"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M53.2445 6.11279H385.696C411.565 6.11279 432.536 28.5554 432.536 56.2397V937.739C432.536 965.424 411.565 987.866 385.696 987.866H53.2445C27.3754 987.866 6.4043 965.424 6.4043 937.739V56.2397C6.4043 28.5554 27.3754 6.11279 53.2445 6.11279Z"
          fill="white"
        />
        <rect
          x="55.5293"
          y="987.867"
          width="10.282"
          height="6.11304"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M373.129 987.867H383.411V993.98H373.129V987.867Z"
          fill="white"
        />
        <rect x="55.5293" width="10.282" height="6.11304" fill="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M373.129 0H383.411V6.11304H373.129V0Z"
          fill="white"
        />
        <path
          d="M0.692139 162.978C0.692139 161.085 2.22661 159.55 4.11947 159.55V290.369C2.22661 290.369 0.692139 288.835 0.692139 286.942V162.978Z"
          fill="#DEDEDE"
        />
        <path
          d="M0.692139 342.7C0.692139 340.807 2.22661 339.273 4.11947 339.273V412.629C2.22661 412.629 0.692139 411.095 0.692139 409.202V342.7Z"
          fill="#DEDEDE"
        />
        <path
          d="M434.821 264.083C436.714 264.083 438.248 265.617 438.248 267.51V335.235C438.248 337.128 436.714 338.662 434.821 338.662V264.083Z"
          fill="#DEDEDE"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M194.336 23.8403H245.746C247.955 23.8403 249.745 25.7562 249.745 28.1195C249.745 30.4828 247.955 32.3986 245.746 32.3986H194.336C192.128 32.3986 190.338 30.4828 190.338 28.1195C190.338 25.7562 192.128 23.8403 194.336 23.8403Z"
          fill="#DEDEDE"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M299.441 39.7351C304.173 39.7351 308.009 35.6298 308.009 30.5655C308.009 25.5013 304.173 21.396 299.441 21.396C294.709 21.396 290.873 25.5013 290.873 30.5655C290.873 35.6298 294.709 39.7351 299.441 39.7351Z"
          fill="#DEDEDE"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M46.0859 53.6299H393.997C411.695 53.6299 426.042 69.1305 426.042 88.2515V934.008C426.042 953.129 411.695 968.63 393.997 968.63H46.0859C28.3883 968.63 14.0415 953.129 14.0415 934.008V88.2515C14.0415 69.1305 28.3883 53.6299 46.0859 53.6299Z"
          fill="black"
          fillOpacity="0.2"
        />
      </svg>
      <iframe
        src={url}
        style={{
          position: "absolute",
          top: "52.5px",
          left: "14.5px",
          width: "412px",
          height: "919px",
          borderRadius: "35px",
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

export default SamsungGalaxyS20;
