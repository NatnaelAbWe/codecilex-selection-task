import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Breakfast", icon: "🍳" },
  { name: "Vegan", icon: "🌿" },
  { name: "Desserts", icon: "🍰" },
  { name: "Dinner", icon: "🥘" },
  { name: "Drinks", icon: "🍹" },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <main>
      <section className="relative h-[500px] flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=2000"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Master Your Kitchen</h1>
          <p className="text-xl mb-8">
            Discover thousands of recipes from around the world.
          </p>

          <div className="max-w-2xl mx-auto mb-8 relative">
            <input
              type="text"
              placeholder="Search by title or ingredients (e.g. Tomato, Pasta)..."
              className="w-full py-4 px-6 rounded-full text-gray-900 text-lg shadow-lg focus:outline-none"
            />
            <button className="absolute right-2 top-2 bg-orange-600 hover:bg-orange-700 p-2 px-6 rounded-full font-bold">
              Search
            </button>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate("/browse")}
              className="bg-orange-600 hover:bg-orange-700 px-8 py-3 rounded-md font-bold transition"
            >
              Browse Recipes
            </button>
            <button
              onClick={() => navigate("/submit")}
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-md font-bold transition"
            >
              Submit a Recipe
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-8">
        <h2 className="text-2xl font-bold mb-8">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group cursor-pointer bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md hover:border-orange-200 transition"
              onClick={() => navigate(`/browse?category=${cat.name}`)}
            >
              <span className="text-4xl block mb-2">{cat.icon}</span>
              <span className="font-semibold text-gray-700 group-hover:text-orange-600">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
