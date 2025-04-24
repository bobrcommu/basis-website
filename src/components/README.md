# Evere Memorial Components

This directory contains reusable components for the Evere Memorial website.

## BlogArticleTemplate

The `BlogArticleTemplate` component provides a consistent layout and styling for all blog articles on the Evere website.

### Usage

```tsx
import BlogArticleTemplate from '@/components/BlogArticleTemplate';

export default function YourBlogArticlePage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <BlogArticleTemplate
      title="Your Blog Article Title"
      date="Month DD, YYYY"
      readTime="5 min"
      heroImage="/path-to-image.webp"
      heroImageAlt="Description of the image"
      locale={locale}
      ctaLink="/products" // Optional
      ctaText="Custom CTA Text" // Optional
    >
      {/* Your article content goes here */}
      <h2 className="text-3xl font-nunito font-bold mt-12 mb-6">Section Title</h2>
      <p>Your paragraph content...</p>
      
      {/* More sections */}
    </BlogArticleTemplate>
  );
}
```

### Props

| Prop | Type | Description | Required |
|------|------|-------------|----------|
| title | string | The title of the blog article | Yes |
| date | string | Publication date of the article | Yes |
| readTime | string | Estimated reading time | Yes |
| heroImage | string | Path to the hero image | Yes |
| heroImageAlt | string | Alt text for the hero image | Yes |
| locale | string | Current locale from params | Yes |
| children | ReactNode | The content of the article | Yes |
| ctaLink | string | Path for the call-to-action button | No |
| ctaText | string | Text for the call-to-action button | No |

### Styling Notes

- The component includes a top padding of 40px (`pt-40`) to ensure content is not hidden behind the fixed header.
- The hero image has a height of 24rem (`h-96`) and uses object-fit cover for optimal display.
- Article content should use the appropriate heading and paragraph styles for consistency. 