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
    <main className="min-h-screen bg-gray-100 py-6 px-4 font-medium">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-primary">
          Tutorial Bermain
          <br />
          Game Matematika
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-5 mb-6">
          <h2 className="text-xl font-semibold mb-3 flexc w-full border-b border-b-sky-500 rounded-b-lg pb-4">
            <FontAwesomeIcon
              icon={faGamepad}
              className="text-sky-500 mr-2 w-5"
            />
            <span>Cara Bermain</span>
          </h2>
          <ol className="list-decimal pl-5 space-y-5">
            <li className="text-gray-700 text-sm ps-1">
              Klik tombol "Start Game" untuk memulai permainan.
            </li>
            <li className="text-gray-700 text-sm ps-1">
              Anda akan mendapatkan 10 pertanyaan matematika secara acak.
            </li>
            <li className="text-gray-700 text-sm ps-1">
              Setiap pertanyaan memiliki 2 pilihan jawaban.
            </li>
            <li className="text-gray-700 text-sm ps-1">
              Pilih jawaban yang menurut Anda benar dengan mengklik salah satu
              pilihan.
            </li>
            <li className="text-gray-700 text-sm ps-1">
              Setelah menjawab, Anda akan langsung mendapatkan pertanyaan
              berikutnya.
            </li>
            <li className="text-gray-700 text-sm ps-1">
              Setelah 10 pertanyaan selesai, Anda akan melihat hasil permainan.
            </li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-5 mb-6">
          <h2 className="text-xl font-semibold mb-4 flexc border-b border-b-[var(--color-trophy)] rounded-b-lg pb-4">
            <FontAwesomeIcon
              icon={faTrophy}
              className="text-[var(--color-trophy)] mr-2 w-5"
            />
            <span>Sistem Skor</span>
          </h2>
          <ul className="space-y-5">
            <li className="flex !items-start !justify-start w-full text-left">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-black mt-1 w-3 flex-shrink-0 mr-2"
              />
              <span className="text-gray-700 text-sm leading-5.5">
                Setiap jawaban benar mendapatkan 10 poin
              </span>
            </li>
            <li className="flex !items-start !justify-start w-full text-left">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-black mt-1 w-3 flex-shrink-0 mr-2"
              />
              <span className="text-gray-700 text-sm leading-5.5">
                Skor total adalah jumlah jawaban benar dikali 10
              </span>
            </li>
            <li className="flex !items-start !justify-start w-full text-left">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-black mt-1 w-3 flex-shrink-0 mr-2"
              />
              <span className="text-gray-700 text-sm leading-5.5">
                Riwayat skor disimpan di browser Anda
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-5 mb-6">
          <h2 className="text-xl font-semibold mb-3 flexc w-full border-b border-b-yellow-600 rounded-b-lg pb-4">
            <FontAwesomeIcon
              icon={faClock}
              className="text-yellow-600 mr-2 w-4"
            />
            <span>Statistik Permainan</span>
          </h2>
          <p className="text-gray-700 text-sm mb-3">
            Di akhir permainan, Anda akan melihat statistik berikut :
          </p>
          <ul className="space-y-5">
            <li className="text-gray-700 text-sm">• Total skor yang didapat</li>
            <li className="text-gray-700 text-sm">• Jumlah jawaban benar</li>
            <li className="text-gray-700 text-sm">• Jumlah jawaban salah</li>
            <li className="text-gray-700 text-sm">• Total waktu bermain</li>
          </ul>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="clicked inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-6 rounded-lg text-base transition-all"
          >
            Mulai Bermain
          </Link>
        </div>
      </div>
    </main>
  );
}
