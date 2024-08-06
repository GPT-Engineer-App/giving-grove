import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Profile = () => {
  const [change, setChange] = useState(20);

  return (
    <div className="min-h-screen bg-yellow-300 p-4">
      <Card className="p-6 max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-4">nice</h1>
        <div className="text-center mb-6">
          <h2 className="text-6xl font-bold mb-2">{change}</h2>
          <p className="text-xl">Change</p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Portals</h3>
          <div className="bg-blue-100 h-24 flex items-center justify-center">
            <p className="text-sm">When you support</p>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Candy</h3>
          <div className="flex justify-center">
            <span className="text-4xl">🍬</span>
          </div>
        </div>
        <div className="text-center mb-6">
          <p className="font-semibold">jessica@email.com</p>
          <p className="text-sm text-gray-600">Member since May 2024</p>
        </div>
        <Button variant="outline" className="w-full">Sign Out</Button>
      </Card>
    </div>
  );
};

export default Profile;
