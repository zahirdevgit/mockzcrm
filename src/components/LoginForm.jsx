import { useState } from 'react';
import { EmailInput } from './EmailInput';
import { PasswordInput } from './PasswordInput';
import { LoginButton } from './LoginButton';
import { RegisterLink } from './RegisterLink';

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-2">Login</h1>
      <p className="text-center text-gray-500 mb-8">Login dengan Akun Zahir</p>

      <form onSubmit={handleSubmit}>
        <EmailInput 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          showPassword={showPassword}
          onTogglePassword={() => setShowPassword(!showPassword)}
        />
        <LoginButton />
      </form>

      <RegisterLink />
    </div>
  );
}