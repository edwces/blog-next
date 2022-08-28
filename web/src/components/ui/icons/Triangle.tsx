import { IconProps } from "./icon-props";

export const TriangleIcon = ({ size = 30, className }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={`fill-white ${className}`}
    >
      <path d="M24 22h-24l12-20z" />
    </svg>
  );
};
