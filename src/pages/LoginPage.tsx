export default function LoginPage() {
  return (
    <div className="flex min-h-screen m-14">
      <div className="w-1/2 bg-gray-800 relative">
        <img
          src="/api/placeholder/600/800"
          alt="Woman studying with notebook and laptop"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 bg-yellow-50 flex flex-col justify-center items-center px-16">
        <div className=" max-w-md">
          <h1 className="text-3xl font-bold mb-10 text-gray-800">
            Sign in to Law of Assumption
          </h1>

          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-gray-700">
                Email ID
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="block text-gray-700">
                  Password
                </label>
                <a
                  href="#"
                  className="text-gray-700 hover:text-amber-600 text-sm"
                >
                  Forgot?
                </a>
              </div>
              <input
                id="password"
                type="password"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <p className="text-gray-700">
                Don't have an account?{" "}
                <a href="#" className="text-amber-600 hover:underline">
                  Sign up
                </a>
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-white py-3 rounded-md hover:from-amber-500 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
