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
    <div className="min-h-screen flex flex-col bg-[#FFF6E5]">
      <header className="p-6">
        <h1 className="text-4xl font-bold text-[#FF6B00]">nice</h1>
      </header>
      <main className="flex-grow flex items-center justify-center p-6">
        {renderStep()}
      </main>
    </div>
  );
};

const WelcomeStep = ({ onContinue }) => (
  <Card className="w-full max-w-md p-8 bg-white rounded-3xl shadow-lg">
    <h2 className="text-4xl font-bold mb-6 text-[#FF6B00]">Hi!</h2>
    <p className="text-2xl mb-8 text-[#333333]">You're about to make great friends + support wonderful causes!</p>
    <Button onClick={onContinue} className="w-full bg-[#FF6B00] hover:bg-[#FF8C00] text-white text-xl py-4 rounded-full">
      Get Started
    </Button>
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
    <Card className="w-full max-w-md p-8 bg-white rounded-3xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-[#FF6B00]">Which causes do you care about most?</h2>
      <p className="text-xl mb-6 text-[#333333]">Pick as many as you like!</p>
      <div className="grid grid-cols-2 gap-6 mb-8">
        {causes.map((cause) => (
          <Button
            key={cause.id}
            variant="outline"
            className="h-32 flex flex-col items-center justify-center border-2 border-[#FF6B00] rounded-2xl hover:bg-[#FFF6E5]"
          >
            <span className="text-4xl mb-3">{cause.icon}</span>
            <span className="text-sm text-center text-[#333333]">{cause.name}</span>
          </Button>
        ))}
      </div>
      <Button onClick={onContinue} className="w-full bg-[#FF6B00] hover:bg-[#FF8C00] text-white text-xl py-4 rounded-full">
        Continue
      </Button>
    </Card>
  );
};

const DonationStep = () => (
  <Card className="w-full max-w-md p-8 bg-white rounded-3xl shadow-lg">
    <h2 className="text-3xl font-bold mb-6 text-[#FF6B00]">Let's Go!</h2>
    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-3 text-[#333333]">$20</h3>
      <p className="text-base text-[#666666] mb-4">
        Your gift of $20 will go to fund scholarships for Climate Shapers, multi-disciplinary gatherings of talented and skilled individuals brought together to tackle a major climate issue.
      </p>
      <p className="text-base text-[#FF6B00] cursor-pointer hover:underline">Learn more</p>
    </div>
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-[#333333]">Select Payment Type</h3>
      <div className="flex space-x-4">
        <Button variant="outline" className="flex-1 border-2 border-[#FF6B00] text-[#FF6B00] hover:bg-[#FFF6E5] rounded-full py-3">Credit Card</Button>
        <Button variant="outline" className="flex-1 border-2 border-[#FF6B00] text-[#FF6B00] hover:bg-[#FFF6E5] rounded-full py-3">Apple Pay</Button>
        <Button variant="outline" className="flex-1 border-2 border-[#FF6B00] text-[#FF6B00] hover:bg-[#FFF6E5] rounded-full py-3">Crypto</Button>
      </div>
    </div>
    <form className="space-y-4 mb-8">
      <Input placeholder="Street Address" className="rounded-full border-[#FF6B00]" />
      <Input placeholder="City" className="rounded-full border-[#FF6B00]" />
      <div className="flex space-x-4">
        <Input placeholder="State" className="w-1/2 rounded-full border-[#FF6B00]" />
        <Input placeholder="Zip" className="w-1/2 rounded-full border-[#FF6B00]" />
      </div>
    </form>
    <div className="flex items-center mb-8">
      <input type="checkbox" id="saveCard" className="mr-3 w-5 h-5 text-[#FF6B00]" />
      <label htmlFor="saveCard" className="text-[#333333]">Save this card for future use</label>
    </div>
    <Button className="w-full bg-[#FF6B00] hover:bg-[#FF8C00] text-white text-xl py-4 rounded-full">
      Donate
    </Button>
  </Card>
);

export default Index;
