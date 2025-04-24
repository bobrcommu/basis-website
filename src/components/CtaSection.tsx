import Link from 'next/link';

export default function CtaSection() {
  return (
    <div className="gradient-bg-sand">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-primary dark:text-primary sm:text-4xl">
          <span className="block">Ready to preserve memories?</span>
          <span className="block text-neutral-800 dark:text-neutral-300">Start your digital memorial today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              href="https://app.evere.io/auth/sign-up"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-neutral-50 bg-primary hover:bg-primary-dark dark:bg-primary dark:text-neutral-900 dark:hover:bg-primary-light"
            >
              Get started
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center px-5 py-3 border border-primary text-base font-medium rounded-md text-primary bg-accent/10 hover:bg-accent/20 dark:border-primary dark:text-primary dark:bg-neutral-800 dark:hover:bg-neutral-700"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
