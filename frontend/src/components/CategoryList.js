import Link from 'next/link';
import { MobileScreenShare, Tv, DevicesOther, Laptop, Headphones, Kitchen, Camera, Watch } from '@mui/icons-material';

const categories = [
  { name: 'Mobiles', icon: <MobileScreenShare />, query: 'mobiles' },
  { name: 'TVs', icon: <Tv />, query: 'tvs' },
  { name: 'Electronics', icon: <DevicesOther />, query: 'electronics' },
  { name: 'Laptops', icon: <Laptop />, query: 'laptops' },
  { name: 'Headphones', icon: <Headphones />, query: 'headphones' },
  { name: 'Ovens', icon: <Kitchen />, query: 'ovens' },
  { name: 'Cameras', icon: <Camera />, query: 'cameras' },
  { name: 'Watches', icon: <Watch />, query: 'watches' },
  { name: 'Appliances', icon: <Kitchen />, query: 'appliances' },
];

const CategoryList = () => {
  return (
    <div className="p-4 bg-white overflow-x-auto">
      <div className="flex flex-nowrap space-x-4 justify-between">
        {categories.map((category) => (
          <Link
            key={category.query}
            href={`?category=${category.query}`}
            className="flex flex-col items-center text-center p-2 hover:bg-gray-200 rounded-md transition duration-300 min-w-max"
          >
            <div className="text-4xl mb-2">{category.icon}</div>
            <span className="font-semibold">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
