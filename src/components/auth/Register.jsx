import { useState } from 'react';
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/16/solid';
import { CheckIcon } from '@heroicons/react/20/solid';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../../connect/Connect';

export default function Register() {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryToSupply, setCategoryToSupply] = useState([]);
  const [error, setError] = useState('');

  const locations = [
    { id: 0, name: 'Select a location' },
    { id: 1, name: 'Kampala' },
    { id: 2, name: 'Mbarara' },
    { id: 3, name: 'Gulu' }
  ];

  const categories = ['Supplies', 'Works', 'Services'];

  const handleCategoryChange = (category) => {
    setCategoryToSupply((prev) => {
      if (prev.includes(category)) {
        return prev.filter((cat) => cat !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const [selected, setSelected] = useState(locations[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
  
    const formData = new FormData();
    formData.append('fullname', fullname);
    formData.append('username', username);
    formData.append('email', email);
    if (avatar) formData.append('avatar', avatar);
    if (coverImage) formData.append('coverImage', coverImage);
    formData.append('password', password);
    formData.append('location', selected.name);
    formData.append('phone', phone);
    formData.append('categoryToSupply', JSON.stringify(categoryToSupply.map((category) => category.toLowerCase())));

    try {
      const response = await signup(formData);
  
      setIsLoading(false);
      setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
        navigate('/');
      }, 5000);
    } catch (error) {
      setError(`Failed to signup: ${error.message}`);
      setIsLoading(false);
    }
  };
  
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-18 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="watoto"
            src="./src/assets/watoto.png"
            className="mx-auto h-10 w-auto"
          />

          <h2 className="mt-4 text-center text-2xl font-bold tracking-tight text-gray-900">
            Create an account
          </h2>
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  disabled={isLoading}
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-800 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  disabled={isLoading}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-800 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                Phone Number
              </label>
              <div className="mt-1">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  required
                  autoComplete="phone"
                  disabled={isLoading}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-800 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <Listbox value={selected} onChange={setSelected}>
                <Label className="block text-sm font-medium text-gray-900">Location</Label>
                <div className="relative mt-1">
                  <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-cyan-800 sm:text-sm">
                    <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                      <span className="block truncate">{selected.name}</span>
                    </span>
                    <ChevronUpDownIcon
                      aria-hidden="true"
                      className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                  </ListboxButton>

                  <ListboxOptions
                    transition
                    className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden"
                  >
                    {locations.map((location) => (
                      <ListboxOption
                        key={location.id}
                        value={location}
                        onChange={() => setSelected(location)}
                        className="group relative cursor-default py-1 pr-9 pl-3 text-gray-900 select-none data-focus:bg-cyan-800 data-focus:text-white"
                      >
                        <div className="flex items-center">
                          <span className="block truncate font-normal">{location.name}</span>
                        </div>

                        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-900 group-not-data-selected:hidden group-data-focus:text-white">
                          <CheckIcon aria-hidden="true" className="size-5" />
                        </span>
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </div>
              </Listbox>
            </div>

              {/* Categories Multi-Select Component */}
              <div>
              <Listbox value={categoryToSupply} onChange={setCategoryToSupply} multiple>
                <Label className="block text-sm font-medium text-gray-900">Categories to Supply</Label>
                <div className="relative mt-1">
                  <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-cyan-800 sm:text-sm">
                    <span className="col-start-1 row-start-1 flex flex-wrap items-center gap-1 pr-6">
                      {categoryToSupply.length > 0 ? (
                        categoryToSupply.map((category) => (
                          <span 
                            key={category} 
                            className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-cyan-100 text-cyan-800"
                          >
                            {category}
                          </span>
                        ))
                      ) : (
                        <span className="text-gray-500">Select categories</span>
                      )}
                    </span>
                    <ChevronUpDownIcon
                      aria-hidden="true"
                      className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                  </ListboxButton>

                  <ListboxOptions
                    transition
                    className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden"
                  >
                    {categories.map((category) => (
                      <ListboxOption
                        key={category}
                        value={category}
                        className={({ active, selected }) => 
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? 'bg-cyan-800 text-white' : 'text-gray-900'
                          }`
                        }
                      >
                        {({ active, selected }) => (
                          <>
                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                              {category}
                            </span>
                            {selected ? (
                              <span 
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? 'text-white' : 'text-cyan-800'
                                }`}
                              >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </div>
              </Listbox>
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-900">
                Username
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  disabled={isLoading}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-800 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="avatar" className="block text-sm font-medium text-gray-900">
                Profile Picture
              </label>
              <div className="mt-1">
                <input
                  id="avatar"
                  name="avatar"
                  type="file"
                  accept='image/*'
                  required
                  autoComplete="avatar"
                  disabled={isLoading}
                  onChange={(e) => setAvatar(e.target.files[0])}
                  className="block w-full rounded-md bg-white px-3 py-1 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-800 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="coverImage" className="block text-sm font-medium text-gray-900">
                Cover Image
              </label>
              <div className="mt-1">
                <input
                  id="coverImage"
                  name="coverImage"
                  type="file"
                  accept='image/*'
                  required
                  autoComplete="coverImage"
                  disabled={isLoading}
                  onChange={(e) => setCoverImage(e.target.files[0])}
                  className="block w-full rounded-md bg-white px-3 py-1 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-800 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  disabled={isLoading}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-800 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  autoComplete="current-password"
                  disabled={isLoading}
                  className="block w-full rounded-md bg-white px-3 py-1 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-800 sm:text-sm"
                />
              </div>
            </div>

            {error && (
              <div className="mt-4 text-center text-sm text-red-800">{error}</div>
            )}

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full justify-center rounded-md bg-cyan-800 px-3 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer disabled:opacity-70"
              >
                {isLoading ? 'Registering...' : 'Sign up'}
              </button>
            </div>
          </form>

          {showSuccessAlert && (
            <div className="mt-4 text-center text-sm text-green-800">
              Registration Successful! You will be redirected to the login page.
            </div>
          )}

          <p className="mt-8 text-center text-sm text-gray-500">
            Already a member?{' '}
            <Link to="/login" className="font-semibold text-cyan-800 hover:text-gray-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
