import { Metadata } from 'next'
import BlogArticleTemplate from '@/components/BlogArticleTemplate'

// Metadata for the article
export const metadata: Metadata = {
  title: 'AI-Crafted Funeral Poems: Personalised Tributes for Loved Ones | Evere Blog',
  description: 'Discover how AI technology can help create meaningful, personalised funeral poems that perfectly capture the essence of your loved one.',
  keywords: ['funeral poems', 'AI poem generator', 'memorial poetry', 'personalised tribute', 'funeral speech', 'memorial verse', 'celebration of life poem'],
}

export default function AICraftedFuneralPoemsPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="article-container">
      <BlogArticleTemplate
        title="AI-Crafted Funeral Poems: Honouring Loved Ones with Personalised Tributes"
        date="April 25, 2025"
        readTime="5 min"
        heroImage="/memorial-flowers.webp"
        heroImageAlt="Memorial flowers with personalised poem"
        locale={locale}
        ctaLink="/products"
        ctaText="Create a Personalised Poem Now"
      >
        <p className="lead text-xl mb-6">
          In the digital age, the art of crafting memorial tributes has been revolutionised by AI-generated poetry technology. At Evere, we offer an innovative digital memorial tool that combines the emotional depth of remembrance poetry with the precision of artificial intelligence, providing a unique way to express your feelings and memories during challenging times.
        </p>

        <div className="bg-primary/5 p-6 rounded-lg my-8 text-center">
          <a href={`/${locale}/ai-poem-creator`} className="text-primary hover:underline font-semibold">Create Your Personalised Funeral Poem Now</a>
        </div>

        <h2 className="text-3xl font-nunito font-bold mt-12 mb-6">The Power of Personalised Funeral Poems</h2>
        <p>
          Personalised funeral poems have emerged as a powerful alternative to traditional funeral speeches, offering a fresh and deeply moving way to say goodbye and celebrate a life well-lived. Here's why they're so impactful:
        </p>
        <ul className="list-disc pl-6 space-y-3 mb-6">
          <li><strong>Capture Unique Personalities:</strong> Each poem is tailored to reflect the individual quirks, passions, and experiences of your loved one.</li>
          <li><strong>Evoke Stronger Emotional Connections:</strong> Poetry combined with personal anecdotes creates a deeply moving tribute that resonates with all present.</li>
          <li><strong>Become Cherished Keepsakes:</strong> Poems can be printed or framed, offering lasting comfort and memories.</li>
          <li><strong>Offer Flexibility in Tone:</strong> Whether humorous, reflective, or lighthearted, the tone can be customised to fit the person being remembered.</li>
          <li><strong>Aid in the Healing Process:</strong> Creating a personalised poem can be therapeutic, helping to express difficult emotions and celebrate happy memories.</li>
        </ul>

        <h2 className="text-3xl font-nunito font-bold mt-12 mb-6">Our AI-Powered Poem Creator: How It Works</h2>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-start">
            <div className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
              <span>1</span>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Share Your Memories</h3>
              <p>Input details about your loved one's quirks, achievements, and impact on others.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
              <span>2</span>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Choose Your Style</h3>
              <p>Select preferences for length, humour, stories, and emotional content.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
              <span>3</span>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">AI-Crafted Poetry</h3>
              <p>Our advanced technology weaves your input into a unique, touching poem.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
              <span>4</span>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Review and Refine</h3>
              <p>Edit and customise the generated poem to perfection.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-primary/5 p-6 rounded-lg my-8 text-center">
          <a href={`/${locale}/ai-poem-creator`} className="text-primary hover:underline font-semibold">Begin Crafting Your Personalised Tribute</a>
        </div>

        <h2 className="text-3xl font-nunito font-bold mt-12 mb-6">Benefits of Our AI-Powered Service</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Time-Saving</h3>
            <p>Generate meaningful poems in minutes, not hours.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Customisation</h3>
            <p>Create a unique tribute that truly reflects your loved one's spirit.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Emotional Support</h3>
            <p>Let our service help articulate your deepest emotions during a difficult time.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Versatility</h3>
            <p>Suitable for funerals, memorial services, or celebrations of life.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm md:col-span-2">
            <h3 className="font-bold text-lg mb-2">Lasting Memorial</h3>
            <p>Craft a beautiful keepsake to honour your loved one's memory for years to come.</p>
          </div>
        </div>

        <h2 className="text-3xl font-nunito font-bold mt-12 mb-6">The Result: A One-of-a-Kind Tribute</h2>
        <p>
          The end product is a poem that's as unique as the person it's honouring. It's not just words on a page, but a heartfelt celebration of a life well-lived, crafted with personalised, meaningful words, stories, memories, and love.
        </p>
        
        <div className="bg-gray-100 p-6 rounded-md italic my-8 text-center">
          <p className="mb-2">Example poem excerpt:</p>
          <p className="text-lg">"Her garden flourished like her love,<br />
          Nurturing all beneath her care.<br />
          The wisdom she so freely gave<br />
          Lives on in hearts, forever there."</p>
        </div>

        <h2 className="text-3xl font-nunito font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-4 mb-8">
          <div>
            <h3 className="font-bold">Q: How long does it take to create a personalised funeral poem?</h3>
            <p>A: You can generate a custom poem in minutes, but we recommend taking time to review and refine it.</p>
          </div>
          
          <div>
            <h3 className="font-bold">Q: Do I need to be a skilled writer to use your service?</h3>
            <p>A: Not at all. Our intuitive tool is designed for everyone, regardless of writing experience.</p>
          </div>
          
          <div>
            <h3 className="font-bold">Q: Can I edit the poem after it's generated?</h3>
            <p>A: Absolutely. You have full control to edit or rewrite any part of the generated poem.</p>
          </div>
          
          <div>
            <h3 className="font-bold">Q: How personalised are the poems?</h3>
            <p>A: Our AI creates unique poems based on the specific information you provide. No two poems are ever exactly alike.</p>
          </div>
        </div>

        <h2 className="text-3xl font-nunito font-bold mt-12 mb-6">An Example of Our AI Poetry</h2>
        <div className="bg-gray-100 p-6 rounded-md my-8">
          <p className="italic text-center mb-4">"In Memory of David, The Gardener"</p>
          <p className="italic">
            With soil-stained hands and a heart so grand,<br />
            You tended your garden with care.<br />
            Each flower you grew, like the love that you knew,<br />
            Blossomed beyond compare.<br /><br />
            
            The roses you planted still reach for the sky,<br />
            Your daisies dance in the breeze.<br />
            Though you've journeyed afar, like your favourite star,<br />
            Your light through our memories we seize.<br /><br />
            
            That workshop of yours where wonders were born,<br />
            From wood you crafted such joy.<br />
            Your laughter still rings when the garden birds sing,<br />
            A melody time can't destroy.<br /><br />
            
            So we gather today, not to bid you goodbye,<br />
            But to honour the seeds that you've sown.<br />
            In each life you touched, in each heart you've reached,<br />
            Your legacy forever has grown.
          </p>
          <p className="text-right text-sm mt-4">Generated for a retired carpenter who loved gardening</p>
        </div>

        <h2 className="text-3xl font-nunito font-bold mt-12 mb-6">Conclusion: Honouring Memories with Personalised Poetry</h2>
        <p>
          Personalised funeral poems offer a unique and touching way to celebrate a life well-lived. They capture the essence of your loved one, creating a lasting tribute that resonates with all who hear it. Our AI-powered tool makes crafting these beautiful, custom verses accessible to everyone.
        </p>
        <p>
          Don't let the opportunity to create a one-of-a-kind tribute slip away. Take the first step in crafting a personalised funeral poem that will touch hearts and keep your loved one's memory alive for years to come.
        </p>
        
        <div className="bg-primary/5 p-6 rounded-lg my-8 text-center">
          <a href={`/${locale}/ai-poem-creator`} className="text-primary hover:underline font-semibold">Create Your Personalised Funeral Poem Now</a>
        </div>
        
        <p>
          Remember, every life tells a story. Let us help you tell it beautifully.
        </p>
        <p>
          For more inspiration, browse our collection of <a href={`/${locale}/resources/eulogy-examples`} className="text-primary hover:underline">eulogy</a> and <a href={`/${locale}/resources/funeral-poem-examples`} className="text-primary hover:underline">funeral poem examples</a>.
        </p>
        <p>
          At Evere, we're here to support you through this challenging task, offering guidance, tools, and compassion every step of the way. Let us help you create a beautiful tribute that celebrates your loved one's life and the impact they had on the world.
        </p>
      </BlogArticleTemplate>
    </div>
  )
} 