import { motion } from "framer-motion";
import john from "../../assets/images/hero.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      position: "Software Engineer",
      quote:
        "MUTC provided me with invaluable networking opportunities and helped me grow both personally and professionally.",
      image: { john },
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Data Scientist",
      quote:
        "Being a part of MUTC was a game-changer for my career. The community and resources available are top-notch.",
      image: "/assets/carol.jpg",
    },
    {
      id: 3,
      name: "Alice Johnson",
      position: "UI/UX Designer",
      quote:
        "MUTC is where I discovered my passion for design. The hands-on projects and mentorship were incredibly valuable.",
      image: "/images/alice",
    },
    {
      id: 4,
      name: "Bob Brown",
      position: "Product Manager",
      quote:
        "The skills and knowledge I gained at MUTC helped me transition into a product management role seamlessly.",
      image: "/images/bob-brown.jpg",
    },
    {
      id: 5,
      name: "Carol White",
      position: "Frontend Developer",
      quote:
        "MUTC's focus on innovation and practical experience prepared me well for the challenges in the tech industry.",
      image: "/images/carol-white.jpg",
    },
    {
      id: 6,
      name: "Dave Black",
      position: "Backend Developer",
      quote:
        "The collaborative environment at MUTC pushed me to enhance my coding skills and learn new technologies.",
      image: "/images/dave-black.jpg",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white shadow-sm rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95 }}>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">{testimonial.quote}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
