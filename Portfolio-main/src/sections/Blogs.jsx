// src/components/Blogs.jsx
import { useState } from "react";

// Sample blog data (replace with your actual blog data and links)
const blogPosts = [
  {
    id: 1,
    title: "Keycloak: The Modern Way to Secure Your Apps",
    subheading: "This blog describes the benefits of using Keycloak",
    image: "/assets/blog-4.png",
    link: "https://medium.com/@unnatisrivastava0603/keycloak-the-modern-way-to-secure-your-apps-f2b67be8521c",
    techStack: ["Tech 1", "Tech 2"],
  },
  {
    id: 2,
    title: "Load Balancers in System Design",
    subheading: "This blog highlights the importance of load balancers in system design",
    image: "/assets/blog-3.png",
    link: "https://medium.com/@unnatisrivastava0603/load-balancers-in-system-design-5ccec9d28dba",
    techStack: ["Tech 3", "Tech 4"],
  },
  {
    id: 3,
    title: "Here’s Why Software Testing Matters",
    subheading: "This blog highlights why software testing matters for a great software ",
    image: "/assets/blog-2.png",
    link: "https://medium.com/@unnatisrivastava0603/why-software-testing-matters-the-hidden-hero-of-great-software-3260621f1aaa",
    techStack: ["Tech 5", "Tech 6"],
  },
  {
    id: 4,
    title: "My First Open Source Contribution",
    subheading: "This blog describes my first experience in open source contribution.",
    image: "/assets/blog-1.png",
    link: "https://medium.com/@unnatisrivastava0603/my-first-open-source-contribution-3292fa687332",
    techStack: ["Tech 7", "Tech 8"],
  },
];

const Blogs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 2;
  const totalCards = blogPosts.length;
  const maxIndex = totalCards - cardsToShow;

  const moveCarousel = (direction) => {
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex <= maxIndex) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <section className="relative pt-48 px-4" id="blogs">
      <h2 className="text-heading">Blogs</h2>
      <p className="mt-4 text-lg text-gray-500">I write blogs too, have a look at them</p>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      <div className="relative mt-8 flex items-center">
        <button
          onClick={() => moveCarousel(-1)}
          className="bg-black/50 text-white rounded-full p-2 text-2xl hover:bg-black/70 disabled:opacity-50 z-10 -ml-8"
          disabled={currentIndex === 0}
        >
          ‹
        </button>
        <div className="flex-grow overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
          >
            {blogPosts.map((blog) => (
              <div
                key={blog.id}
                className="flex-none w-1/2 px-2 md:w-1/2 lg:w-1/2"
              >
                <div className=" rounded-lg shadow-md overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{blog.title}</h3>
                    <p className="text-gray-600 mt-2">{blog.subheading}</p>
                    <a
                      href={blog.link} // Use the blog.link property here
                      target="_blank" // Opens in a new tab
                      rel="noopener noreferrer" // Recommended for security with target="_blank"
                      className="inline-block mt-4 bg-[#20203C] text-white px-4 py-2 rounded-md hover:bg-[#292929] transition-colors"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => moveCarousel(1)}
          className="bg-black/50 text-white rounded-full p-2 text-2xl hover:bg-black/70 disabled:opacity-50 z-10 -mr-8"
          disabled={currentIndex === maxIndex}
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default Blogs;