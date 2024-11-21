export function EmailInput({ value, onChange }) {
  return (
    <div className="mb-4">
      <input
        type="email"
        value={value}
        onChange={onChange}
        placeholder="ferdian@zahir.co.id"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-zahir-purple"
        required
      />
    </div>
  );
}