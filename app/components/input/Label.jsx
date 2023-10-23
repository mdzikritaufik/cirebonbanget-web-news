export default function Label(props) {
    const { htmlFor, children } = props;
  return (
    <label
        className="block mb-2 text-sm font-medium text-dark"
        htmlFor={htmlFor}
    >
        {children}
    </label>
  )
}
