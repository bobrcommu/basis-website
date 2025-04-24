import { Metadata } from 'next'
import BlogArticleTemplate from '@/components/BlogArticleTemplate'

// Metadata for the article
export const metadata: Metadata = {
  title: 'Writing a Eulogy for Your Mother: A Heartfelt Guide | Evere Blog',
  description: 'Learn how to write a touching, personal eulogy for your mother with our step-by-step guide, including examples and AI-assisted support.',
  keywords: ['mother eulogy', 'writing eulogy', 'funeral speech', 'eulogy guide', 'mother tribute', 'memorial speech', 'AI eulogy writer'],
}

export default function WritingEulogyForMotherPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="article-container">
      <BlogArticleTemplate
        title="Writing a Eulogy for Your Mother: A Heartfelt Guide"
        date="April 22, 2025"
        readTime="6 min"
        heroImage="/memorial-women.webp"
        heroImageAlt="Woman writing a eulogy for her mother"
        locale={locale}
        ctaLink="/products"
        ctaText="Explore Evere AI Eulogy Writer"
      >
        <p className="lead text-xl mb-6">
          Losing your mother is one of life's most challenging experiences, and the task of writing her eulogy can feel overwhelming. This guide aims to help you create a touching tribute that honours your mother's life and your shared memories, breaking the process down into manageable steps.
        </p>

        <div className="bg-primary/5 p-6 rounded-lg my-8 text-center">
          <p className="font-semibold mb-2">Need assistance with your mother's eulogy?</p>
          <a href={`/${locale}/ai-eulogy-writer`} className="text-primary hover:underline font-medium">Begin Creating Your Mother's Eulogy with Our Supportive AI-Assisted Tool</a>
        </div>

        <h2 className="text-3xl font-nunito font-bold mt-12 mb-6">Understanding the Purpose of Your Mother's Eulogy</h2>
        <p>
          A eulogy for your mother is an opportunity to:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Celebrate her unique life and personality</li>
          <li>Share cherished memories and moments of joy</li>
          <li>Highlight her impact on you and others</li>
          <li>Offer comfort to family, friends, and others who are grieving</li>
          <li>Pay tribute to her influence on your life and your family</li>
        </ul>
        
        <p>
          Remember, there's no strict rulebook for this deeply personal task. The goal is to capture who your mother truly was, not what you think a eulogy should be.
        </p>

        <h2 className="text-3xl font-nunito font-bold mt-12 mb-6">Structuring Your Mother's Eulogy</h2>
        
        <div className="space-y-6 mb-8">
          <div>
            <h3 className="text-2xl font-nunito font-semibold mb-3">1. Introduction</h3>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>Introduce yourself and your relationship to your mother</li>
              <li>Thank attendees for their support</li>
              <li>Set the tone for your speech</li>
            </ul>
            <div className="bg-gray-100 p-4 rounded-md italic">
              <p>Example: "Hi everyone, I'm Sarah. Mum would've loved seeing you all here."</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-nunito font-semibold mb-3">2. Reflecting on Your Mother's Life</h3>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>Share her quirks, habits, loves, and pet peeves</li>
              <li>Describe her personality, values, and what made her tick</li>
              <li>Include significant events from your mother's life</li>
              <li>Share personal stories and anecdotes</li>
            </ul>
            <div className="bg-gray-100 p-4 rounded-md italic">
              <p>Example: "Mum taught me to drive. She said, 'Sarah, driving's easy. It's all the other Muppets on the road you've got to watch out for.' Turns out that was pretty good advice too."</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-nunito font-semibold mb-3">3. Gathering Memories</h3>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>Speak with family members and friends</li>
              <li>Look through old photos and mementos</li>
              <li>Recall personal anecdotes that showcase her character</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-nunito font-semibold mb-3">4. Conclusion</h3>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>Balance emotion with lighter moments or humour if appropriate</li>
              <li>Express final thoughts or a farewell message</li>
            </ul>
            <div className="bg-gray-100 p-4 rounded-md italic">
              <p>Example: "Mum, you truly were one of a kind. We'll all miss your burnt Sunday roast and your perfect cups of tea. Thank you for everything, always our family Queen."</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-nunito font-bold mt-12 mb-6">Delivery Advice</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Practice reading your eulogy aloud</li>
          <li>Speak slowly and clearly</li>
          <li>Have a printed copy in large font</li>
          <li>It's okay to show emotion - take pauses if needed</li>
        </ul>
        
        <div className="bg-primary/5 p-6 rounded-lg my-8 text-center">
          <p className="mb-2">Need help organising your thoughts?</p>
          <a href={`/${locale}/ai-eulogy-writer`} className="text-primary hover:underline font-medium">Try our AI-assisted eulogy creator</a>
        </div>

        <h2 className="text-3xl font-nunito font-bold mt-12 mb-6">How Our AI-Assisted Eulogy Creator Can Help</h2>
        <p>
          At Evere, we understand the unique challenges of writing a eulogy for your mother. Our AI-assisted eulogy creator is designed to support you through this process with compassion and sensitivity. Our tool can help you:
        </p>
        
        <div className="space-y-4 mb-8">
          <div>
            <h3 className="font-bold">Structure Your Thoughts</h3>
            <p>Our AI guides you through each section, ensuring you cover all the important aspects of your mother's life.</p>
          </div>
          
          <div>
            <h3 className="font-bold">Generate Personal Anecdotes</h3>
            <p>Input key memories, and our AI will help you articulate them in a touching and meaningful way.</p>
          </div>
          
          <div>
            <h3 className="font-bold">Find the Right Words</h3>
            <p>Struggling to express your emotions? Our AI can suggest phrasing that captures the depth of your relationship and the impact your mother had on your life.</p>
          </div>
          
          <div>
            <h3 className="font-bold">Balance Tone</h3>
            <p>Set the desired tone, and our AI will help you create a eulogy that celebrates your mother's life while acknowledging the loss.</p>
          </div>
          
          <div>
            <h3 className="font-bold">Refine and Perfect</h3>
            <p>Edit and customise the generated eulogy to ensure it perfectly captures your mother's spirit and your relationship.</p>
          </div>
        </div>

        <h2 className="text-3xl font-nunito font-bold mt-12 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-4 mb-8">
          <div>
            <h3 className="font-bold">Q: How long should my mother's eulogy be?</h3>
            <p>A: Aim for 3-5 minutes. Quality is more important than quantity.</p>
          </div>
          
          <div>
            <h3 className="font-bold">Q: What if I cry while giving the eulogy?</h3>
            <p>A: It's completely normal and expected. Take a breath, sip some water if needed, and continue when you're ready. Attendees will understand and support you.</p>
          </div>
          
          <div>
            <h3 className="font-bold">Q: Is it okay to use humour in the eulogy?</h3>
            <p>A: If it reflects your mother's personality, absolutely. Gentle humor can provide comfort and celebrate your mother's spirit.</p>
          </div>
          
          <div>
            <h3 className="font-bold">Q: Should I include difficult periods in my mother's life?</h3>
            <p>A: Focus on positive memories, but you can acknowledge challenges if they were significant to her story or showed her strength.</p>
          </div>
          
          <div>
            <h3 className="font-bold">Q: Can I ask someone else to read the eulogy if I'm too emotional?</h3>
            <p>A: Absolutely. Choose someone close to your mother who can deliver it with care and respect.</p>
          </div>
        </div>

        <h2 className="text-3xl font-nunito font-bold mt-12 mb-6">Additional Resources</h2>
        <p>
          To further assist you in this process, we offer additional examples:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><a href={`/${locale}/resources/mother-eulogy-example`} className="text-primary hover:underline">Mother - Eulogy Example</a></li>
          <li><a href={`/${locale}/resources/mother-funeral-poem-example`} className="text-primary hover:underline">Mother - Funeral Poem Example</a></li>
        </ul>

        <h2 className="text-3xl font-nunito font-bold mt-12 mb-6">Conclusion: Honouring Your Mother's Memory</h2>
        <p>
          Writing a eulogy for your mother is a final act of love and a beautiful way to honour her memory. Trust your heart, and your words will reflect the deep love and connection you shared. Remember, there's no "right" way to do this - your tribute is as unique as your mother and your relationship.
        </p>
        <p>
          At Evere, we're here to support you through this challenging task, offering guidance, tools, and compassion every step of the way. Let us help you create a beautiful tribute that celebrates your mother's life and the love you shared.
        </p>
        
        <div className="bg-primary/5 p-6 rounded-lg my-8 text-center">
          <a href={`/${locale}/ai-eulogy-writer`} className="text-primary hover:underline font-semibold">Begin Crafting Your Mother's Eulogy Now</a>
        </div>
        
        <p>
          Remember, you're not alone in this journey. Your words, whether they come easily or with difficulty, are a testament to the love you shared. Let us help you honour that love with a eulogy that truly captures the essence of your mother and your relationship.
        </p>
      </BlogArticleTemplate>
    </div>
  )
} 