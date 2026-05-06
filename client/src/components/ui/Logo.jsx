const Logo = ({ size = 36 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="64" height="64" rx="12" fill="#431407" />
    <rect x="10" y="32" width="44" height="24" fill="#f97316" />
    <polygon points="32,10 54,32 10,32" fill="#facc15" />
    <rect x="13" y="36" width="11" height="8" rx="1.5" fill="white" opacity="0.92" />
    <rect x="40" y="36" width="11" height="8" rx="1.5" fill="white" opacity="0.92" />
    <rect x="26" y="43" width="12" height="13" rx="2" fill="#431407" />
  </svg>
)

export default Logo
