import { motion } from 'framer-motion'

const documents = [
  {
    title: 'Annexure E',
    file: '/h_pdf/Annexure E.pdf',
  },
  {
    title: 'Building Safety',
    file: '/h_pdf/Building safety.pdf',
  },
  {
    title: 'Certificate Regarding Location Of School',
    file: '/h_pdf/Certificate Regarding Location Of School.pdf',
  },
  {
    title: 'Fire Safety Certificate',
    file: '/h_pdf/Fire Safety Certificate.pdf',
  },
  {
    title: 'Land Certificate',
    file: '/h_pdf/Land certificate 4.pdf',
  },
  {
    title: 'No Objection Certificate',
    file: '/h_pdf/No Objection Certificate.pdf',
  },
  {
    title: 'PTA Member',
    file: '/h_pdf/PTA member (1).pdf',
  },
  {
    title: 'PTA Members List',
    file: '/h_pdf/PTA Members List (1).pdf',
  },
  {
    title: 'Recognition Certificate',
    file: '/h_pdf/Recognition certificate (1).pdf',
  },
  {
    title: 'Safe Drinking Water',
    file: '/h_pdf/Safe drinking water.pdf',
  },
  {
    title: 'School Document',
    file: '/h_pdf/Image to PDF 20260410 14.58.01.pdf',
  },
  {
    title: 'Trust Deed',
    file: '/h_pdf/trust nodani pramanpatraand trust deed.pdf',
  },
  {
    title: 'Year Calendar 2025-2026',
    file: '/h_pdf/Year Calender -2025-2026 (1).pdf',
  },
]

const HiddenDocuments = () => {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <section className="bg-gradient-to-r from-primary via-blue-700 to-sky-600 text-white py-20">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Mandatory Public Disclosure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mx-auto text-lg md:text-xl opacity-90"
          >
            View all public PDF documents in one place.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {documents.map((document, index) => (
              <motion.article
                key={document.file}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-full flex-col justify-between gap-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                      PDF Document
                    </p>
                    <h2 className="mt-3 text-xl font-semibold text-slate-900">
                      {document.title}
                    </h2>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={document.file}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                      View PDF
                    </a>
                    <a
                      href={document.file}
                      download
                      className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HiddenDocuments
