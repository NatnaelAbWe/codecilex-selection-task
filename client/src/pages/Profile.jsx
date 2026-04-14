const Profile = () => {
  const user = { name: "Chef Guest", email: "guest@example.com" };

  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <div className="bg-white p-8 rounded-2xl shadow-md text-center">
        <div className="w-24 h-24 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
          {user.name.charAt(0)}
        </div>
        <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
        <p className="text-gray-500 mb-8">{user.email}</p>

        <div className="border-t pt-6">
          <button className="text-red-600 font-semibold hover:text-red-700">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
