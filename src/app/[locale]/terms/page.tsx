import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Evere - Digital Memorial Service',
  description: 'Learn about the terms and conditions governing your use of Evere digital memorial services and products.',
};

export default function TermsOfService() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <div className="gradient-bg-sand py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Terms of Service</h1>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-400">
              Last Updated: April 3, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Terms Content */}
      <div className="gradient-bg-sand py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <h2>Welcome to Evere</h2>
            <p>
              These Terms of Service ("Terms") govern your access to and use of the Evere website, mobile application, and digital memorial services (collectively, the "Services"). Please read these Terms carefully before using our Services.
            </p>
            <p>
              By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Services.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By creating an account, accessing, or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you are using the Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.
            </p>

            <h2>2. Account Registration</h2>
            <p>
              To access certain features of our Services, you may need to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
            </p>
            <p>
              You are responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
            </p>

            <h2>3. Digital Memorial Content</h2>
            <p>
              Our Services allow you to create digital memorials for deceased individuals, which may include text, photos, videos, and other content ("Memorial Content"). You are solely responsible for any Memorial Content you submit.
            </p>
            <p>
              By submitting Memorial Content, you represent and warrant that:
            </p>
            <ul>
              <li>You own or have the necessary rights, licenses, consents, and permissions to use and authorize us to use the Memorial Content</li>
              <li>The Memorial Content does not violate the privacy, publicity, intellectual property, or other rights of any person or entity</li>
              <li>The Memorial Content does not contain material that is defamatory, obscene, or otherwise objectionable</li>
            </ul>
            <p>
              We reserve the right, but are not obligated, to monitor and review Memorial Content. We may remove any Memorial Content at any time for any reason, without notice.
            </p>

            <h2>4. QR Code Products</h2>
            <p>
              Evere offers physical products featuring QR codes that link to digital memorial pages ("QR Products"). When you purchase QR Products, you acknowledge that:
            </p>
            <ul>
              <li>QR Products are intended to be placed on graves, memorial sites, or other appropriate locations with permission from the relevant authorities</li>
              <li>You are responsible for obtaining any necessary permissions or permits for placing QR Products in public or private spaces</li>
              <li>QR codes link to digital memorials hosted on our platform and require Internet access to function</li>
              <li>We cannot guarantee the permanent accessibility of QR codes due to potential changes in technology or deterioration of the physical product</li>
            </ul>

            <h2>5. Subscription and Payment</h2>
            <p>
              Some of our Services require payment of fees. You agree to pay all fees in accordance with the pricing and payment terms presented to you for the applicable Services.
            </p>
            <p>
              Subscription fees are billed in advance on a recurring basis. You may cancel your subscription at any time, but no refunds will be provided for any unused portion of a subscription period.
            </p>
            <p>
              For payment processing, we use Polar.sh, a third-party payment processor. By purchasing our services, you agree to Polar.sh's terms of service and privacy policy, available at <a href="https://polar.sh/terms" className="text-primary dark:text-primary" target="_blank" rel="noopener noreferrer">polar.sh/terms</a> and <a href="https://polar.sh/privacy" className="text-primary dark:text-primary" target="_blank" rel="noopener noreferrer">polar.sh/privacy</a>.
            </p>
            <p>
              We may change our fees at any time. If we change our fees, we will provide notice of the change on the website or via email, at our discretion.
            </p>

            <h2>6. Intellectual Property Rights</h2>
            <p>
              The Services and its original content (excluding Memorial Content submitted by users) are and will remain the exclusive property of Evere and its licensors. The Services are protected by copyright, trademark, and other laws.
            </p>
            <p>
              Subject to your compliance with these Terms, Evere grants you a limited, non-exclusive, non-transferable, non-sublicensable license to access and use the Services for your personal, non-commercial use.
            </p>

            <h2>7. User Conduct</h2>
            <p>
              You agree not to use the Services:
            </p>
            <ul>
              <li>In any way that violates any applicable law or regulation</li>
              <li>To impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity</li>
              <li>To solicit personal information from anyone under the age of 18</li>
              <li>To send unsolicited promotional materials, spam, or any other form of solicitation</li>
              <li>To attempt to access or interfere with the systems that operate the Services</li>
              <li>To upload or transmit viruses, malware, or other malicious code</li>
            </ul>

            <h2>8. Termination</h2>
            <p>
              We may terminate or suspend your account and access to the Services immediately, without prior notice or liability, for any reason, including if you breach these Terms.
            </p>
            <p>
              Upon termination, your right to use the Services will immediately cease. If you wish to terminate your account, you may simply discontinue using the Services, or contact us to request account deletion.
            </p>

            <h2>9. Memorial Preservation</h2>
            <p>
              Evere is committed to preserving digital memorials for the long term. However, we cannot guarantee perpetual storage of Memorial Content. In the event of service changes, company acquisition, or cessation of operations, we will make reasonable efforts to ensure the continuity of memorial pages or provide options for content migration.
            </p>

            <h2>10. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Evere shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
            </p>
            <ul>
              <li>Your access to or use of or inability to access or use the Services</li>
              <li>Any conduct or content of any third party on the Services</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              <li>Physical damage to or deterioration of QR Products</li>
            </ul>

            <h2>11. Warranty Disclaimer</h2>
            <p>
              The Services are provided "as is" and "as available" without warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
            </p>
            <p>
              We do not warrant that the Services will function uninterrupted, secure, or available at any particular time or location, or that any errors or defects will be corrected.
            </p>

            <h2>12. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Evere is established, without regard to its conflict of law provisions.
            </p>

            <h2>13. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            <p>
              By continuing to access or use our Services after those revisions become effective, you agree to be bound by the revised terms.
            </p>

            <h2>14. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <ul>
              <li>By email: legal@evere.com</li>
              <li>By visiting our contact page: <a href="/contact" className="text-primary dark:text-primary">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
