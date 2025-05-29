'use client';
import { useState, useRef, useEffect } from "react";
import { signOut } from "next-auth/react";

export default function ProfileDropdown({ user }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg w-full focus:outline-none"
        onClick={() => setOpen((v) => !v)}
      >
        <img src={user?.image || "/file.svg"} alt="avatar" className="w-9 h-9 rounded-full object-cover" />
        <div className="text-left">
          <div className="font-bold text-gray-900 text-sm">{user?.name || "Demo User"}</div>
          <div className="text-xs text-gray-500">{user?.email || "demo@email.com"}</div>
        </div>
      </button>
      {open && (
        <div className="absolute left-0 bottom-16 w-56 bg-white rounded-xl shadow-lg border z-20 animate-fade-in">
          <div className="px-5 py-3 border-b font-semibold text-gray-900">My Account</div>
          <button
            className="flex items-center gap-2 px-5 py-3 w-full text-base font-medium text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" strokeWidth="1.5"/></svg>
            Profile
          </button>
          <button
            className="flex items-center gap-2 px-5 py-3 w-full text-base font-medium text-red-500 hover:bg-red-50 border-t"
            onClick={() => signOut({ callbackUrl: "/login" })}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor"><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Log out
          </button>
        </div>
      )}
    </div>
  );
}