export default function input(props) {
    const { type, placeholder, name } = props;
  return (
    <input
    type={type}
    className="block w-full px-4 py-2 text-sky bg-night border rounded-lg focus:border-yellow-200 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-fresh"
    placeholder={placeholder}
    name={name}
    />
  )
}