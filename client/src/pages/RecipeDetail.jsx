import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();

  // This will eventually be: const [recipe, setRecipe] = useState(null) + useEffect
  const recipe = {
    title: "Vegan Buddha Bowl",
    category: "Vegan",
    time: "20 mins",
    difficulty: "Medium",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
    ingredients: [
      "1 cup Quinoa",
      "1 Avocado",
      "Handful of Spinach",
      "Tahini Dressing",
    ],
    instructions: [
      "Cook quinoa according to package instructions.",
      "Slice the avocado and prepare the greens.",
      "Assemble all ingredients in a bowl.",
      "Drizzle with tahini and serve.",
    ],
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-96 object-cover rounded-2xl mb-8 shadow-md"
      />

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold text-gray-900">{recipe.title}</h1>
        <div className="text-xl font-semibold text-orange-600">
          ⭐ {recipe.rating}
        </div>
      </div>

      <div className="flex gap-4 mb-8 text-sm font-medium text-gray-500">
        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
          {recipe.category}
        </span>
        <span>⏱️ {recipe.time}</span>
        <span>📊 {recipe.difficulty}</span>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Ingredients</h2>
          <ul className="space-y-2">
            {recipe.ingredients.map((ing, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                {ing}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">
            Instructions
          </h2>
          <ol className="space-y-6">
            {recipe.instructions.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-bold text-orange-600 text-xl">
                  {i + 1}.
                </span>
                <p className="text-gray-700 leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
