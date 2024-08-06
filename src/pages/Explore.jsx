import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Explore = () => {
  const causes = [
    {
      id: 1,
      title: 'Nutrition for All',
      description: 'Closing the nutritional inequality gaps is not just about understanding the differences...',
      image: '/placeholder.svg',
      amount: 20,
    },
    {
      id: 2,
      title: 'Support Big Cats',
      description: 'Donate in honor of your favorite animals and help Turpentine Creek Wildlife Refuge...',
      image: '/placeholder.svg',
      amount: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-yellow-300 p-4">
      <h1 className="text-4xl font-bold mb-6">Explore Causes</h1>
      <div className="space-y-4">
        {causes.map((cause) => (
          <Card key={cause.id} className="p-4 flex">
            <img src={cause.image} alt={cause.title} className="w-1/3 h-32 object-cover mr-4" />
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">{cause.title}</h2>
              <p className="text-sm mb-2">{cause.description}</p>
              <div className="flex justify-between items-center">
                <Button variant="outline">Share</Button>
                <div className="flex items-center">
                  <span className="mr-2">${cause.amount}</span>
                  <Button>Donate</Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Explore;
