import React from "react";
import { Link, useParams } from "react-router-dom";

const udanBooks = {
  1: {
    id: "1",
    title: "Udan 1",
    cover: "/books/udan.png",
    pdf: "/books/udan1.pdf",
    desc: "Introductory academic book for first-year paramedical students. Covers basic medical terminology and ethics.",
  },
  2: {
    id: "2",
    title: "Udan 2",
    cover: "/books/udan.png",
    pdf: "/books/udan2.pdf",
    desc: "Focuses on human anatomy and physiology fundamentals essential for healthcare education.",
  },
  3: {
    id: "3",
    title: "Udan 3",
    cover: "/books/udan.png",
    pdf: "/books/udan3.pdf",
    desc: "Covers pathology basics, disease processes, and diagnostic concepts.",
  },
  4: {
    id: "4",
    title: "Udan 4",
    cover: "/books/udan.png",
    pdf: "/books/udan4.pdf",
    desc: "Introduces clinical practices, patient care techniques, and hospital safety.",
  },
  5: {
    id: "5",
    title: "Udan 5",
    cover: "/books/udan.png",
    pdf: "/books/udan5.pdf",
    desc: "Explains laboratory procedures and diagnostic equipment handling.",
  },
  6: {
    id: "6",
    title: "Udan 6",
    cover: "/books/udan.png",
    pdf: "/books/udan6.pdf",
    desc: "Radiology fundamentals, X-ray principles, and imaging safety.",
  },
  7: {
    id: "7",
    title: "Udan 7",
    cover: "/books/udan.png",
    pdf: "/books/udan7.pdf",
    desc: "Emergency care, first aid, trauma handling, and patient management.",
  },
  8: {
    id: "8",
    title: "Udan 8",
    cover: "/books/udan.png",
    pdf: "/books/udan8.pdf",
    desc: "Professional ethics, hospital administration, and career readiness.",
  },
};

export default function Udan() {
  const { id } = useParams();
  const book = udanBooks[id];

  if (!book) {
    return (
      <div className="min-h-screen bg-gray-50 px-4 pt-32 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Udan Book Not Found</h2>
        <p className="mt-3 text-gray-600">Please choose a book from Udan 1 to Udan 8.</p>
        <Link
          to="/udan/1"
          className="mt-6 inline-flex rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Go to Udan 1
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 px-4 pb-20 pt-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-wrap gap-3">
          {Object.values(udanBooks).map((item) => (
            <Link
              key={item.id}
              to={`/udan/${item.id}`}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                item.id === id
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-700 shadow-sm hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="grid items-center gap-8 rounded-2xl bg-white p-8 shadow-lg md:grid-cols-2">
          <div className="flex justify-center">
            <img
              src={book.cover}
              alt={book.title}
              className="w-full max-w-xs rounded-xl shadow-md"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Udan Series
            </p>
            <h1 className="mt-3 text-3xl font-bold text-slate-900">{book.title}</h1>

            <p className="mb-6 mt-4 leading-relaxed text-gray-600">{book.desc}</p>

            <a
              href={book.pdf}
              download
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m7 10 5 5 5-5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 21h14" />
              </svg>
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
