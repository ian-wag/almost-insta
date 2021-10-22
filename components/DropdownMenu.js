import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';
import {
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
} from '@heroicons/react/outline';
import {
  HeartIcon as HeartIconFilled,
  PaperAirplaneIcon as PaperAirplaneIconFilled,
  PlusCircleIcon as PlusCircleIconFilled,
  UserGroupIcon as UserGroupIconFilled,
} from '@heroicons/react/solid';

export default function Example() {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex md:hidden justify-center w-full px-2 py-2 text-sm font-medium text-black rounded-md hover:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <MenuIcon className="w-5 h-5" aria-hidden="true" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-30 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'text-white bg-red-500' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <PaperAirplaneIconFilled
                        className="w-5 h-5 mr-2 rotate-45"
                        aria-hidden="true"
                      />
                    ) : (
                      <PaperAirplaneIcon className="w-5 h-5 mr-2 rotate-45" aria-hidden="true" />
                    )}
                    Messages
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setOpen(true)}
                    className={`${
                      active ? 'text-white bg-red-500' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <PlusCircleIconFilled className="w-5 h-5 mr-2" aria-hidden="true" />
                    ) : (
                      <PlusCircleIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    )}
                    Upload
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'text-white bg-red-500' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <UserGroupIconFilled className="w-5 h-5 mr-2" aria-hidden="true" />
                    ) : (
                      <UserGroupIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    )}
                    Discover
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'text-white bg-red-500' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <HeartIconFilled className="w-5 h-5 mr-2" aria-hidden="true" />
                    ) : (
                      <HeartIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                    )}
                    Activity
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
