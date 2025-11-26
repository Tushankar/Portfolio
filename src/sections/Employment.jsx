const Employment = () => {
  return (
    <section className="c-space my-20" id="employment">
      <p className="head-text">Current Employment</p>

      <div className="work-container mt-12">
        {/* Left Column - Company Info + About */}
        <div className="col-span-1 flex flex-col gap-5">
          {/* Company Info Card */}
          <div className="rounded-lg bg-black-200 border border-black-300 p-6 flex flex-col">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src="https://kyptronix.us/images/Kyptronix-logo.svg"
                  alt="Kyptronix Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 className="grid-headtext">Kyptronix LLP</h2>
                <a
                  href="https://kyptronix.us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white-600 hover:text-white transition-colors text-sm"
                >
                  kyptronix.us →
                </a>
              </div>
            </div>

            <div className="space-y-4 flex-1">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <p className="text-white-800 font-semibold">
                  Full Stack Developer
                </p>
              </div>
              <div className="grid-subtext">
                <p className="mb-1">September 2025 - Present</p>
                <p>Full-Time • Remote</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-black-300">
              <p className="text-white-500 text-xs uppercase tracking-wider mb-3">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "React Native", "Node.js", "Express"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs text-white-600 bg-black-300 rounded-md border border-black-500 whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* About Company Card */}
          <div className="rounded-lg bg-black-200 border border-black-300 p-6">
            <div className="flex items-center gap-3 mb-4">
              <svg
                className="w-5 h-5 text-white-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <p className="font-bold text-white-800">About Kyptronix LLP</p>
            </div>
            <p className="text-white-600 text-sm leading-relaxed">
              Kyptronix is an innovative technology company focused on building
              cutting-edge web and mobile solutions. As a Full Stack Developer,
              I'm part of a talented team dedicated to creating products and
              services that make a real impact in the digital landscape.
            </p>
          </div>
        </div>

        {/* Responsibilities & Details - Similar to work-content style */}
        <div className="col-span-2 rounded-lg bg-black-200 border border-black-300">
          <div className="sm:py-10 py-5 sm:px-5 px-2.5">
            {/* Responsibilities */}
            <div className="work-content_container group mb-2">
              <div className="flex flex-col h-full justify-start items-center py-2">
                <div className="work-content_logo bg-black-600 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                </div>
                <div className="work-content_bar" />
              </div>
              <div className="sm:p-5 px-2.5 py-5">
                <p className="font-bold text-white-800">Key Responsibilities</p>
                <p className="text-sm mb-5 text-white-600">
                  What I do on a daily basis
                </p>
                <ul className="space-y-2 group-hover:text-white transition-all ease-in-out duration-500 text-white-600">
                  <li className="flex gap-2 items-start">
                    <span className="text-white-500 mt-0.5">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                    <span>
                      Building scalable web applications and mobile apps
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-white-500 mt-0.5">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                        />
                      </svg>
                    </span>
                    <span>
                      Developing frontend interfaces using React and React
                      Native
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-white-500 mt-0.5">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                        />
                      </svg>
                    </span>
                    <span>
                      Creating robust backend services with Node.js and Express
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-white-500 mt-0.5">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                        />
                      </svg>
                    </span>
                    <span>
                      Managing databases and implementing RESTful APIs
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-white-500 mt-0.5">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                    </span>
                    <span>
                      Integrating third-party APIs and cloud services (Firebase,
                      AWS)
                    </span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-white-500 mt-0.5">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </span>
                    <span>
                      Implementing authentication and security features
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Focus Areas */}
            <div className="work-content_container group mb-2">
              <div className="flex flex-col h-full justify-start items-center py-2">
                <div className="work-content_logo bg-black-600 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="work-content_bar" />
              </div>
              <div className="sm:p-5 px-2.5 py-5">
                <p className="font-bold text-white-800">Focus Areas</p>
                <p className="text-sm mb-5 text-white-600">
                  Primary domains I work in
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 group-hover:text-white transition-all ease-in-out duration-500">
                  <div>
                    <p className="text-white-800 font-medium text-sm mb-1">
                      Web Applications
                    </p>
                    <p className="text-white-600 text-xs">
                      Full-stack development with modern frameworks
                    </p>
                  </div>
                  <div>
                    <p className="text-white-800 font-medium text-sm mb-1">
                      Mobile Apps
                    </p>
                    <p className="text-white-600 text-xs">
                      Cross-platform iOS & Android development
                    </p>
                  </div>
                  <div>
                    <p className="text-white-800 font-medium text-sm mb-1">
                      Product Development
                    </p>
                    <p className="text-white-600 text-xs">
                      End-to-end product building & shipping
                    </p>
                  </div>
                  <div>
                    <p className="text-white-800 font-medium text-sm mb-1">
                      Cloud & DevOps
                    </p>
                    <p className="text-white-600 text-xs">
                      Firebase, AWS integration & deployment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Employment;
