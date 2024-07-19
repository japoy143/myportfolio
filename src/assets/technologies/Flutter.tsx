type SvgProps = {
  className: string;
  color: string;
};

function FlutterIcon({ className, color }: SvgProps) {
  return (
    <svg
      className={className}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="50px"
      height="50px"
    >
      <path d="M26.707 3.293l-21 21c-.391.391-.391 1.024 0 1.414l5.586 5.586c.391.391 1.024.391 1.414 0L39.293 4.707C39.923 4.077 39.477 3 38.586 3H27.414C27.149 3 26.895 3.105 26.707 3.293zM39.293 24.707L22 42l-6.293-6.293c-.391-.391-.391-1.024 0-1.414l11-11C26.895 23.105 27.149 23 27.414 23h11.172C39.477 23 39.923 24.077 39.293 24.707zM39.293 45.293L32 38l-10 4 4.707 4.707C26.895 46.895 27.149 47 27.414 47h11.172C39.477 47 39.923 45.923 39.293 45.293z" />
    </svg>
  );
}

export default FlutterIcon;
