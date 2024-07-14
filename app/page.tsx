import React from 'react';
import Head from 'next/head';

const MetaTags: React.FC = () => (
  <Head>
    <meta charSet="UTF-8" />
    <title>Cost-Effective Data Labeling</title>
    <meta
      name="description"
      content="Affordable and flexible data labeling services for text and video projects."
    />
    <link rel="canonical" href="https://austinagbo.fdlr.info" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    {/* Facebook Meta Tags */}
    <meta property="og:url" content="https://austinagbo.fdlr.info" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Cost-Effective Data Labeling Service" />
    <meta
      property="og:description"
      content="Affordable and flexible data labeling services for text and video projects."
    />
    <meta property="og:image" content="https://example.com/og-image.jpg" />

    {/* Twitter Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@example" />
    <meta property="twitter:domain" content="example.com" />
    <meta property="twitter:url" content="https://example.com/tweet" />
    <meta name="twitter:title" content="Cost-Effective Data Labeling Service" />
    <meta
      name="twitter:description"
      content="Affordable and flexible data labeling services for text and video projects."
    />
    <meta name="twitter:image" content="https://example.com/twitter-image.jpg" />
  </Head>
);

const Header: React.FC = () => (
  <header className="bg-blue-600 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">Data Labeling Service</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#pricing" className="hover:underline">Pricing</a></li>
          <li><a href="#features" className="hover:underline">Features</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MetaTags />
      <main className="flex-grow container mx-auto p-4">
        <section id="intro" className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Your Data Labeling Service</h2>
          <p className="text-gray-700 mb-4">
            We understand the importance of finding a cost-effective data labeling service, especially for projects with significant data volumes. Below is our transparent pricing structure, designed to meet your needs:
          </p>
        </section>
        
        <section id="pricing" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Pricing Structure for Data Labeling Services:</h2>
          <div className="mb-4">
            <h3 className="font-semibold">Text Data Labeling:</h3>
            <ul className="list-disc list-inside">
              <li><strong>Basic Text Annotation:</strong> $0.05 per label.</li>
              <li><strong>Complex Text Annotation:</strong> $0.10 to $0.25 per label, depending on complexity.</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">Video Data Labeling:</h3>
            <ul className="list-disc list-inside">
              <li><strong>Basic Video Annotation:</strong> $2 per minute of video.</li>
              <li><strong>Complex Video Annotation:</strong> $5 to $15 per minute of video, depending on complexity.</li>
            </ul>
          </div>
        </section>

        <section id="estimates" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Project-Based Estimates:</h2>
          <div className="mb-4">
            <h3 className="font-semibold">Text Projects:</h3>
            <ul className="list-disc list-inside">
              <li><strong>Small Project:</strong> Labeling 50,000 text samples at $0.05 each: <strong>$2,500</strong>.</li>
              <li><strong>Medium Project:</strong> Labeling 200,000 text samples at $0.05 each: <strong>$10,000</strong>.</li>
              <li><strong>Large Project:</strong> Labeling 1,000,000 text samples at $0.05 each: <strong>$50,000</strong>.</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold">Video Projects:</h3>
            <ul className="list-disc list-inside">
              <li><strong>Small Project:</strong> Annotating 100 minutes of video at $2 per minute: <strong>$200</strong>.</li>
              <li><strong>Medium Project:</strong> Annotating 1,000 minutes of video at $5 per minute: <strong>$5,000</strong>.</li>
              <li><strong>Large Project:</strong> Annotating 10,000 minutes of video at $10 per minute: <strong>$100,000</strong>.</li>
            </ul>
          </div>
        </section>

        <section id="features" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features of Our Service:</h2>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Volume Discounts:</strong> Discounts for larger datasets to maximize value.</li>
            <li><strong>Flexible Turnaround Times:</strong> We accommodate urgent projects with minimal additional costs.</li>
            <li><strong>Quality Assurance:</strong> Rigorous quality checks ensure high accuracy and reliability.</li>
            <li><strong>Customizable Plans:</strong> Tailored to fit your specific project needs and budget.</li>
          </ul>
        </section>

        <section id="contact" className="mb-8">
          <p className="text-gray-700">
            We believe our pricing structure offers a cost-effective solution without compromising quality. I'd be happy to discuss your project further and provide a detailed quote. Please let me know a convenient time to connect.
          </p>

          <p className="text-gray-700 mt-4">
            austin@fancradle.com
          </p>
        </section>
      </main>
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          &copy; 2024 fancradle. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
