import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Evere - Digital Memorial Service',
  description: 'Learn about our privacy practices, data collection, use, and your rights regarding information collected through Evere digital memorial services.',
};

export default function PrivacyPolicy() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <div className="gradient-bg-sand py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Privacy Policy</h1>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-400">
              Last Updated: April 3, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Policy Content */}
      <div className="gradient-bg-sand py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <h2>Introduction</h2>
            <p>
              At Evere ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our mobile application, or utilize our digital memorial services.
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect several types of information, including:</p>
            
            <h3>Personal Data</h3>
            <p>
              Personal Data refers to information that identifies you or makes you identifiable. This may include:
            </p>
            <ul>
              <li>Contact information (name, email address, phone number, mailing address)</li>
              <li>Account information (username, password)</li>
              <li>Billing information (credit card details, billing address)</li>
              <li>Profile information (profile pictures, biographical information)</li>
              <li>Content you provide for digital memorials (photos, videos, written tributes, biographical information about deceased individuals)</li>
            </ul>

            <h3>Usage Data</h3>
            <p>
              We may also collect information about how the website and our services are accessed and used. This Usage Data may include:
            </p>
            <ul>
              <li>Your computer's Internet Protocol address (e.g., IP address)</li>
              <li>Browser type, browser version</li>
              <li>Pages of our service that you visit</li>
              <li>Time and date of your visit</li>
              <li>Time spent on those pages</li>
              <li>Unique device identifiers and other diagnostic data</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including to:</p>
            <ul>
              <li>Provide, operate, and maintain our services</li>
              <li>Create and manage your account</li>
              <li>Process and complete transactions</li>
              <li>Send you technical notices, updates, security alerts, and support and administrative messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Create and display digital memorials as directed by you</li>
              <li>Improve our website and services</li>
              <li>Monitor usage of our services</li>
              <li>Detect, prevent, and address technical issues</li>
            </ul>

            <h2>Sharing Your Information</h2>
            <p>
              We may share your information with third parties in certain situations:
            </p>
            <ul>
              <li><strong>Service Providers:</strong> We may share your information with third-party vendors, service providers, and other business partners who perform services on our behalf.</li>
              <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
              <li><strong>With Your Consent:</strong> We may share your information with other parties with your consent.</li>
            </ul>

            <h2>Memorial Content and Privacy</h2>
            <p>
              Information and media you provide for digital memorials (including photos, videos, and written tributes) will be displayed in accordance with your privacy settings. 
              By default, digital memorials are publicly accessible to anyone who has the link or QR code.
            </p>
            <p>
              You can control the privacy of memorial content through your account settings, including making memorials private or password-protected.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>

            <h2>Your Data Protection Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul>
              <li>The right to access your personal data</li>
              <li>The right to correct inaccurate personal data</li>
              <li>The right to request deletion of your personal data</li>
              <li>The right to restrict processing of your personal data</li>
              <li>The right to data portability</li>
              <li>The right to object to processing of your personal data</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
            </p>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
            </p>
            <p>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not directed to anyone under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we can take necessary actions.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul>
              <li>By email: privacy@evere.com</li>
              <li>By visiting our contact page: <a href="/contact" className="text-primary dark:text-primary">Contact Us</a></li>
            </ul>
            
            <h2>Third-Party Services</h2>
            <p>
              We use certain third-party services to help operate our service:
            </p>
            <ul>
              <li><strong>Polar.sh:</strong> We use Polar.sh for subscription management. When you make a purchase through Polar.sh, they collect and process payment information according to their privacy policy, which can be found at <a href="https://polar.sh/privacy" className="text-primary dark:text-primary" target="_blank" rel="noopener noreferrer">polar.sh/privacy</a>.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
