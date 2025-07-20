import { Link } from "react-router-dom";
export default function Landing() {
  return (
    <div className="min-h-screen bg-fixed bg-center bg-cover flex items-center justify-center px-4 sm:px-6 lg:px-8" 
         style={{ backgroundImage: `url('https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg')` }}>
      <div className="max-w-4xl w-full backdrop-blur-sm bg-black/30 rounded-xl p-6 sm:p-8 md:p-10 shadow-2xl">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Recipe Generator
          </h1>
          
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
            Discover endless culinary possibilities with our AI-powered recipe generator. 
            Whether you're a seasoned chef or a kitchen beginner, we'll help you create 
            delicious meals tailored to your tastes and ingredients.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <FeatureCard 
              icon="🍳"
              title="Personalized Recipes"
              description="Get custom recipes based on your dietary preferences and available ingredients"
            />
            <FeatureCard 
              icon="⏱️"
              title="Quick & Easy"
              description="Find meals that fit your schedule, from 15-minute snacks to weekend feasts"
            />
            <FeatureCard 
              icon="🌱"
              title="Dietary Options"
              description="Vegetarian, vegan, gluten-free? We've got you covered"
            />
          </div>
          <Link to='/login'>
          <button className="mt-10 px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105">
            Get Started - It's Free
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg border border-white/20 hover:bg-white/20 transition-all">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  );
}