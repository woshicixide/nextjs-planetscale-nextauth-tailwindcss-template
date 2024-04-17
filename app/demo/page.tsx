'use client';

import Image from 'next/image';
import { useRef } from 'react';
import EmailEditor from 'react-email-editor';

export default function Demo() {
  // const emailEditorRef = useRef(null);

  // const exportHtml = () => {
  //   emailEditorRef.current.editor.exportHtml((data: any) => {
  //     const { design, html } = data;
  //     console.log('exportHtml', html);
  //   });
  // };

  // const onReady = () => {
  //   // editor is ready
  //   // you can load your template here;
  //   // const templateJson = {};
  //   // emailEditorRef.current.editor.loadDesign(templateJson);
  // };

  return (
    <main className="p-4 border border-green-700 bg-red-100 md:p-10 mx-auto max-w-7xl">
      {/* <div>
        <div>
          <button onClick={exportHtml}>Export HTML</button>
        </div>

        <EmailEditor ref={emailEditorRef} onReady={onReady} />
      </div> */}
      <div className="p-6 border-cyan-600 aspect-auto	 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <Image
            width={120}
            height={120}
            src="/img/logo.svg"
            className="h-12 w-12"
            alt="ChitChat Logo"
          />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>
    </main>
  );
}
