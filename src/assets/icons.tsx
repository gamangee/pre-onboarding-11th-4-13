interface IconProps {
  width: string;
  height: string;
  color?: string;
}

export const SearchIcon = ({ width, height, color }: IconProps) => (
  <svg
    viewBox="0 0 16 16"
    fill="currentColor"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    color={color}
  >
    <path d="M6.56 0a6.56 6.56 0 015.255 10.49L16 14.674 14.675 16l-4.186-4.184A6.56 6.56 0 116.561 0zm0 1.875a4.686 4.686 0 100 9.372 4.686 4.686 0 000-9.372z"></path>
  </svg>
);

export const DeleteBtn = () => (
  <svg
    width="10"
    height="10"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    color="white"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 6.414l3.293 3.293 1.414-1.414L6.414 5l3.293-3.293L8.293.293 5 3.586 1.707.293.293 1.707 3.586 5 .293 8.293l1.414 1.414L5 6.414z"
    />
  </svg>
);
