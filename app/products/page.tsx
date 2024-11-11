"use client";

export default function Products() {
  const laptops = [
    {
      name: 'Dell XPS 13',
      description: '13.4-inch FHD display, Intel Core i7, 16GB RAM, 512GB SSD',
      image: '/laptop3.jpg',
    },
    {
      name: 'MacBook Air M2',
      description: '13.6-inch Retina display, Apple M2 chip, 8GB RAM, 256GB SSD',
      image: '/view2.avif',
    },
    {
      name: 'HP Spectre x360',
      description: '14-inch UHD OLED display, Intel Core i7, 16GB RAM, 1TB SSD',
      image: '/laptop3.jpg',
    },
    {
      name: 'Lenovo ThinkPad X1 Carbon',
      description: '14-inch FHD display, Intel Core i7, 16GB RAM, 512GB SSD',
      image: '/laptop4.webp',
    },
    {
      name: 'Asus ZenBook 14',
      description: '14-inch FHD display, AMD Ryzen 7, 16GB RAM, 512GB SSD',
      image: '/laptop5.jpg',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {laptops.map((laptop, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative w-full h-64">
              <img
                src={laptop.image}
                alt={laptop.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-semibold">{laptop.name}</h2>
              <p className="text-gray-600 mt-2">{laptop.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
