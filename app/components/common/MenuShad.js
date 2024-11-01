import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import car from '../routes/blog/car.png';
import Image from 'next/image';

function MenuShad() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className=''>Item One</NavigationMenuTrigger>
          <NavigationMenuContent className='bg-white text-gray-800 p-4 shadow-md rounded-md'>
            <div className='grid gap-3'>
              <h1 className='text-2xl font-bold'>Title</h1>
              <p className='text-gray-600'>What&apos;s good</p>
              <Image
                src={car}
                alt='Car Image'
                className='md:max-w-xs lg:max-w-sm xl:max-w-md rounded-md'
              />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className=''>Item One</NavigationMenuTrigger>
          <NavigationMenuContent className='bg-white text-gray-800 p-4 shadow-md rounded-md'>
            <div className='grid gap-3'>
              <h1 className='text-2xl font-bold'>Title</h1>
              <p className='text-gray-600'>What&apos;s good</p>
              <Image
                src={car}
                alt='Car Image'
                className='md:max-w-xs lg:max-w-sm xl:max-w-md rounded-md'
              />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className=''>Item One</NavigationMenuTrigger>
          <NavigationMenuContent className='bg-white text-gray-800 p-4 shadow-md rounded-md'>
            <div className='grid gap-3'>
              <h1 className='text-2xl font-bold'>Title</h1>
              <p className='text-gray-600'>What&apos;s good</p>
              <Image
                src={car}
                alt='Car Image'
                className='md:max-w-xs lg:max-w-sm xl:max-w-md rounded-md'
              />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default MenuShad;
