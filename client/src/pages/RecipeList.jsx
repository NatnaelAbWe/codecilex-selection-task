import { useState } from "react";

// Mock data for initial development
const DUMMY_RECIPES = [
  {
    id: 1,
    name: "Avocado Toast",
    category: "Breakfast",
    time: "10 mins",
    difficulty: "Easy",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500",
    desc: "Creamy avocado on sourdough.",
  },
  {
    id: 2,
    name: "Vegan Buddha Bowl",
    category: "Vegan",
    time: "20 mins",
    difficulty: "Medium",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
    desc: "A colorful mix of grains and greens.",
  },
  {
    id: 3,
    name: "Chocolate Soufflé",
    category: "Desserts",
    time: "45 mins",
    difficulty: "Hard",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bee?w=500",
    desc: "Fluffy and rich chocolate delight.",
  },
];

const RecipeList = () => {
  const [filter, setFilter] = useState({ category: "All", time: "All" });

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Browse Recipes</h1>

        {/* Basic Filters */}
        <div className="flex gap-4">
          <select
            className="border p-2 rounded-md"
            onChange={(e) => setFilter({ ...filter, category: e.target.value })}
          >
            <option value="All">All Categories</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Vegan">Vegan</option>
            <option value="Desserts">Desserts</option>
          </select>

          <select
            className="border p-2 rounded-md"
            onChange={(e) => setFilter({ ...filter, time: e.target.value })}
          >
            <option value="All">All Times</option>
            <option value="Quick">Under 20 mins</option>
            <option value="Medium">20-45 mins</option>
          </select>
        </div>
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {DUMMY_RECIPES.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold uppercase text-orange-600 tracking-wider">
                  {recipe.category}
                </span>
                <span className="text-sm text-gray-500">
                  ⭐ {recipe.rating}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{recipe.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{recipe.desc}</p>
              <div className="flex justify-between text-xs font-semibold text-gray-500 border-t pt-4">
                <span>⏱️ {recipe.time}</span>
                <span>📊 {recipe.difficulty}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
