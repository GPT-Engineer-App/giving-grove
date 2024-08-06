import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const Index = () => {
  const [step, setStep] = useState(0);

  const renderStep = () => {
    switch (step) {
      case 0:
        return <WelcomeStep onContinue={() => setStep(1)} />;
      case 1:
        return <CausesStep onContinue={() => setStep(2)} />;
      case 2:
        return <DonationStep />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-yellow-300">
      <header className="p-4">
        <h1 className="text-4xl font-bold">nice</h1>
      </header>
      <main className="flex-grow flex items-center justify-center p-4">
        {renderStep()}
      </main>
    </div>
  );
};

const WelcomeStep = ({ onContinue }) => (
  <Card className="w-full max-w-md p-6 bg-white">
    <h2 className="text-3xl font-bold mb-4">Hi!</h2>
    <p className="text-xl mb-6">You're about to make great friends + support wonderful causes!</p>
    <Button onClick={onContinue} className="w-full">Get Started</Button>
  </Card>
);

const CausesStep = ({ onContinue }) => {
  const causes = [
    { id: 'wildlife', name: 'Wildlife Conservation', icon: '🐾' },
    { id: 'ocean', name: 'Ocean Conservation', icon: '🌊' },
    { id: 'education', name: 'Education', icon: '📚' },
    { id: 'environment', name: 'Environmental Health', icon: '🌍' },
  ];

  return (
    <Card className="w-full max-w-md p-6 bg-white">
      <h2 className="text-3xl font-bold mb-4">Which causes do you care about most?</h2>
      <p className="mb-4">Pick as many as you like!</p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {causes.map((cause) => (
          <Button key={cause.id} variant="outline" className="h-24 flex flex-col items-center justify-center">
            <span className="text-2xl mb-2">{cause.icon}</span>
            <span className="text-sm text-center">{cause.name}</span>
          </Button>
        ))}
      </div>
      <Button onClick={onContinue} className="w-full">Continue</Button>
    </Card>
  );
};

const DonationStep = () => (
  <Card className="w-full max-w-md p-6 bg-white">
    <h2 className="text-3xl font-bold mb-4">Let's Go!</h2>
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">$20</h3>
      <p className="text-sm text-gray-600 mb-4">
        Your gift of $20 will go to fund scholarships for Climate Shapers, multi-disciplinary gatherings of talented and skilled individuals brought together to tackle a major climate issue.
      </p>
      <p className="text-sm text-blue-600 cursor-pointer">Learn more</p>
    </div>
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">Select Payment Type</h3>
      <div className="flex space-x-2">
        <Button variant="outline">Credit Card</Button>
        <Button variant="outline">Apple Pay</Button>
        <Button variant="outline">Crypto</Button>
      </div>
    </div>
    <form className="space-y-4 mb-6">
      <Input placeholder="Street Address" />
      <Input placeholder="City" />
      <div className="flex space-x-2">
        <Input placeholder="State" className="w-1/2" />
        <Input placeholder="Zip" className="w-1/2" />
      </div>
    </form>
    <div className="flex items-center mb-6">
      <input type="checkbox" id="saveCard" className="mr-2" />
      <label htmlFor="saveCard">Save this card for future use</label>
    </div>
    <Button className="w-full">Donate</Button>
  </Card>
);

export default Index;
