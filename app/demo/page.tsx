import Image from 'next/image';

export default function Demo() {
  return (
    <main className="p-4 border border-green-700 bg-red-100 md:p-10 mx-auto max-w-7xl">
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
