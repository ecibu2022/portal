import { Button } from '@headlessui/react';
import React, { useState } from 'react';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleEdit = (product) => {
    setCurrentProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentProduct(null);
  };

  const handleSave = () => {
    setIsModalOpen(false);
  };

  const handleAddItem = () => {
    setIsModalOpen(true);
    setCurrentProduct(null);
  };

  const handleSaveItem = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex-1 p-6 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6">Welcome, Ecibu Michael</h1>

      <Button className="text-white bg-cyan-800 border border-cyan-800 focus:outline-none hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-800 cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        onClick={handleAddItem}>Add Item</Button>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-3 py-3">ID</th>
              <th scope="col" className="px-6 py-3">Inventory Name</th>
              <th scope="col" className="px-6 py-3">Category</th>
              <th scope="col" className="px-6 py-3">Product Classification</th>
              <th scope="col" className="px-6 py-3">Location</th>
              <th scope="col" className="px-6 py-3">Price</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <th scope="row" className="px-3 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">17"</th>
              <td className="px-6 py-3">Apple MacBook Pro 17"</td>
              <td className="px-6 py-3">Supplies</td>
              <td className="px-6 py-3">Electronics</td>
              <td className="px-6 py-3">Kampala</td>
              <td className="px-6 py-3">100,002,999</td>
              <td className="px-6 py-3">

                <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  onClick={() => handleEdit({ id: "17", name: "Apple MacBook Pro 17", category: "Supplies", location: "Kampala", price: "100,002,999" })}>
                  Edit
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <th scope="row" className="px-3 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">17"</th>
              <td className="px-6 py-3">Apple MacBook Pro 17"</td>
              <td className="px-6 py-3">Supplies</td>
              <td className="px-6 py-3">Electronics</td>
              <td className="px-6 py-3">Kampala</td>
              <td className="px-6 py-3">100,002,000</td>
              <td className="px-6 py-3">

                <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  onClick={() => handleEdit({ id: "17", name: "Apple MacBook Pro 17", category: "Supplies", location: "Kampala", price: "100,002,999" })}>
                  Edit
                </button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      {/* Edit Product Modal Form */}
      {isModalOpen && (
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-50"
        >
          <div className="relative p-6 w-full max-w-md bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Edit Product</h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <label className="block text-gray-700 dark:text-gray-200" htmlFor="productName">Product ID</label>
              <input
                id="productID"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-800 sm:text-sm"
                disabled={true}
              />

              <label className="block text-gray-700 dark:text-gray-200" htmlFor="productName">Product Name</label>
              <input
                id="productName"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-800 sm:text-sm"
                disabled={true}
              />

              <label className="block text-gray-700 dark:text-gray-200" htmlFor="category">Category</label>
              <input
                id="category"
                type="text"
                value={currentProduct?.category}
                onChange={(e) => setCurrentProduct({ ...currentProduct, category: e.target.value })}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-800 sm:text-sm"
                disabled={true}
              />

              <label className="block text-gray-700 dark:text-gray-200" htmlFor="productClassification">Product Classification</label>
              <input
                id="productClassification"
                type="text"
                value={currentProduct?.category}
                onChange={(e) => setCurrentProduct({ ...currentProduct, category: e.target.value })}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-800 sm:text-sm"
                disabled={true}
              />

              <label className="block text-gray-700 dark:text-gray-200" htmlFor="location">Location</label>
              <input
                id="location"
                type="text"
                value={currentProduct?.location}
                onChange={(e) => setCurrentProduct({ ...currentProduct, location: e.target.value })}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-800 sm:text-sm"
                disabled={true}
              />

              <label className="block text-gray-700 dark:text-gray-200" htmlFor="price">Price</label>
              <input
                id="price"
                type="text"
                value={currentProduct?.price}
                onChange={(e) => setCurrentProduct({ ...currentProduct, price: e.target.value })}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-800 sm:text-sm"
              />
            </div>

            <div className="flex justify-end mt-4 space-x-4">
              <button
                onClick={handleCloseModal}
                className="py-2 px-5 text-sm font-medium text-gray-900 bg-gray-200 rounded-md dark:text-gray-400 dark:bg-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="py-2 px-5 text-sm font-medium text-white bg-cyan-800 rounded-md hover:bg-cyan-700"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}


      {/* Add Item Modal Form */}
      {isModalOpen && (
        <div
          id="add-item-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-50"
        >
          <div className="relative p-6 w-full max-w-md bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Add Product</h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <label className="block text-gray-700 dark:text-gray-200" htmlFor="productID">Product ID</label>
              <input
                id="productID"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-800 sm:text-sm"
              />

              <label className="block text-gray-700 dark:text-gray-200" htmlFor="productName">Product Name</label>
              <input
                id="productName"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-800 sm:text-sm"
              />

              <label className="block text-gray-700 dark:text-gray-200" htmlFor="category">Category</label>
              <input
                id="category"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-800 sm:text-sm"
              />

              <label className="block text-gray-700 dark:text-gray-200" htmlFor="productClassification">Product Classification</label>
              <input
                id="productClassification"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-800 sm:text-sm"
              />

              <label className="block text-gray-700 dark:text-gray-200" htmlFor="location">Location</label>
              <input
                id="location"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-800 sm:text-sm"
              />

              <label className="block text-gray-700 dark:text-gray-200" htmlFor="price">Price</label>
              <input
                id="price"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-800 sm:text-sm"
              />
            </div>

            <div className="flex justify-end mt-4 space-x-4">
              <button
                onClick={handleCloseModal}
                className="py-2 px-5 text-sm font-medium text-gray-900 bg-gray-200 rounded-md dark:text-gray-400 dark:bg-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveItem}
                className="py-2 px-5 text-sm font-medium text-white bg-cyan-800 rounded-md hover:bg-cyan-700"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default Home;
