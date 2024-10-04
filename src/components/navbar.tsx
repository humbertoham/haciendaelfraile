'use client'

import Image from 'next/image'
import Link from 'next/link'

import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
  } from '@headlessui/react'
  import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
  
  const navigation = [
    { name: 'Inicio', href: '/', current: false },
    { name: 'Sobre Nosotros', href: '/sobrenosotros', current: false },
    { name: 'Hacienda', href: '/hacienda', current: false },
    { name: 'Reglamento', href: '/reglamento', current: false },
  ]
  
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Navbar() {
    return (
      <Disclosure as="nav" className="nav">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                  {/* Mobile menu button*/}
                  <DisclosureButton className="relative inline-flex items-center ham text-black justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6 " aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center mt-14 md:items-stretch md:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <Link href="/">
                    <Image
                      className="logo"
                      src="./images/logo.svg"
                      alt="Hacienda El Fraile"
                      width={100}
                      height={100}
                    />
                    </Link>
                  </div>
                  <div className="hidden mt-4 pl-10 md:ml-6 md:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-black txt rounded-md px-3 py-2 text-lg font-medium"
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
  
            <DisclosurePanel className="md:hidden mt-6">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="text-black navt block rounded-md px-3 py-2 text-md font-medium"
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    )
  }
  