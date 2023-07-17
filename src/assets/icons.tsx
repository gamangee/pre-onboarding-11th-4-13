interface IconProps {
  width: string;
  height: string;
  color?: string;
}

export const Logo = ({ width, height }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 646 123"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M179.9 25.5h19v10.1h-50.2V25.5H168V16h11.9v9.5zM174 74c-3.3 0-6.3-.4-8.9-1.3-2.6-.8-4.8-2-6.6-3.4-1.8-1.4-3.2-3.1-4.1-5-.9-1.9-1.4-3.9-1.4-6v-3.6c0-2.1.5-4.2 1.4-6 .9-1.9 2.3-3.6 4.1-5 1.8-1.4 4-2.6 6.6-3.4 2.6-.8 5.5-1.3 8.9-1.3 3.3 0 6.2.4 8.8 1.3 2.6.8 4.8 2 6.6 3.4 1.8 1.4 3.2 3.1 4.1 5 .9 1.9 1.4 3.9 1.4 6v3.6c0 2.1-.5 4.2-1.4 6-.9 1.8-2.3 3.6-4.1 5-1.8 1.4-4 2.6-6.6 3.4-2.6.9-5.6 1.3-8.8 1.3zm.7 19.5h44.7v10.2h-56.7V79.3h12v14.2zm-.7-45.2c-1.6 0-3 .2-4.2.7-1.2.4-2.2 1-3.1 1.7-.8.7-1.4 1.4-1.8 2.3-.4.8-.6 1.6-.6 2.5v2.3c0 .8.2 1.6.6 2.5.4.9 1 1.6 1.8 2.3.8.7 1.8 1.3 3.1 1.7 1.2.4 2.6.7 4.2.7s3-.2 4.2-.7c1.2-.4 2.2-1 3.1-1.7.8-.7 1.4-1.4 1.8-2.3.4-.8.6-1.6.6-2.5v-2.3c0-.8-.2-1.6-.6-2.5-.4-.8-1-1.6-1.8-2.3-.8-.7-1.8-1.3-3.1-1.7-1.3-.5-2.7-.7-4.2-.7zm43.4-6.2h11.5v10.4h-11.5v27.8h-11.9V16.8h11.9v25.3zM241.7 74.2h23.5V60.9h-34v-10h54.9c.7-3 1.2-5.9 1.4-8.9.2-3 .4-5.6.4-7.8V30h-46.2V20h58.1v13.6c0 1.1 0 2.3-.1 3.7-.1 1.4-.2 2.9-.4 4.4-.2 1.6-.3 3.1-.6 4.7-.2 1.6-.5 3.1-.7 4.5h13.6v10h-34.5v13.3h23.7v31.3h-11.9V84.2h-47.2v-10zM340 62.3c-3.5 0-6.7-.5-9.4-1.7-2.8-1.1-5.1-2.5-7.1-4.3-2-1.8-3.4-3.9-4.4-6.2-1-2.4-1.5-4.8-1.5-7.4v-3.4c0-2.5.5-5 1.5-7.4 1-2.4 2.5-4.5 4.4-6.3 1.9-1.8 4.3-3.2 7.1-4.3 2.8-1.1 5.9-1.7 9.4-1.7s6.7.6 9.4 1.7c2.8 1.1 5.1 2.5 7.1 4.3 2 1.8 3.4 3.9 4.4 6.3 1 2.4 1.5 4.8 1.5 7.4v3.4c0 2.6-.5 5-1.5 7.4-1 2.4-2.5 4.4-4.4 6.2-1.9 1.8-4.3 3.2-7.1 4.3-2.8 1.2-5.9 1.7-9.4 1.7zm0-32.5c-1.8 0-3.3.3-4.7.8-1.4.6-2.5 1.3-3.5 2.3-1 1-1.7 2-2.2 3.2-.5 1.2-.8 2.3-.8 3.5v2.8c0 1.2.3 2.4.8 3.5.5 1.2 1.2 2.2 2.2 3.2.9.9 2.1 1.7 3.5 2.3 1.4.6 3 .8 4.7.8 1.8 0 3.3-.3 4.7-.8 1.4-.6 2.5-1.3 3.5-2.3.9-.9 1.7-2 2.2-3.2.5-1.2.8-2.3.8-3.5v-2.8c0-1.2-.3-2.4-.8-3.5-.5-1.2-1.2-2.2-2.2-3.2-.9-.9-2.1-1.7-3.5-2.3-1.4-.5-3-.8-4.7-.8zm-8.1 40h55.7v34.7h-55.7V69.8zm11.7 24.8h32.2V79.7h-32.2v14.9zm44-28.8h-11.9v-49h11.9v49zM424.1 49.5c-.3.8-.9 1.6-1.7 2.5-.8.9-2.2 2.3-4.2 4-2.2 1.9-4.5 3.8-6.8 5.7-2.4 1.9-4.9 3.9-7.5 5.9l-7.1-8.8c2.8-2 5.3-3.9 7.5-5.8 2.3-1.8 4.5-3.8 6.8-5.8 1.9-1.8 3.5-3.8 4.7-6.1 1.2-2.3 1.7-5 1.7-8.1V20.4h12.1v12.3c0 1.6.1 3 .2 4.2.2 1.2.5 2.4.9 3.4s1.1 2.1 1.9 3.1c.8 1 1.9 2 3.1 3 1.8 1.5 3.9 3.1 6.4 4.9 2.4 1.8 4.8 3.5 7.2 5.1l-6.6 8.3c-2.2-1.5-4.3-3-6.3-4.5s-3.9-2.9-5.7-4.3c-1.6-1.3-3.1-2.4-4.4-3.5-1.1-1.2-1.9-2.1-2.2-2.9zm17.1 57.6c-4 0-7.7-.4-11-1.2-3.3-.8-6.1-2-8.5-3.5-2.4-1.5-4.2-3.3-5.5-5.4-1.3-2.1-1.9-4.4-1.9-6.9v-4c0-2.5.6-4.8 1.9-6.9 1.3-2.1 3.1-3.9 5.5-5.4 2.4-1.5 5.2-2.7 8.5-3.5 3.3-.8 7-1.2 11-1.2s7.7.4 11 1.2c3.3.8 6.1 2 8.5 3.5 2.4 1.5 4.2 3.3 5.5 5.4 1.3 2.1 1.9 4.4 1.9 6.9v4c0 2.5-.6 4.8-1.9 6.9-1.3 2.1-3.1 3.9-5.5 5.4-2.4 1.5-5.2 2.7-8.5 3.5-3.3.8-7 1.2-11 1.2zm0-28.4c-2.4 0-4.5.3-6.4.8-1.9.5-3.5 1.1-4.8 1.9-1.3.8-2.3 1.7-3 2.6-.7.9-1 1.9-1 2.8v2.5c0 .9.3 1.9 1 2.8.7.9 1.7 1.8 3 2.6s2.9 1.4 4.8 1.9 4 .8 6.4.8c2.4 0 4.5-.3 6.4-.8 1.9-.5 3.5-1.1 4.8-1.9 1.3-.8 2.3-1.7 3-2.6.7-.9 1-1.9 1-2.8v-2.5c0-.9-.3-1.9-1-2.8-.7-.9-1.7-1.8-3-2.6s-2.9-1.4-4.8-1.9-4-.8-6.4-.8zm26.6-41.9h11.5v10.4h-11.5v21.5h-11.9V16.8h11.9v20zM485.8 22.1h45.3v10.1h-16.3V38c0 1.1.1 2.2.2 3.1.2.9.5 1.9.9 2.7.5.9 1.1 1.7 1.9 2.6.8.8 1.8 1.7 3.1 2.7 2 1.5 4.1 3.1 6.4 4.6 2.3 1.6 4.6 3.1 7 4.6l-6.3 8.4c-4.2-2.8-8.1-5.4-11.6-8-2-1.4-3.6-2.7-4.8-3.7-1.2-1-1.9-1.8-2.1-2.3h-.1c-.2.6-.9 1.5-2.2 2.7-1.3 1.2-3 2.7-5.2 4.4-2 1.6-4.1 3.3-6.2 4.9-2.1 1.6-4.4 3.2-6.7 4.9l-7-8.7c3-2 5.9-4.1 8.5-6.1 2.7-2.1 5-4 7-5.8 1.6-1.4 2.9-3.1 3.8-4.9.9-1.8 1.4-3.9 1.4-6.2v-5.8h-17.1v-10h.1zm41.5 85c-3.9 0-7.5-.4-10.8-1.1-3.3-.8-6.2-1.9-8.7-3.3-2.5-1.4-4.4-3.2-5.8-5.3-1.4-2.1-2.1-4.4-2.1-7.1v-4.1c0-2.6.7-5 2.1-7.1 1.4-2.1 3.3-3.8 5.8-5.3 2.5-1.4 5.3-2.5 8.7-3.3 3.3-.8 6.9-1.1 10.8-1.1 3.9 0 7.5.4 10.8 1.1 3.3.8 6.2 1.9 8.7 3.3 2.5 1.4 4.4 3.2 5.8 5.3 1.4 2.1 2.1 4.4 2.1 7.1v4.1c0 2.6-.7 5-2.1 7.1-1.4 2.1-3.3 3.8-5.8 5.3-2.5 1.4-5.3 2.5-8.7 3.3-3.3.8-6.9 1.1-10.8 1.1zm0-28c-2.1 0-4.1.2-5.9.6-1.9.4-3.6 1-5 1.7s-2.6 1.6-3.5 2.5c-.9 1-1.3 2-1.3 3.2v2.3c0 1.1.4 2.2 1.3 3.2s2 1.8 3.5 2.5c1.4.7 3.1 1.3 5 1.7 1.9.4 3.9.6 5.9.6 2 0 4.1-.2 5.9-.6 1.9-.4 3.6-1 5-1.7s2.6-1.6 3.5-2.5c.9-1 1.3-2 1.3-3.2v-2.3c0-1.1-.4-2.2-1.3-3.2s-2-1.8-3.5-2.5c-1.4-.7-3.1-1.3-5-1.7-1.9-.4-3.8-.6-5.9-.6zm15.3-30.6h-14.1V38.4h14.1V16.8h11.9V69h-11.9V48.5zM611.2 69v14.3h34.2v10.1H565V83.3h34.2V69H576V22.8h11.9v14.1h34.9V22.8h11.9V69h-23.5zm11.5-10V47h-34.9v12h34.9z"
      fill="#2D3D50"
    ></path>
    <path
      d="M26.6 60.7L1.7 103.5c-4.8 8.3 1.2 18.7 10.8 18.7h92c9.6 0 15.6-10.4 10.8-18.7L90.2 60.2l-31.4 7.1-32.2-6.6z"
      fill="#2876CB"
    ></path>
    <path
      d="M41.9 15.3v18.9L2 103.3l-.1.2c-.4.7-.7 1.3-.9 2.1-.1.1-.1.3-.2.5v.1c0-.2.1-.3.2-.4.2-.7.6-1.4.9-2.1l.1-.2.6-1 12-20.8 12-20.8.6-1c4.8-5.8 13.2-7.4 19.9-3.6l7.7 4.4c1.3.7 2.5 1.4 3.7 2 1.2-.6 2.4-1.3 3.7-2l7.7-4.4c6.9-4 15.6-2.1 20.4 4.1l12.1 21 11.8 20.4 1.1 1.8c.5.8.9 1.6 1.2 2.5.1.2.1.4.2.5l.3 1.5c0 .2 0 .3.1.5V110.7v-.1-.8-.7-.6c0-.2 0-.3-.1-.5l-.3-1.5c0-.2-.1-.4-.2-.5-.3-.9-.7-1.7-1.2-2.5L75 33.9V15.3H41.9z"
      fill="url(#signature_svg__paint0_linear_6:270)"
    ></path>
    <path
      d="M58.5 62.6c-1.2-.6-2.4-1.3-3.7-2l-7.7-4.4C40.4 52.3 32 54 27.2 59.8l-.6 1v.1c.3 2.1 3.6 16.7 31.9 1.7z"
      fill="#1976D2"
    ></path>
    <path
      d="M63.6 81.5l10.6-4.4c9.6-4 21.6-2.1 28.1 4.1l-12.1-21c-4.7-6.2-13.4-8.1-20.4-4.1l-7.7 4.4c-1.3.7-2.5 1.4-3.7 2-28.2 15-31.5.4-31.9-1.8v-.1l-12 20.8v.2c.5 2.4 5.4 18.2 49.1-.1z"
      fill="#42A5F5"
    ></path>
    <path
      d="M65 102.1l13.5-4.4c12.1-4 27.3-2.1 35.6 4l-11.8-20.4c-6.5-6.3-18.5-8.2-28.1-4.1l-10.6 4.4c-43.7 18.3-48.6 2.5-49 .3v-.2l-12 20.8c.6 2.3 7.1 17.8 62.4-.4z"
      fill="#2C8DE3"
    ></path>
    <path
      d="M117 110.041v-.692-.593c0-.198 0-.297-.1-.495l-.301-1.482a.75.75 0 00-.2-.494 11.298 11.298 0 00-1.202-2.471l-1.102-1.779c-8.314-6.03-23.54-7.907-35.66-3.954L64.91 102.43c-55.395 17.989-61.906 2.767-62.607.296l-.601.989-.1.198c-.4.691-.701 1.284-.902 2.075-.1.099-.1.297-.2.396-.1.395-.2.691-.3 1.087v.197c-.1.396-.1.692-.201 1.088v2.372c0 .395.1.692.2 1.087v.198c.1.296.1.593.2.889l.301.89c0 .099.1.296.2.395.1.395.301.692.501.988l.3.594c.101.197.201.296.301.494.2.296.401.494.601.79.2.198.301.396.501.593l.401.396.5.494c.201.198.402.297.602.494.5.396.901.692 1.402.989.701.395 1.503.79 2.304.988.2.099.4.099.501.198.5.098 1.002.296 1.503.296.2 0 .3 0 .5.099h94.262c.2 0 .4 0 .601-.099.2 0 .3 0 .501-.099.5-.099 1.001-.197 1.402-.296.2 0 .401-.099.601-.198.3-.099.501-.198.801-.296a9.298 9.298 0 002.905-1.681c.201-.197.401-.296.601-.494.201-.099.301-.296.501-.494l.401-.395c.1-.099.2-.198.2-.297.1-.198.301-.296.401-.494.2-.198.3-.395.401-.593.1-.099.2-.297.3-.395.1-.099.2-.297.2-.396.101-.197.301-.494.401-.692.1-.197.2-.494.301-.692.1-.197.2-.494.3-.691v-.099c.1-.198.1-.396.2-.593v-.099c.101-.396.201-.791.201-1.186v-.099-.395c0-.198 0-.396.1-.593.601-.099.601-.297.601-.593z"
      fill="#2876CB"
    ></path>
    <path
      d="M38.8 15.3h39.5c4 0 7.3-3.3 7.3-7.3S82.3.7 78.3.7H38.8c-4 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3z"
      fill="#C2DEEE"
    ></path>
    <defs>
      <linearGradient
        id="signature_svg__paint0_linear_6:270"
        x1="58.801"
        y1="13.654"
        x2="58.801"
        y2="52.945"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A6CFE2"></stop>
        <stop offset="0.64" stopColor="#C2DEEE"></stop>
      </linearGradient>
    </defs>
  </svg>
);

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
