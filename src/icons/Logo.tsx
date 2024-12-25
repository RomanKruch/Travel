const Logo = () => { 
 
return ( 
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 50 50"
  >
    <circle cx="150" cy="150" r="100" fill="url(#gradient)" />

    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#3B82F6", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#FF6F61", stopOpacity: 1 }} />
      </linearGradient>
    </defs>

    <polygon
      points="145,85 155,85 155,125 175,125 150,160 125,125 145,125"
      fill="#FFFFFF"
    />

    <path
      d="M100,200 C120,180 180,180 200,200"
      stroke="#FFFFFF"
      strokeWidth="3"
      fill="none"
      strokeDasharray="5,5"
    />

    {/* <text
      x="50%"
      y="260"
      textAnchor="middle"
      fontFamily="'Poppins', sans-serif"
      fontSize="30"
      fill="#121212"
      fontWeight="600"
    >
      Travel
    </text> */}
  </svg>

)} 
 
export default Logo;