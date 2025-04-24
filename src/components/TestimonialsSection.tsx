'use client';

export default function TestimonialsSection() {
  const testimonials = [
    {
      content:
        "Evere helped our family create a beautiful memorial for my grandfather. The QR code plaque we placed at his grave allows visitors to see his life story, photos, and the impact he had on all of us. It's brought us comfort knowing his memory lives on in such a meaningful way.",
      author: {
        name: 'Sarah Johnson',
        role: 'Premium Plan User',
        imageUrl: '/placeholder-avatar-1.svg',
        location: 'Portland, Oregon'
      },
    },
    {
      content:
        "After losing my wife, I wanted to create something special to honor her memory. The digital memorial I created with Evere has become a place where our children and grandchildren can visit anytime to remember her. The QR code pendant I wear keeps her close to my heart, literally and figuratively.",
      author: {
        name: 'Robert Martinez',
        role: 'Forever Plan User',
        imageUrl: '/placeholder-avatar-2.svg',
        location: 'Chicago, Illinois'
      },
    },
    {
      content:
        "Our community lost a beloved teacher, and we used Evere to create a memorial that truly captured her spirit. We placed a QR code plaque in the school garden, and now students and staff can scan it to see photos, videos, and stories about her incredible impact. It's become a special place for reflection.",
      author: {
        name: 'Emily Chen',
        role: 'Premium Plan User',
        imageUrl: '/placeholder-avatar-3.svg',
        location: 'Austin, Texas'
      },
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden gradient-bg-sand">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 gradient-bg-sand"></div>
        
        {/* Decorative accent circles */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light text-sm font-medium">
            Stories that inspire
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary mb-4 tracking-tight">
            Memories preserved, stories shared
          </h2>
          
          <p className="text-lg text-neutral-800 dark:text-neutral-300 max-w-2xl mx-auto">
            Real stories from families who have used Evere to honor and remember their loved ones
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="h-full">
              <div className="relative h-full flex flex-col group">
                {/* Decorative elements */}
                <div className="absolute -top-3 -left-3 w-24 h-24 bg-primary/5 dark:bg-primary/10 rounded-full blur-xl -z-10 group-hover:scale-125 transition-transform duration-500"></div>
                
                {/* Card */}
                <div className="bg-[#F5F0E4]/80 dark:bg-neutral-900 rounded-2xl overflow-hidden h-full flex flex-col justify-between p-8 transform transition-all duration-300 hover:-translate-y-2 shadow-[0_5px_15px_-3px_rgba(0,0,0,0.05)] dark:shadow-[0_5px_15px_-3px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.3)] border border-neutral-200/60 dark:border-neutral-700/60 z-10 relative">
                  <div className="absolute inset-0 overflow-hidden opacity-15 dark:opacity-20">
                    <img 
                      src={`/evere${index + 1 === 3 ? 7 : index + 4}.jpg`} 
                      alt="Background" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Quote icon */}
                  <div className="absolute top-6 right-8 text-neutral-200 dark:text-neutral-800 opacity-40">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.33333 21.3333C7.86667 21.3333 6.66667 20.8 5.73333 19.7333C4.8 18.6667 4.33333 17.3333 4.33333 15.7333C4.33333 14.2667 4.73333 12.8667 5.53333 11.5333C6.33333 10.2 7.46667 9 8.93333 7.93333L10.2667 9.46667C8.93333 10.4 8 11.3333 7.46667 12.2667C6.93333 13.2 6.66667 14.1333 6.66667 15.0667H7.33333C8 15.0667 8.6 15.3333 9.13333 15.8667C9.66667 16.4 9.93333 17 9.93333 17.6667C9.93333 18.3333 9.66667 18.9333 9.13333 19.4667C8.6 20 8 21.3333 7.33333 21.3333H9.33333ZM20 21.3333C18.5333 21.3333 17.3333 20.8 16.4 19.7333C15.4667 18.6667 15 17.3333 15 15.7333C15 14.2667 15.4 12.8667 16.2 11.5333C17 10.2 18.1333 9 19.6 7.93333L20.9333 9.46667C19.6 10.4 18.6667 11.3333 18.1333 12.2667C17.6 13.2 17.3333 14.1333 17.3333 15.0667H18C18.6667 15.0667 19.2667 15.3333 19.8 15.8667C20.3333 16.4 20.6 17 20.6 17.6667C20.6 18.3333 20.3333 18.9333 19.8 19.4667C19.2667 20 18.6667 21.3333 18 21.3333H20Z" fill="currentColor"/>
                    </svg>
                  </div>
                  
                  {/* Rating */}
                  <div>
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-5 w-5 text-primary dark:text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    {/* Testimonial content */}
                    <p className="text-neutral-800 dark:text-neutral-300 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </div>
                  
                  {/* Author */}
                  <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex items-center">
                    <div className="relative w-12 h-12 overflow-hidden rounded-full">
                      <img 
                        src={testimonial.author.imageUrl} 
                        alt={testimonial.author.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-primary dark:text-primary">{testimonial.author.name}</p>
                      <div className="flex items-center text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                        <span>{testimonial.author.role}</span>
                        <span className="mx-2">•</span>
                        <span>{testimonial.author.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Action button */}
        <div className="text-center mt-12">
          <a 
            href="https://app.evere.io/auth/sign-up" 
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-200 rounded-full bg-primary text-neutral-50 shadow-lg hover:bg-primary-dark hover:shadow-xl dark:bg-primary dark:text-neutral-900 dark:hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            <span>Create your memorial</span>
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
