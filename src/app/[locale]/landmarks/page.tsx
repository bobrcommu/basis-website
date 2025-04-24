import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Landmark Memorials | EverE',
  description: 'Discover meaningful ways to honor and remember significant landmarks and historical sites with our memorial solutions.',
  keywords: 'landmark memorials, historical site memorials, monument preservation, landmark tribute'
}

export default function LandmarksPage() {
  return (
    <div className="container mx-auto pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <article className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 font-playfair">Landmark Memorials</h1>
          <p className="text-xl text-gray-600 mb-8 mt-6">Preserving history and honoring significant places</p>
        </header>

        <div className="prose max-w-none">
          <p className="lead text-xl mb-6">
            Landmarks and historical sites hold special meaning for communities and individuals alike. Our memorial solutions help preserve these important places and the memories associated with them.
          </p>

          <h2 className="text-3xl font-nunito font-bold text-gray-800 mt-12 mb-6">QR Code Memorial Plaques</h2>
          
          <div className="bg-white/90 rounded-xl shadow-sm p-8 mb-8">
            <h3 className="text-2xl font-nunito font-bold text-gray-800 mb-4">Interactive Historical Information</h3>
            <p className="text-gray-600 mb-4">
              Our durable QR code plaques can be installed at landmarks to provide visitors with rich historical context, photos, and stories about the site's significance.
            </p>
            <p className="text-gray-600 mb-4">
              These digital memorials can include historical photos, oral histories from community members, timelines of important events, and educational materials about the landmark's preservation.
            </p>
          </div>

          <h2 className="text-3xl font-nunito font-bold text-gray-800 mt-12 mb-6">Commemorative Markers</h2>
          
          <div className="bg-white/90 rounded-xl shadow-sm p-8 mb-8">
            <h3 className="text-2xl font-nunito font-bold text-gray-800 mb-4">Durable Memorial Solutions</h3>
            <p className="text-gray-600 mb-4">
              We offer custom-designed memorial markers made from weather-resistant materials that can withstand outdoor conditions while maintaining their appearance for decades.
            </p>
            <p className="text-gray-600 mb-4">
              These markers can include engraved text, historical images, and other design elements that reflect the character and significance of the landmark.
            </p>
          </div>

          <h2 className="text-3xl font-nunito font-bold text-gray-800 mt-12 mb-6">Preservation Support</h2>
          
          <div className="bg-white/90 rounded-xl shadow-sm p-8 mb-8">
            <h3 className="text-2xl font-nunito font-bold text-gray-800 mb-4">Supporting Landmark Conservation</h3>
            <p className="text-gray-600 mb-4">
              A portion of proceeds from our landmark memorial products goes toward preservation efforts and educational programs at historical sites.
            </p>
            <p className="text-gray-600 mb-4">
              We partner with local historical societies and preservation organizations to ensure our memorial solutions align with conservation best practices.
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}
