"use client";
import { useState } from "react";

const links = ["Home", "About", "Experience", "Projects", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur border-b z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        <span className="font-bold text-xl text-indigo-700">Ain Zulaikha</span>
        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="hover:text-indigo-600">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <ul className="md:hidden px-6 pb-4 space-y-3 bg-white">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>
                {l}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}