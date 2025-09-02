"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// 🔹 Schema validasi
const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username minimal 3 karakter" })
    .max(12, { message: "Username maksimal 12 karakter" }),
  age: z.number().min(1, { message: "Umur harus lebih dari 0" }),
  password: z
    .string()
    .min(6, { message: "Password minimal 6 karakter" }),
});

// 🔹 Tipe data otomatis dari schema
type FormData = z.infer<typeof schema>;

export default function Page() {
  const [users, setUsers] = useState<FormData[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  // 🔹 useForm dengan resolver Zod
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  // 🔹 Submit data
  const onSubmit = (data: FormData) => {
    if (editIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editIndex] = data;
      setUsers(updatedUsers);
      setEditIndex(null);
    } else {
      setUsers([...users, data]);
    }
    reset();
  };

  // 🔹 Hapus data
  const handleDelete = (index: number) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  // 🔹 Edit data
  const handleEdit = (index: number) => {
    reset(users[index]); // Isi ulang form
    setEditIndex(index);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-indigo-600">
          User Form
        </h1>

        {/* 🔹 FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3"
        >
          <div>
            <input
              {...register("username")}
              placeholder="Username"
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2 placeholder-gray-500 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 focus:outline-none"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="number"
              {...register("age", { valueAsNumber: true })}
              placeholder="Age"
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2 placeholder-gray-500 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 focus:outline-none"
            />
            {errors.age && (
              <p className="text-red-500 text-sm mt-1">
                {errors.age.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2 placeholder-gray-500 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 focus:outline-none"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className={`w-full py-2 rounded-lg font-medium text-white transition ${
              editIndex !== null
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-indigo-500 hover:bg-indigo-600"
            }`}
          >
            {editIndex !== null ? "Update Data" : "Tambah Data"}
          </button>
        </form>
      </div>

      {/* 🔹 TAMPIL DATA */}
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md mt-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">
          Daftar User
        </h2>
        {users.length === 0 ? (
          <p className="text-gray-500 text-center">Belum ada data</p>
        ) : (
          <ul className="flex flex-col gap-3">
            {users.map((user, index) => (
              <li
                key={index}
                className="border rounded-lg p-3 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition"
              >
                <span className="font-medium text-gray-700">
                  {user.username} <span className="text-sm text-gray-500">({user.age} th)</span>
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="px-3 py-1 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-white text-sm transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="px-3 py-1 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm transition"
                  >
                    Hapus
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
