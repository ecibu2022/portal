import { useState } from 'react';
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/16/solid';
import { CheckIcon } from '@heroicons/react/20/solid';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const locations = [
    { id: 0, name: 'Select a location' },
    { id: 1, name: 'Kampala' },
    { id: 2, name: 'Mbarara' },
    { id: 3, name: 'Gulu' }
  ];

  const [selected, setSelected] = useState(locations[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate the registration process with a timeout
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would typically make the actual API call to register the user
      console.log('User registered with:', {
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        location: selected.name,
        password: e.target.password.value,
      });

      // Show success alert and redirect to login after a short delay
      setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
        navigate('/login'); // Redirect to login page
      }, 3000);
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
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
            {/* Name Field */}
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
                  className="block w-full rounded-md bg-white px-3 py-1 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-800 sm:text-sm"
                />
              </div>
            </div>

            {/* Email Field */}
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
                  className="block w-full rounded-md bg-white px-3 py-1 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-800 sm:text-sm"
                />
              </div>
            </div>

            {/* Phone Field */}
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
                  className="block w-full rounded-md bg-white px-3 py-1 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-800 sm:text-sm"
                />
              </div>
            </div>

            {/* Location Field */}
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

            {/* Password Field */}
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
                  className="block w-full rounded-md bg-white px-3 py-1 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-cyan-800 sm:text-sm"
                />
              </div>
            </div>

            {/* Confirm Password Field */}
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

            {/* Submit Button */}
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

          {/* Success Alert */}
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
