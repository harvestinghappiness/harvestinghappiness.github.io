import * as React from "react";

const InstagramLogo = ({ color = "white" }: { color?: string }): JSX.Element => (
  <svg width="27" height="27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.125 2.25H7.875A5.625 5.625 0 002.25 7.875v11.25a5.625 5.625 0 005.625 5.625h11.25a5.625 5.625 0 005.625-5.625V7.875a5.625 5.625 0 00-5.625-5.625z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 12.791a4.5 4.5 0 11-8.902 1.32A4.5 4.5 0 0118 12.791z"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default InstagramLogo;
