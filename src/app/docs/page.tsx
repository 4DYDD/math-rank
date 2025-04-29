"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGamepad,
  faTrophy,
  faClock,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">
          Tutorial Bermain Game Matematika
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FontAwesomeIcon icon={faGamepad} className="text-primary mr-2" />
            Cara Bermain
          </h2>
          <ol className="list-decimal pl-6 space-y-4">
            <li className="text-gray-700">
              Klik tombol "Start Game" untuk memulai permainan
            </li>
            <li className="text-gray-700">
              Anda akan mendapatkan 10 pertanyaan matematika secara acak
            </li>
            <li className="text-gray-700">
              Setiap pertanyaan memiliki 2 pilihan jawaban
            </li>
            <li className="text-gray-700">
              Pilih jawaban yang menurut Anda benar dengan mengklik salah satu
              pilihan
            </li>
            <li className="text-gray-700">
              Setelah menjawab, Anda akan langsung mendapatkan pertanyaan
              berikutnya
            </li>
            <li className="text-gray-700">
              Setelah 10 pertanyaan selesai, Anda akan melihat hasil permainan
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FontAwesomeIcon icon={faTrophy} className="text-secondary mr-2" />
            Sistem Skor
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-secondary mt-1 mr-2"
              />
              <span className="text-gray-700">
                Setiap jawaban benar mendapatkan 10 poin
              </span>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-secondary mt-1 mr-2"
              />
              <span className="text-gray-700">
                Skor total adalah jumlah jawaban benar dikali 10
              </span>
            </li>
            <li className="flex items-start">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-secondary mt-1 mr-2"
              />
              <span className="text-gray-700">
                Riwayat skor disimpan di browser Anda
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FontAwesomeIcon icon={faClock} className="text-primary mr-2" />
            Statistik Permainan
          </h2>
          <p className="text-gray-700 mb-4">
            Di akhir permainan, Anda akan melihat statistik berikut:
          </p>
          <ul className="space-y-2">
            <li className="text-gray-700">• Total skor yang didapat</li>
            <li className="text-gray-700">• Jumlah jawaban benar</li>
            <li className="text-gray-700">• Jumlah jawaban salah</li>
            <li className="text-gray-700">
              • Rata-rata waktu menjawab per soal
            </li>
          </ul>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all"
          >
            Mulai Bermain
          </Link>
        </div>
      </div>
    </main>
  );
}
