import * as React from "react";

const FacebookLogo = ({
  color = "white",
  className,
}: {
  color?: string;
  className?: string;
}): JSX.Element => (
  <svg
    width="27"
    height="27"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.25 2.25h-3.375a5.625 5.625 0 00-5.625 5.625v3.375H7.875v4.5h3.375v9h4.5v-9h3.375l1.125-4.5h-4.5V7.875a1.125 1.125 0 011.125-1.125h3.375v-4.5z"
      fill={color}
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default FacebookLogo;
