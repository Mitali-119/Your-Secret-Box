'use client';

import Link from 'next/link';
import MessageCardCarousel from '@/components/MessageCardCarousel';

const HomePage = () => {
  return (
    <>
      <main
        className="flex-grow flex flex-col items-center justify-center px-4 md:px-24 py-12 text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/final_bg.avif')" }}
      >
        <section className="text-center mb-8 md:mb-12 bg-black/60 p-6 rounded-xl shadow-lg">
          <h1 className="text-3xl md:text-5xl font-bold">
            Say What Matters, Without the Spotlight
          </h1>
          <p className="mt-3 md:mt-4 text-base md:text-lg">
            "Your Secret Box — where kind words and honest thoughts stay anonymous."
          </p>

          <Link href="/dashboard">
            <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-lg text-white font-semibold shadow-md">
              Get Started
            </button>
          </Link>
        </section>

        <div className="bg-black/60 p-4 rounded-xl shadow-lg w-full max-w-3xl">
          <MessageCardCarousel />
        </div>
      </main>
    </>
  );
};

export default HomePage;
