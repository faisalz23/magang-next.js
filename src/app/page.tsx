import Link from "next/link";

export default function Home() {
  const links = [
    { href: "/calculator", label: "Calculator" },
    { href: "/form-tugas", label: "Form" },
    { href: "/api/products", label: "Get Products" },
    { href: "/api/products/id", label: "Detail Products" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-white mb-6">
          My Project
        </h1>
        <div className="flex flex-col gap-4">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="block text-center text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 py-3 rounded-xl shadow-md"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}