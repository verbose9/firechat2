import React, { Component } from "react";
class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="inline-block m-4 bg-gray-100 p-6 rounded-lg w-96">
          <h1 className="text-2xl font-bold text-black mb-4">
            <img src="/dist/google.svg" className="inline-block h-6 mr-3" />{" "}
            Login with Google
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam illo
            quod autem perferendis doloremque sequi nam deleniti similique
            repudiandae in. Explicabo iusto enim vero corrupti eos molestias
            maiores magni libero.
          </p>
          <button className="flex transition transform hover:-translate-y-0.5 hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-100 focus:outline-none mt-3 px-4 py-3 bg-blue-500 text-white rounded-lg">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </span>
            Sign in
          </button>
          <div className="h-0.5 mt-3 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
        </div>
      </div>
    );
  }
}

export default App;
