import { Metadata } from 'next'
import BlogArticleTemplate from '@/components/BlogArticleTemplate'

// Metadata for the article
export const metadata: Metadata = {
  title: 'Grave QR Code Video Tributes: Evere vs. Turning Hearts & Remember Well | Evere Blog',
  description: 'Compare the leading grave QR code video services with real reviews. See how Evere memorial QR codes stack up against Turning Hearts and Remember Well.',
  keywords: ['grave QR code video', 'Turning Hearts QR code', 'Remember Well QR code reviews', 'my life memorial QR code', 'headstone QR code', 'digital memorial'],
}

export default function GraveQrCodeComparisonPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="article-container">
      <BlogArticleTemplate
        title="Grave QR Code Video Tributes: Evere vs. Turning Hearts & Remember Well"
        date="June 10, 2025"
        readTime="7 min"
        heroImage="/grave-medallion.webp"
        heroImageAlt="QR code memorial on a gravestone"
        locale={locale}
        ctaLink="/products"
        ctaText="Explore Evere Memorial QR Codes"
      >
        <h2 className="text-3xl font-nunito font-bold mt-12 mb-6">Why Video Matters at the Graveside</h2>
        <p>
          Eyes glisten when a grave QR code video plays Dad's impromptu guitar solo. Evere streams that moment in 4K with no size cap, while some rivals stop at 3 GB or compress to 720p. The ability to share high-quality video moments through a simple QR code has transformed how we remember and honor our loved ones at memorial sites.
        </p>

        <h2 className="text-3xl font-nunito font-bold mt-12 mb-6">Quick-Look Comparison</h2>
        
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="py-3 px-4 text-left">Brand</th>
                <th className="py-3 px-4 text-left">Hardware</th>
                <th className="py-3 px-4 text-left">Media Limits</th>
                <th className="py-3 px-4 text-left">Real Rating Snapshot</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">Turning Hearts</td>
                <td className="py-3 px-4">Anodised plaque, US $99</td>
                <td className="py-3 px-4">3 GB total, HD</td>
                <td className="py-3 px-4">4.7★ (Etsy)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">Remember Well</td>
                <td className="py-3 px-4">Acrylic, US $49</td>
                <td className="py-3 px-4">1 GB, good resolution</td>
                <td className="py-3 px-4">3.5★ (Amazon)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4 font-medium">Evere – Medallion</td>
                <td className="py-3 px-4">Anodised aluminium plaque, €97</td>
                <td className="py-3 px-4">Unlimited* 4K</td>
                <td className="py-3 px-4">4.9★ (200+ on-site reviews)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-nunito font-bold mt-12 mb-6">What Evere Adds</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>AI Image Restoration</strong> – Upscale old 240 × 240 pixel GIFs into print-ready 4K images.</li>
          <li><strong>AI Grief Support Companion</strong> – 24/7 chat trained on your shared memories, not stock phrases.</li>
          <li><strong>Background Music Playlists</strong> – Stream their favorite jazz under every slideshow.</li>
          <li><strong>Enhanced Stories & Custom Access Roles</strong> – Fine-tune who sees drafts, who can post, who just reacts.</li>
        </ul>

        <h2 className="text-3xl font-nunito font-bold mt-12 mb-6">Real Client Quotes</h2>
        <blockquote className="italic border-l-4 border-gray-300 pl-4 py-2 my-4">
          "We replaced Turning Hearts with Evere after maxing out storage." – Patricia, Texas
        </blockquote>
        <blockquote className="italic border-l-4 border-gray-300 pl-4 py-2 my-4">
          "Remember Well's platform is affordable and works well for basic needs. We upgraded to Evere for the unlimited storage and AI features." – Ismael, London
        </blockquote>

        <h2 className="text-3xl font-nunito font-bold mt-12 mb-6">Buying Guide—Three Box Options</h2>
        
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="py-3 px-4 text-left">Pack</th>
                <th className="py-3 px-4 text-left">Boxes</th>
                <th className="py-3 px-4 text-left">Price</th>
                <th className="py-3 px-4 text-left">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">Single Tribute</td>
                <td className="py-3 px-4">1</td>
                <td className="py-3 px-4">€97</td>
                <td className="py-3 px-4">One grave, one keepsake</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">Family Pack</td>
                <td className="py-3 px-4">2</td>
                <td className="py-3 px-4">€145.50</td>
                <td className="py-3 px-4">Two headstones or siblings who share</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-4">Legacy Bundle</td>
                <td className="py-3 px-4">4</td>
                <td className="py-3 px-4">€194</td>
                <td className="py-3 px-4">Large families, community memorials</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p>All options ship in stock from Shopify-secured checkout, include weather-resistant tags and a 30-day money-back guarantee.</p>

        <h2 className="text-3xl font-nunito font-bold mt-12 mb-6">From Scan to Stream in 10 Minutes</h2>
        
        <p>No extra hosting or "add-video" upsells required.</p>

        <h2 className="text-3xl font-nunito font-bold mt-12 mb-6">FAQ Highlights</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">How long is my memorial available?</h3>
            <p>50 years minimum, renewable.</p>
          </div>
          
          <div>
            <h3 className="font-bold">What if the tag is lost?</h3>
            <p>Replace free under lifetime warranty.</p>
          </div>
          
          <div>
            <h3 className="font-bold">Can I upgrade later?</h3>
            <p>Yes, Basic → Premium → Lifetime in one click.</p>
          </div>
          
          <div>
            <h3 className="font-bold">Is my data private?</h3>
            <p>GDPR-compliant, encrypted at rest.</p>
          </div>
        </div>
        
        <p className="mt-4">Still unsure? Our support team offers live assistance with answers in under 1 hour.</p>

        <h2 className="text-3xl font-nunito font-bold mt-12 mb-6">Verdict</h2>
        <p>
          Turning Hearts offers solid hardware and Remember Well provides a good budget option, but only Evere's Medallion delivers unlimited 4K video, AI extras and durable anodized aluminum plaques—backed by a 4.9★ rating from 200+ families.
        </p>

        <h2 className="text-3xl font-nunito font-bold mt-12 mb-6">Get Started Today</h2>
        <p>
          Choose your Forever Plan (Free, €6.99/mo, or €97 lifetime) and start uploading that first grave QR code video. Transform memories into lasting digital legacies—today.
        </p>
      </BlogArticleTemplate>
    </div>
  )
} 