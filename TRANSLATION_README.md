# Internationalization (i18n) with Google Cloud Translation API

This document explains how internationalization is implemented in the EverE Memorial project using Google Cloud Translation API.

## Supported Languages

The application currently supports the following languages:

- English (en) - Default
- Dutch (nl)
- French (fr)
- German (de)
- Spanish (es)

## Directory Structure

```
ereve-memorial/
├── messages/                  # Translation JSON files
│   ├── en.json                # English translations (source)
│   ├── nl.json                # Dutch translations
│   ├── fr.json                # French translations
│   ├── de.json                # German translations
│   └── es.json                # Spanish translations
│
├── middleware.ts              # Middleware for language routing
├── src/
│   ├── lib/
│   │   ├── TranslationContext.tsx       # Context provider for translations
│   │   ├── translationService.ts        # Google Cloud Translation API service
│   │   └── useTranslatedContent.ts      # Hook for accessing translations
│   │
│   ├── app/
│   │   └── [locale]/                    # Localized routes
│   │       ├── layout.tsx               # Layout for localized routes
│   │       ├── page.tsx                 # Home page with localization
│   │       └── translation-example/     # Example page demonstrating translations
│   │
│   └── components/
│       ├── LanguageSelector.tsx         # Language selector component
│       └── TranslationExample.tsx       # Example component using translations
│
└── scripts/
    └── translate.ts                     # Script to generate translations using Google API
```

## Setup Instructions

### 1. Set up Google Cloud Translation API

1. Create a Google Cloud project: https://console.cloud.google.com/
2. Enable the Cloud Translation API: https://console.cloud.google.com/apis/library/translate.googleapis.com
3. Create an API key: https://console.cloud.google.com/apis/credentials
4. Copy `.env.local.example` to `.env.local` and update with your API key:

```
# Google Cloud API Key (Required)
GOOGLE_CLOUD_API_KEY=your-api-key-here

# Google Cloud Project ID (Optional)
GOOGLE_CLOUD_PROJECT_ID=your-project-id
```

Note: For this project, the API key is already set up as `AIzaSyCmrvNONZ3OocsIACsJ9wj2ZZ7efI0c-OI`.

### 2. Generate Translations

You can use the included script to automatically generate translations for all supported languages from the English source:

```bash
# Install dependencies if you haven't already
npm install

# Run the translation script
npx ts-node scripts/translate.ts
```

This will read the English translations from `messages/en.json` and generate translated versions for all other supported languages.

## Using Translations in Components

The application provides a simple hook for accessing translations in your React components:

```jsx
import { useTranslatedContent } from '@/lib/useTranslatedContent';

function MyComponent() {
  // Get translated content using the key path
  const title = useTranslatedContent('home.hero.title', 'Default Title');
  
  return <h1>{title}</h1>;
}
```

The hook takes two parameters:
- `keyPath`: Dot notation path to the translation in the JSON file (e.g., 'home.hero.title')
- `defaultMessage`: (Optional) Fallback message to display if the translation is not found

## Testing the Translation System

Visit the translation example page to see the system in action:

```
http://localhost:3000/en/translation-example  # English
http://localhost:3000/nl/translation-example  # Dutch
http://localhost:3000/fr/translation-example  # French
http://localhost:3000/de/translation-example  # German
http://localhost:3000/es/translation-example  # Spanish
```

## Adding a New Language

To add support for a new language:

1. Add the language code to the `SUPPORTED_LOCALES` array in `middleware.ts`
2. Add the language to the `i18n.locales` array in `next.config.js`
3. Add the language name and code to the `LANGUAGE_NAMES` and `LANGUAGE_CODES` objects in `src/lib/translationService.ts`
4. Create a new translation file in the `messages/` directory (you can use the translation script to generate it automatically)

## Modifying Translations

The primary source of truth for translations is the English file (`messages/en.json`). When you update this file, you should regenerate the other translation files using the translation script.

For development, you can manually edit the translation files as needed, but for production, it's recommended to use the translation script to ensure consistency.

## Language Routing

The application uses middleware-based routing to handle language prefixes in URLs. The middleware will:

1. Detect the user's preferred language from the browser's `Accept-Language` header
2. Redirect to the appropriate localized route (e.g., `/en/about` -> `/fr/about`)
3. Default to English if the preferred language is not supported

## Implementation Details

- The translations are loaded server-side in the `[locale]/layout.tsx` file
- The `TranslationProvider` makes the translations available to all components through React Context
- The `useTranslatedContent` hook provides a simple way to access translations in components
- The language selector component allows users to switch languages manually
