import React from 'react';

const Videos = () => (
  <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-24">
    <section className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        Vídeos da Clínica
      </h1>
      <div className="flex justify-center">
        <iframe
          src="https://www.instagram.com/reel/EXAMPLE/"
          width="300"
          height="400"
          className="rounded-lg shadow-lg"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  </div>
);

export default Videos;
