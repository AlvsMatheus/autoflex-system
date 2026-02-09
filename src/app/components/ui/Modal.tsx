"use client";

import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <section
      onClick={onClose}
      className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-black/60"
    >
      <section
        onClick={(e) => e.stopPropagation()}
        className="md:overflow-auto bg-white md:h-[90%] lg:h-auto w-[90%] max-w-xl rounded-2xl border-2 border-emerald-400 shadow-lg p-6 flex flex-col gap-6"
      >
        {title && (
          <header className="flex justify-between items-center border-b pb-2">
            <h2 className="text-lg font-bold uppercase text-blue-950">
              {title}
            </h2>

            <button
              onClick={onClose}
              className="text-black/60 hover:text-black"
            >
              ✕
            </button>
          </header>
        )}

        <div>{children}</div>
      </section>
    </section>
  );
};

export default Modal;
