export const AddMovieModal = () => {
  {
    addMovieModal && (
      <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-sky-900 bg-opacity-20 backdrop-blur-lg z-20">
        <div className="p-4 rounded-lg text-slate-50 bg-sky-800 max-w-full max-h-full overflow-auto">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required=""
            ></input>
          </div>
        </div>
      </div>
    );
  }
};
