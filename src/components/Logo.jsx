import zahirLogo from '../assets/zahir-logo.png';

export function Logo() {
  return (
    <div className="flex justify-center mb-8">
      <img src={zahirLogo} alt="Zahir CRM" className="h-8" />
    </div>
  );
}