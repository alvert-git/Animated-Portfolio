
import {EXTRA} from "../lib/data"

const Others = () => {
  // We define specific tailwind classes for each index to create the bento effect
  const getGridStyles = (index) => {
    switch (index) {
      case 0: return "md:col-span-2 md:row-span-2 h-[400px]"; // Large square
      case 1: return "md:col-span-2 h-[200px]";             // Wide rectangle
      case 2: return "md:col-span-1 h-[200px]";             // Small square
      case 3: return "md:col-span-1 h-[200px]";             // Small square
      default: return "md:col-span-2 h-[200px]";            // Fallback
    }
  };

  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-5xl font-extrabold uppercase mb-10">Others / Extra</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {EXTRA.map((item, index) => (
          <div
            key={index}
            className={`${getGridStyles(index)} group relative overflow-hidden rounded-3xl bg-gray-100 dark:bg-gray-900 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1`}
          >
            {/* Image background */}
            <img
              src={item.image}
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <p className="text-white text-lg font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {item.caption}
              </p>
              {/* Decorative line that appears on hover */}
              <div className="w-0 group-hover:w-12 h-1 bg-indigo-500 transition-all duration-500 mt-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Others;