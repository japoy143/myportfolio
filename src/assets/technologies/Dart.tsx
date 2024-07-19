type SvgProps = {
  className: string;
  color: string;
};

function DartIcon({ className, color }: SvgProps) {
  return (
    <svg
      className={className}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="50px"
      height="50px"
    >
      <path d="M7.91 9.32L8 9.41V35.3l-5.09-5.09c-1.81-1.81-2.32-4.59-1.27-6.92L7.91 9.32zM35.3 8H9.41L9.32 7.91l13.97-6.27c2.33-1.05 5.11-.54 6.92 1.27L35.3 8zM37.59 39H11.71l-.54-.54C10.42 37.7 10 36.7 10 35.63V11.41L37.59 39zM13.71 41H39v6c0 .55-.45 1-1 1H21.1c-.27 0-.52-.11-.71-.29l-4.7-4.7.02-.02L13.71 41zM48 21.1V38c0 .55-.45 1-1 1h-6.58L11.41 10h24.22c1.07 0 2.07.42 2.83 1.17l4.53 4.54.02-.02 4.7 4.7C47.89 20.58 48 20.83 48 21.1z" />
    </svg>
  );
}

export default DartIcon;
