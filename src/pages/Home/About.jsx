const About = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Welcome to the Murang'a University Tech Club (MUTC). We are
            dedicated to fostering technological learning and innovation among
            our members.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="px-6 py-8">
              <h3 className="text-lg font-medium text-gray-900">Our Mission</h3>
              <p className="mt-2 text-sm text-gray-600">
                To drive innovation, foster collaboration, and inspire the next
                generation of tech leaders.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="px-6 py-8">
              <h3 className="text-lg font-medium text-gray-900">Our Values</h3>
              <p className="mt-2 text-sm text-gray-600">
                Innovation, Collaboration, Learning, Excellence.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="px-6 py-8">
              <h3 className="text-lg font-medium text-gray-900">
                Our Objectives
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                To make cities more efficient, sustainable, and connected
                through cutting-edge research, development, and education.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="px-6 py-8">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Our Achievements
              </h3>
              <p className="text-sm text-gray-600">
                Awarded "Best Technological Innovation" by TechExpo 2021.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
