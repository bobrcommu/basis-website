import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Animal Memorials | Evere - Pet Digital Memorial Service',
  description: 'Create lasting digital memorials for your animal companions with Evere\'s pet-focused digital memorial service and QR code products.',
};

export default function AnimalsPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "#F5F0E4" }}>
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0" style={{ backgroundColor: "#F5F0E4" }}></div>
          
          {/* Decorative accent circles */}
          <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              For Our Faithful Companions
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-6">
              Animal <span className="text-primary">Memorials</span>
            </h1>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-400">
              Honor the memory of your beloved animal companions with beautiful digital memorials that celebrate their lives.
            </p>
          </div>
        </div>
      </section>

      {/* Pet Memorials Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="lg:order-2">
              <div className="rounded-3xl shadow-lg p-6 sm:p-8 border border-gray-100" style={{ backgroundColor: "#FAF7F0" }}>
                <div className="relative aspect-square mb-6 overflow-hidden rounded-xl">
                  <Image 
                    src="/everedog.png" 
                    alt="Pet memorial with QR code" 
                    fill
                    className="object-cover transition-transform hover:scale-105"
                    priority
                  />
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden shadow-lg">
                    <Image 
                      src="/evere-dog.png" 
                      alt="Pet memorial interface" 
                      width={400} 
                      height={300} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden shadow-lg">
                    <Image 
                      src="/everesmartcollar.png" 
                      alt="Forever memory box" 
                      width={400} 
                      height={300} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:order-1">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Pet Memorials
              </h2>
              <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
                Our animal companions hold a special place in our hearts. Create a beautiful memorial to celebrate the joy, companionship, and unconditional love your pet brought into your life.
              </p>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Features include:</h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-500 dark:text-gray-400">
                      <span className="font-medium text-gray-900 dark:text-white">Pet Profile:</span> Share your pet's breed, personality, favorite activities, and the special bond you shared.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-500 dark:text-gray-400">
                      <span className="font-medium text-gray-900 dark:text-white">Photo & Video Collections:</span> Preserve precious moments with galleries of your pet's photos and videos.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-500 dark:text-gray-400">
                      <span className="font-medium text-gray-900 dark:text-white">Memory Sharing:</span> Allow family members and friends to add their own memories and photos of your pet.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500 dark:text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-500 dark:text-gray-400">
                      <span className="font-medium text-gray-900 dark:text-white">Pet Memorial Products:</span> QR code tags, garden markers, and frames to create a physical connection to your pet's digital memorial.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Link href="/pricing" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark dark:bg-white dark:text-black dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white">
                  View Memorial Plans
                  <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pet Types Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "#F5F0E4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-6">
              For All Animal <span className="text-primary">Companions</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-neutral-700">
              Create meaningful memorials for all types of animal companions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-3xl shadow-lg p-6 sm:p-8 border border-gray-100" style={{ backgroundColor: "#FAF7F0" }}>
              <div className="relative aspect-square mb-6 overflow-hidden rounded-xl">
                <Image 
                  src="/everedogtag.png" 
                  alt="Dog memorial" 
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">Dogs</h3>
              <p className="text-neutral-700">
                Honor your loyal canine companion with a memorial that celebrates their devotion, unique personality and the joy they brought to your life.
              </p>
            </div>

            <div className="rounded-3xl shadow-lg p-6 sm:p-8 border border-gray-100" style={{ backgroundColor: "#FAF7F0" }}>
              <div className="relative aspect-square mb-6 overflow-hidden rounded-xl">
                <Image 
                  src="/everecat.png" 
                  alt="Cat memorial" 
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">Cats</h3>
              <p className="text-neutral-700">
                Create a tribute to your feline friend that captures their grace, independence, and the quiet companionship they provided through the years.
              </p>
            </div>

            <div className="rounded-3xl shadow-lg p-6 sm:p-8 border border-gray-100" style={{ backgroundColor: "#FAF7F0" }}>
              <div className="relative aspect-square mb-6 overflow-hidden rounded-xl">
                <Image 
                  src="/everescan.png" 
                  alt="Other pets memorial" 
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">Other Pets</h3>
              <p className="text-neutral-700">
                Birds, horses, rabbits, reptiles and more—create customized memorials for any animal companion that held a special place in your heart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Extended Features Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-6">
              Complete Memorial <span className="text-primary">Experience</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-neutral-700">
              Create a lasting tribute with these specialized features for animal companions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl shadow-lg p-6 sm:p-8 border border-gray-100" style={{ backgroundColor: "#FAF7F0" }}>
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Pet Biography</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                Document your pet's life story, from their early days to favorite activities, quirky habits, and the special moments you shared together.
              </p>
            </div>

            <div className="rounded-3xl shadow-lg p-6 sm:p-8 border border-gray-100" style={{ backgroundColor: "#FAF7F0" }}>
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Video Tributes</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                Create and share video memorials that showcase your pet's most memorable moments, playful antics, and the love you shared.
              </p>
            </div>

            <div className="rounded-3xl shadow-lg p-6 sm:p-8 border border-gray-100" style={{ backgroundColor: "#FAF7F0" }}>
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Location Markers</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                Mark special places—like favorite parks, burial sites, or memorable locations—with QR tags that link to your pet's digital memorial.
              </p>
            </div>

            <div className="rounded-3xl shadow-lg p-6 sm:p-8 border border-gray-100" style={{ backgroundColor: "#FAF7F0" }}>
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Interactive Timeline</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                Create a visual journey through your pet's life with milestone events, memorable adventures, and precious moments.
              </p>
            </div>

            <div className="rounded-3xl shadow-lg p-6 sm:p-8 border border-gray-100" style={{ backgroundColor: "#FAF7F0" }}>
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Photo Restoration</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                Enhance older photos of your pet with our AI-powered restoration service to bring clarity to precious memories.
              </p>
            </div>

            <div className="rounded-3xl shadow-lg p-6 sm:p-8 border border-gray-100" style={{ backgroundColor: "#FAF7F0" }}>
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Remembrance Network</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                Connect with other pet owners who understand your grief journey and share memorial tributes in a supportive community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "#F5F0E4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-6">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-neutral-700">
              Creating a memorial for your pet is simple with Evere.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl shadow-lg p-6 border border-gray-100 relative" style={{ backgroundColor: "#FAF7F0" }}>
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">1</div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-4">Choose a Plan</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                Select from our range of pet memorial plans, designed to honor animals of all types.
              </p>
            </div>

            <div className="rounded-3xl shadow-lg p-6 border border-gray-100 relative" style={{ backgroundColor: "#FAF7F0" }}>
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">2</div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-4">Create Profile</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                Build your pet's profile with photos, videos, stories, and all the details that made them special.
              </p>
            </div>

            <div className="rounded-3xl shadow-lg p-6 border border-gray-100 relative" style={{ backgroundColor: "##FAF7F0" }}>
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">3</div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-4">Select Memorial Products</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                Choose from QR tags for collars, garden markers, or memorial frames to connect physical spaces to digital memories.
              </p>
            </div>

            <div className="rounded-3xl shadow-lg p-6 border border-gray-100 relative" style={{ backgroundColor: "#FAF7F0" }}>
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">4</div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-4">Share & Preserve</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                Share your pet's memorial with family and friends, creating a lasting tribute to their memory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-black dark:bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to honor your pet's memory?</span>
            <span className="block text-gray-300">Create a lasting tribute to your animal companion.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100"
              >
                Get started
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:border-transparent"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
