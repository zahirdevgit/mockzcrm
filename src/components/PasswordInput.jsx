import { FaEye, FaEyeSlash } from 'react-icons/fa';

export function PasswordInput({ value, onChange, showPassword, onTogglePassword }) {
  return (
    <div className="mb-6 relative">
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder="••••••"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-zahir-purple"
        required
      />
      <button
        type="button"
        onClick={onTogglePassword}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
}