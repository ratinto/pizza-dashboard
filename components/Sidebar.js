"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { useState, useRef, useEffect } from "react";
// Import some icons from react-icons
import { FiHome, FiShoppingBag, FiUser, FiSettings, FiPieChart } from "react-icons/fi";
import { MdOutlineLocalPizza } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";

const navLinks = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <FiHome className="w-5 h-5" />,
  },
  {
    title: "Pizza Orders",
    href: "/pizza-orders",
    icon: <MdOutlineLocalPizza className="w-5 h-5" />,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: <FiPieChart className="w-5 h-5" />,
  },
  {
    title: "Notifications",
    href: "/notifications",
    icon: <FaRegBell className="w-5 h-5" />,
  },
  {
    title: "Account",
    href: "/profile",
    icon: <FiUser className="w-5 h-5" />,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: <FiSettings className="w-5 h-5" />,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const user = session?.user || {
    name: "Demo User",
    email: "demo@email.com",
    image: "/file.svg",
  };

  // Mobile sidebar state
  const [open, setOpen] = useState(false);

  // Profile dropdown state
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close profile dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setDropdownOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close sidebar on route change (mobile)
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      {/* Hamburger for mobile */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-30 md:hidden bg-white rounded-full p-2 shadow border"
        aria-label="Open sidebar"
        type="button"
      >
        <svg className="w-6 h-6 text-indigo-700" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"/></svg>
      </button>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed z-30 inset-y-0 left-0 w-64 bg-white border-r flex flex-col transition-transform duration-200 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:z-auto md:flex
        `}
        style={{ minHeight: "100vh" }}
      >
        <div className="px-8 pt-8 pb-4 font-extrabold text-xl text-indigo-600">Pizza Dashboard</div>
        <nav className="flex flex-col flex-1 mt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-8 py-3 text-base rounded-lg font-medium
                ${pathname === link.href
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-gray-700 hover:bg-gray-50"}`}
              onClick={() => setOpen(false)}
            >
              {link.icon}
              {link.title}
            </Link>
          ))}
          <div className="flex-1" />
          {/* Profile dropdown */}
          <div className="px-6 pb-6 relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg w-full focus:outline-none"
              onClick={() => setDropdownOpen((v) => !v)}
              type="button"
            >
              <img src={user.image} alt="avatar" className="w-9 h-9 rounded-full object-cover" />
              <div className="text-left">
                <div className="font-bold text-gray-900 text-sm">{user.name}</div>
                <div className="text-xs text-gray-500">{user.email}</div>
              </div>
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 bottom-16 w-56 bg-white rounded-xl shadow-lg border z-20 animate-fade-in">
                <div className="px-5 py-3 border-b font-semibold text-gray-900">My Account</div>
                <button
                  className="flex items-center gap-2 px-5 py-3 w-full text-base font-medium text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    setDropdownOpen(false);
                    router.push("/profile");
                  }}
                  type="button"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" strokeWidth="1.5"/></svg>
                  Profile
                </button>
                <button
                  className="flex items-center gap-2 px-5 py-3 w-full text-base font-medium text-red-500 hover:bg-red-50 border-t"
                  onClick={() => signOut({ callbackUrl: "/login" })}
                  type="button"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor"><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Log out
                </button>
              </div>
            )}
          </div>
        </nav>
      </aside>
    </>
  );
}