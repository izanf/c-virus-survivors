import { useRef } from 'react';

import useOnClickOutside from '../hooks/useOnClickOutside';

import Button from './Button';

interface IModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose, children }: IModalProps) {
  const contentRef = useRef(null);

  useOnClickOutside(contentRef, onClose);

  if (!isOpen) return null;

  return (
    <div className="fixed bg-black/[.2] top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div ref={contentRef} className="bg-white p-6 rounded-lg min-w-80 max-w-md w-full">
        <div className="flex justify-between py-2">
          <h2 className="font-semibold text-haiti">Add Survivor</h2>
          <button onClick={onClose}>x</button>
        </div>
        <div className="py-8 grid gap-4">
          {children}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Button onClick={onClose}>Cancel</Button>
          <Button variant="primary">Add Survivor</Button>
        </div>
      </div>
    </div>
  );
};
