'use client';

import { useParams } from 'next/navigation';

export default function CookiesPage() {
  const params = useParams();
  const locale = typeof params?.locale === 'string' ? params.locale : 'en';

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-primary">Cookie Policy</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-6">
          This Cookie Policy explains how Ereve ("we", "us", and "our") uses cookies and similar technologies 
          to recognize you when you visit our website. It explains what these technologies are and why we use 
          them, as well as your rights to control our use of them.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">What are cookies?</h2>
        <p>
          Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
          Cookies are widely used by website owners in order to make their websites work, or to work more 
          efficiently, as well as to provide reporting information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Why do we use cookies?</h2>
        <p>We use cookies for several reasons:</p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>To enable certain functions of the website</li>
          <li>To provide analytics</li>
          <li>To store your preferences</li>
          <li>To enable memorial page personalization</li>
          <li>To improve user experience</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Types of cookies we use</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function and cannot be switched off in our systems. 
              They are usually only set in response to actions made by you which amount to a request for services.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Performance Cookies</h3>
            <p>
              These cookies allow us to count visits and traffic sources so we can measure and improve the 
              performance of our site.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Functional Cookies</h3>
            <p>
              These cookies enable the website to provide enhanced functionality and personalization. They may be 
              set by us or by third party providers whose services we have added to our pages.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How can you control cookies?</h2>
        <p>
          You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject 
          cookies, you may still use our website though your access to some functionality and areas of our 
          website may be restricted.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Updates to this policy</h2>
        <p>
          We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use 
          or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy 
          regularly to stay informed about our use of cookies and related technologies.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact us</h2>
        <p>
          If you have any questions about our use of cookies or other technologies, please email us at 
          privacy@ereve.com.
        </p>
      </div>
    </div>
  );
}
