type ButtonProps = {
  text: string;
};
export function Button(props: ButtonProps) {
  return (
    <button
      className="bg-violet-500 hover:bg-violet-700 transition-colors text-white px-4 py-2 rounded disabled:opacity-30 disabled:cursor-not-allowed"
    >
      {props.text}
    </button>
  );
}
