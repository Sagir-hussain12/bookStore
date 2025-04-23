import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Cards from './Cards';
import axios from 'axios';

const Course = () => {
  const [book, setBook] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState(""); // 'low-to-high' or 'high-to-low'

  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get("https://bookstore-1-138g.onrender.com/api/book");
        setBook(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        {/* Header Section */}
        <div className="mt-16 items-center justify-center text-center pt-20 pb-10">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>

        {/* Search and Sort Section */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-6 gap-4">
          <input
            type="text"
            placeholder="Search for a book..."
              className="border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white 
             rounded-md px-4 py-2 w-full md:w-1/2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
             className="border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white 
             rounded-md px-4 py-2"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort by Price</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>

        {/* Book Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          {[...book]
            .filter((item) =>
              item.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .sort((a, b) => {
              if (sortOrder === "low-to-high") {
                return a.price - b.price;
              } else if (sortOrder === "high-to-low") {
                return b.price - a.price;
              }
              return 0;
            })
            .map((item) => (
              <Cards key={item.id} item={item} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Course;
