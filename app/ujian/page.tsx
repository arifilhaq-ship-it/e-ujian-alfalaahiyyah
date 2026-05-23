"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HalamanUjian() {
  const router = useRouter();

  // Fitur Anti-Curang: Memaksa Fullscreen saat halaman dimuat
  useEffect(() => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch((err) => console.log("Fullscreen diblokir oleh browser"));
    }
  }, []);

  const selesaikanUjian = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    alert("Ujian Selesai. Jawaban Anda telah disimpan.");
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 select-none">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <h2 className="text-xl font-bold">Simulasi Ujian Informatika</h2>
          <div className="text-red-600 font-bold bg-red-100 px-4 py-2 rounded-full">
            Sisa Waktu: 60:00
          </div>
        </div>

        <div className="mb-8">
          <p className="text-lg font-medium text-gray-800 mb-4">1. Apa fungsi utama dari Microsoft Excel?</p>
          <div className="space-y-3">
            <label className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
              <input type="radio" name="q1" className="h-5 w-5" />
              <span>A. Membuat presentasi</span>
            </label>
            <label className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
              <input type="radio" name="q1" className="h-5 w-5" />
              <span>B. Mengolah data angka dan tabel</span>
            </label>
            <label className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
              <input type="radio" name="q1" className="h-5 w-5" />
              <span>C. Mengedit video pembelajaran</span>
            </label>
          </div>
        </div>

        <button onClick={selesaikanUjian} className="bg-red-600 text-white px-6 py-2 rounded-md font-bold hover:bg-red-700">
          Akhiri Ujian
        </button>
      </div>
    </div>
  );
}