import { useState } from "react";

const SubmitRecipe = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "Breakfast",
    time: "",
    ingredients: "",
    instructions: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Recipe submitted! (Backend connection pending)");
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <div className="bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Submit Your Recipe
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Recipe Title
            </label>
            <input
              type="text"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              placeholder="e.g. Grandma's Famous Lasagna"
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Category
              </label>
              <select
                className="w-full p-3 border rounded-lg outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              >
                <option>Breakfast</option>
                <option>Vegan</option>
                <option>Desserts</option>
                <option>Dinner</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Cooking Time (mins)
              </label>
              <input
                type="number"
                required
                className="w-full p-3 border rounded-lg outline-none"
                placeholder="45"
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Ingredients (one per line)
            </label>
            <textarea
              rows="4"
              required
              className="w-full p-3 border rounded-lg outline-none"
              placeholder="2 Eggs&#10;1 cup Flour"
              onChange={(e) =>
                setFormData({ ...formData, ingredients: e.target.value })
              }
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Instructions
            </label>
            <textarea
              rows="6"
              required
              className="w-full p-3 border rounded-lg outline-none"
              placeholder="Step 1: Boil water..."
              onChange={(e) =>
                setFormData({ ...formData, instructions: e.target.value })
              }
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white font-bold py-4 rounded-lg hover:bg-orange-700 transition"
          >
            Post Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitRecipe;
