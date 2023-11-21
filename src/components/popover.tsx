"use client"
import { Popover, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

interface PopoverProps {
  children: ReactNode;
  popoverButton: ReactNode;
}

export function PopoverInfo(props: PopoverProps) {
  const { children, popoverButton } = props;

  return (
    <Popover className="relative ">
      {({ open }) => (
        <>
          <Popover.Button className=" flex items-center outline-none">
            {popoverButton}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute mt-3 z-50  px-2 translate-x-[60%] ltr:-translate-x-[60%]">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className=" bg-white p-2 flex flex-col ">{children}</div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
