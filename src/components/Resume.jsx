import React from 'react';

export default function Resume() {
  return (
    <section id="resume" className="py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-extrabold tracking-tight">Resume</h2>

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 bg-slate-800/60 hover:bg-slate-700 rounded-md text-sm font-semibold"
            >
              Open PDF
            </a>
            <a
              href="/resume.pdf"
              download="G Raajidha Resume.pdf"
              className="px-3 py-2 bg-sky-500 hover:bg-sky-400 text-white rounded-md text-sm font-semibold"
            >
              Download
            </a>
          </div>
        </div>

        <div className="border border-slate-700 rounded-lg overflow-hidden" style={{ height: 800 }}>
          <object
            data="/resume.pdf"
            type="application/pdf"
            className="w-full h-full"
          >
            <div className="flex flex-col items-center justify-center h-full gap-3 p-6 text-center bg-slate-950/90 text-slate-300">
              <p className="text-base font-medium">PDF preview is not available in this browser.</p>
              <p className="max-w-md text-sm text-slate-400">
                Click the button below to open or download the canonical resume file.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-slate-800/70 hover:bg-slate-700 rounded-md text-sm font-semibold"
                >
                  Open Resume
                </a>
                <a
                  href="/resume.pdf"
                  download="G Raajidha Resume.pdf"
                  className="px-4 py-2 bg-sky-500 hover:bg-sky-400 text-white rounded-md text-sm font-semibold"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </object>
        </div>
      </div>
    </section>
  );
}
