"use client";
import Image from "next/image";
import Link from "next/link";

type Props = {
  locale: string;
};

export default function AboutPageClient({ locale }: Props) {
  const values = [
    {
      title: "Compassion",
      description:
        "We approach our work with empathy and understanding, recognizing the sensitive nature of memorializing loved ones.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      image: "/evere1.jpg",
    },
    {
      title: "Trust & Privacy",
      description:
        "We are committed to protecting the privacy and security of the memories entrusted to us, with robust privacy controls.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      image: "/evere2.jpg",
    },
    {
      title: "Permanence",
      description:
        "We are dedicated to ensuring that the digital memorials we create will endure for generations to come.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 002 2v6a2 2 0 00-2-2H5a2 2 0 00-2 2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      image: "/evere3.jpg",
    },
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <div className="gradient-bg-sand py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              About Evere
            </h1>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-400">
              Preserving memories of loved ones through digital memorials and QR code products.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="gradient-bg-sand py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500 dark:text-gray-400">
                At Evere, our mission is to help people preserve and share the memories of their loved ones in a meaningful and lasting way. We believe that everyone deserves to be remembered, and that modern technology can help us create more personal, accessible, and enduring memorials.
              </p>
              <p className="mt-3 max-w-3xl text-lg text-gray-500 dark:text-gray-400">
                We combine beautiful digital memorial pages with physical QR code products that connect the physical and digital worlds, allowing visitors to instantly access memories, photos, stories, and tributes with a simple scan.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/grave-medallion.png"
                  alt="Memorial statue"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="gradient-bg-sand py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
              The principles that guide everything we do at Evere.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="rounded-2xl h-full transform transition-all duration-300 bg-neutral-50 dark:bg-neutral-900 shadow-[0_5px_15px_-3px_rgba(0,0,0,0.05)] dark:shadow-[0_5px_15px_-3px_rgba(0,0,0,0.2)] overflow-hidden group-hover:-translate-y-2 hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.3)] border border-neutral-200/60 dark:border-neutral-700/60 relative">
                    {/* Background image with fade effect */}
                    <div
                      className="absolute inset-0 opacity-15 dark:opacity-20 bg-cover bg-center"
                      style={{ backgroundImage: `url('${value.image}')` }}
                    ></div>
                    <div className="px-6 py-8 sm:px-8 h-full relative">
                      {/* Feature icon with background */}
                      <div className="mb-6 relative">
                        <div className="w-14 h-14 rounded-xl bg-black dark:bg-black shadow-[0_8px_20px_-4px_rgba(0,0,0,0.2)] dark:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.4)] flex items-center justify-center relative z-10 border border-black/80 dark:border-black/80 transition-all duration-300 group-hover:shadow-[0_12px_25px_-5px_rgba(0,0,0,0.25)] dark:group-hover:shadow-[0_12px_25px_-5px_rgba(0,0,0,0.5)]">
                          <div className="h-6 w-6 text-white dark:text-white">{value.icon}</div>
                        </div>
                      </div>

                      {/* Feature content */}
                      <h3 className="text-xl font-bold text-primary dark:text-primary mb-3 font-playfair">
                        {value.title}
                      </h3>
                      <p className="text-neutral-700 dark:text-neutral-300">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="gradient-bg-sand py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
              Dedicated professionals committed to preserving memories.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto h-40 w-40 rounded-full overflow-hidden">
                <div className="bg-gray-200 dark:bg-gray-700 h-full w-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Indy Dijkman</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Founder & CEO</p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  With a background in both technology and grief counseling, Indy founded Evere to help people preserve memories in meaningful ways.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="mx-auto h-40 w-40 rounded-full overflow-hidden">
                <div className="bg-gray-200 dark:bg-gray-700 h-full w-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Maurice Zonneveld</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">CTO</p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Maurice leads our technology team, ensuring our digital memorials are beautiful, accessible, and built to last.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="mx-auto h-40 w-40 rounded-full overflow-hidden">
                <div className="bg-gray-200 dark:bg-gray-700 h-full w-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Valentina Ramirez</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Head of Marketing</p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Valentina oversees the marketing and design of our digital memorials and physical products, creating beautiful ways to honor memories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black dark:bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to preserve memories?</span>
            <span className="block text-gray-300">Start your digital memorial today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href={`/${locale}/signup`}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100"
              >
                Get started
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:border-transparent"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
