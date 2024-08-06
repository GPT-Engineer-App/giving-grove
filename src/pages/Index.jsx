import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-yellow-300 flex flex-col">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">nice</h1>
        <Button variant="outline" className="bg-black text-white px-4 py-2 rounded-full">
          Sign In
        </Button>
      </header>
      
      <main className="flex-grow flex flex-col items-center justify-center p-4 text-center">
        <div className="bg-black text-white p-4 rounded-lg mb-4 max-w-md">
          <h2 className="text-2xl font-bold mb-2">Making a difference made easy</h2>
          <div className="text-yellow-300">★</div>
        </div>
        
        <div className="grid grid-cols-3 gap-2 mb-4">
          <img src="/placeholder.svg" alt="Tiger" className="w-full h-24 object-cover rounded-lg" />
          <img src="/placeholder.svg" alt="Whale" className="w-full h-24 object-cover rounded-lg" />
          <img src="/placeholder.svg" alt="Elephant" className="w-full h-24 object-cover rounded-lg" />
          <img src="/placeholder.svg" alt="Coral reef" className="w-full h-24 object-cover rounded-lg" />
          <img src="/placeholder.svg" alt="Rainforest" className="w-full h-24 object-cover rounded-lg" />
          <img src="/placeholder.svg" alt="Polar bear" className="w-full h-24 object-cover rounded-lg" />
        </div>
        
        <Button className="bg-black text-white px-8 py-3 rounded-full text-lg mb-4">
          Sign in with Google
        </Button>
        
        <section className="mb-4">
          <h3 className="text-xl font-bold mb-2">Our Partners</h3>
          <div className="flex justify-center space-x-4">
            <img src="/placeholder.svg" alt="Partner 1" className="w-16 h-16 object-contain" />
            <img src="/placeholder.svg" alt="Partner 2" className="w-16 h-16 object-contain" />
            <img src="/placeholder.svg" alt="Partner 3" className="w-16 h-16 object-contain" />
          </div>
        </section>
        
        <section className="bg-cyan-200 p-4 rounded-lg max-w-md mb-4">
          <h3 className="text-xl font-bold mb-2">Intention into impact</h3>
          <p>
            NICE is your all-in-one platform that combines donations, volunteering, 
            and impact tracking into one seamless experience. Our mission is 
            to make philanthropy accessible for everyone, leveraging technology to 
            track and validate contributions.
          </p>
        </section>
        
        <section className="bg-green-300 p-4 rounded-lg max-w-md">
          <h3 className="text-xl font-bold mb-2">Make Change</h3>
          <p>
            Explore your social feed to sign up for volunteer opportunities, collect data, 
            earn rewards, and witness the change you make in real time!
          </p>
        </section>
      </main>
      
      <footer className="p-4 text-center">
        <p>© 2024 Nice Industries</p>
      </footer>
    </div>
  );
};

export default Index;
