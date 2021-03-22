export default function Checkbox({ disabled }) {
  return (
    <input
      disabled={disabled}
      type="checkbox"
      className="p-2 rounded-full border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 checked:bg-gradient-to-br checked:from-check-start checked:to-check-end focus:outline-none focus:ring-0"
    />
  );
}
