import { Logo } from './components/Logo';
import { LoginForm } from './components/LoginForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Logo />
        <LoginForm />
      </div>
    </div>
  );
}

export default App;