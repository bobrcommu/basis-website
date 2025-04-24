import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions About QR Code Memorials | EverE',
  description: 'Find answers to common questions about QR code memorials, headstone QR codes, installation, maintenance, and digital memorial services.',
  keywords: 'QR code memorial FAQ, headstone QR code questions, digital memorial help, cemetery QR code installation, memorial QR code maintenance',
}

export default function FAQPage({
  params,
}: {
  params: { locale: string };
}) {
  const FAQContent = () => {
    const faqs = [
      {
        question: "What is a QR code memorial?",
        answer: "A QR code memorial is a durable QR code installed on a headstone, grave marker, or memorial plaque that links to a digital memorial page. When scanned with a smartphone, it provides access to photos, videos, stories, and other commemorative content about the deceased."
      },
      {
        question: "How durable are your QR codes?",
        answer: "Our QR codes are manufactured using premium materials specifically designed to withstand outdoor conditions. Depending on the chosen material (stainless steel, bronze, or ceramic), they have a durability rating of 20-50 years and come with appropriate warranties."
      },
      {
        question: "Are QR code memorials allowed in all cemeteries?",
        answer: "Cemetery regulations vary regarding QR code installations. Most modern cemeteries permit them, while historical or religious cemeteries may have specific guidelines. Our team can help determine the regulations at your specific cemetery and assist with any required approval processes."
      },
      {
        question: "How is the QR code attached to the headstone?",
        answer: "We use several installation methods depending on the headstone material and cemetery regulations: adhesive mounting with specialized weatherproof epoxy, mechanical fastening with discreet, non-damaging brackets, or inset mounting where the QR code is recessed into the stone. All installations are performed by certified memorial specialists."
      },
      {
        question: "What content can be included in the digital memorial?",
        answer: "Digital memorials can include photos, videos, audio recordings, biography text, family tree information, guest books for visitors to leave messages, timelines of life events, and even links to charitable donations. The content is fully customizable and can be updated over time."
      },
      {
        question: "How private is the digital memorial?",
        answer: "You have complete control over privacy settings. Options range from fully public memorials accessible to anyone who scans the QR code, to private memorials requiring a password, to family-only memorials that require administrator approval for access."
      },
      {
        question: "What happens if the QR code becomes damaged?",
        answer: "Our QR codes include redundancy features allowing them to function even with some damage. If a code becomes severely damaged, our maintenance plan includes replacement services. We also maintain backup codes that can be quickly substituted."
      },
      {
        question: "How long will the digital memorial website remain active?",
        answer: "Our standard packages include 25 years of hosting for the digital memorial, with options to extend in 10-year increments. We also offer perpetual hosting plans with trust-based funding to ensure the memorial remains accessible for generations."
      },
      {
        question: "Can I add content to the memorial over time?",
        answer: "Yes, all our digital memorials include an admin panel allowing authorized family members to add photos, videos, stories, and other content. This feature enables the memorial to grow and evolve over time, ensuring it remains a living tribute."
      },
      {
        question: "Do you offer services internationally?",
        answer: "Yes, we provide memorial services throughout Europe, North America, and select countries worldwide. For international installations, we partner with local specialists familiar with regional cemetery regulations and customs."
      },
      {
        question: "What maintenance is required for QR code memorials?",
        answer: "Physical maintenance is minimal. We recommend occasional cleaning with a soft cloth and water (no harsh chemicals). Our QR codes are designed to resist UV damage, oxidation, and physical wear. The digital memorial is maintained on our secure servers with regular backups."
      },
      {
        question: "Can QR codes be added to existing headstones?",
        answer: "Absolutely. We specialize in retrofitting QR codes to existing headstones and memorials of all ages. Our installation specialists use non-invasive techniques that preserve the integrity of the original monument."
      }
    ];

    return (
      <div className="container mx-auto pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 font-playfair">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            Find answers to common questions about our memorial services and QR code technology
          </p>
        </div>

        <div className="bg-white/90 rounded-xl shadow-md p-8 mb-12">
          <div className="max-w-4xl mx-auto divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6" itemScope itemType="https://schema.org/Question">
                <h3 className="text-xl font-nunito font-bold text-gray-800 mb-3" itemProp="name">{faq.question}</h3>
                <div className="text-gray-600" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p itemProp="text">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-nunito font-bold text-gray-800 mb-4">Have More Questions?</h3>
          <p className="text-gray-600 mb-6">Our memorial specialists are here to help with any additional questions</p>
          <Link 
            href="/contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* FAQ Schema.org markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </div>
    );
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FAQContent />
    </Suspense>
  );
}
