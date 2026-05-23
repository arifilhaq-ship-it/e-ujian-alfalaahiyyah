"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginUjian() {
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("7B");
  const [token, setToken] = useState("");
  const router = useRouter();

  // Mengganti 'any' dengan 'FormEvent' agar Vercel tidak error
  const handleLogin = (e: FormEvent) => { 
    e.preventDefault();
    if (token === "FALAAH2025") {
      alert(`Selamat mengerjakan, ${nama}! Layar akan dikunci.`);
      router.push("/ujian");
    } else {
      alert("Token ujian salah. Silakan hubungi admin atau proktor.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border-t-4 border-green-600">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">CBT MTs Al Falaahiyyah</h1>
          <p className="text-gray-500 text-sm">Tahun Ajaran 2025/2026</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
            <input type="text" required value={nama} onChange={(e) => setNama(e.target.value)} className="mt-1 w-full p-2 border rounded-md" placeholder="Masukkan nama..." />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Kelas</label>
            <select value={kelas} onChange={(e) => setKelas(e.target.value)} className="mt-1 w-full p-2 border rounded-md">
              <option value="7B">Kelas 7B</option>
              <option value="7D">Kelas 7D</option>
              <option value="8A">Kelas 8A</option>
              <option value="8D">Kelas 8D</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Token Ujian</label>
            <input type="text" required value={token} onChange={(e) => setToken(e.target.value)} className="mt-1 w-full p-2 border rounded-md" placeholder="Masukkan token..." />
          </div>

          <button type="submit" className="w-full bg-green-600 text-white p-2 rounded-md font-bold hover:bg-green-700 transition">
            Mulai Ujian
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-gray-400">
          <p>Disusun oleh Arifil Haque</p>
        </div>
      </div>
    </div>
  );
}