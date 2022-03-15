import {Link} from '@shopify/hydrogen/client';

/**
 * A client component that defines the navigation for a web storefront
 */
export default function Navigation({collections}) {
  return (
    <nav className="hidden lg:block text-center">
      <ul className="md:flex items-center justify-center">
      <li class="mr-6">
    <a class="text-blue-500 hover:text-blue-800" href="#">Home</a>
  </li>
  <li class="mr-6">
    <a class="text-blue-500 hover:text-blue-800" href="#">Products</a>
  </li>
  <li class="mr-6">
    <a class="text-blue-500 hover:text-blue-800" href="#">About</a>
  </li>
  
      </ul>
    </nav>
  );
}
