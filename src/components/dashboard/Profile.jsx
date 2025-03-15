import React from "react";

const Profile = () => {
  return (
    <div className="flex-1 p-4 bg-gray-100">
      <h1 className='text-3xl font-semibold mb-6'>Profile</h1>

      <div className="mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Cover Image */}
        <div className="relative">
          <img
            src="https://unsplash.com/photos/slightly-opened-silver-macbook-mP7aPSUm7aE"
            alt="Cover"
            className="w-full h-60 object-cover"
          />
          <div className="absolute bottom-0 left-4 transform translate-y-1/2">
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>

        {/* Profile Content */}
        <div className="pt-16 px-6 pb-6">
          <h2 className="text-xl font-bold text-gray-900">Ecibu Michael</h2>
          <p className="text-gray-500">Manufacturer</p>

          {/* Bio */}
          <p className="mt-2 text-gray-500 text-sm">michaelecibu@gmail.com</p>
          <p className="mt-2 text-gray-600 text-sm">0773665471</p>

        </div>
      </div>

    </div>
  );
};

export default Profile;
