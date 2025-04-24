# Using Locize for Translations

This document explains how the Locize integration is implemented and how to use it for managing translations in the EverE Memorial project.

## What is Locize?

Locize is a translation management system that helps in organizing and maintaining translations for your application. It provides:

- A cloud-based translation management interface
- API access for programmatic integration
- Machine translation capabilities
- Collaboration tools for translators

## Setup Information

The project is configured with the following Locize settings:

- **Project ID**: 578277be-b3b6-44f6-ab4f-efefdf5adaeb
- **API Key**: 6437ec51-6944-49a4-8b70-05f7cdf07093 (Keep this private)
- **Version**: latest
- **Namespaces**: translation

## Supported Languages

The application currently supports the following languages:

- English (en) - Default
- Dutch (nl)
- French (fr)
- German (de)
- Spanish (es)

## Local Translation Files

Local translation files are stored in the `public/locales` directory with the following structure:

```
public/locales/
├── en/
│   └── translation.json
├── nl/
│   └── translation.json
├── fr/
│   └── translation.json
├── de/
│   └── translation.json
└── es/
    └── translation.json
```

These files can be used as a backup or for initial setup of translations in Locize.

## Translation Scripts

Several scripts have been created to help manage translations:

1. **upload-translations.js**
   - Basic script that uploads translations to Locize
   - `node scripts/upload-translations.js`

2. **import-to-locize.js**
   - Uploads translations from the local `locize-init.json` file
   - `node scripts/import-to-locize.js`

3. **final-upload-translations.js**
   - Uploads translations with flattened structure to avoid "nested too deeply" errors
   - `node scripts/final-upload-translations.js`

4. **force-upload-translations.js**
   - Uploads translations for non-English languages by sending each key individually
   - Useful when having issues with bulk uploads
   - `node scripts/force-upload-translations.js`

5. **trigger-machine-translation.js**
   - Attempts to trigger machine translation (may have API limitations)
   - `node scripts/trigger-machine-translation.js`

## Using Translations in Components

The application provides a simple hook for accessing translations in components:

```jsx
import { useTranslatedContent } from '@/lib/useTranslatedContent';

function MyComponent() {
  // Get translated content using the key path
  const title = useTranslatedContent('home.hero.title', 'Default Title');
  
  return <h1>{title}</h1>;
}
```

The hook takes two parameters:
- `keyPath`: Dot notation path to the translation in the JSON structure (e.g., 'home.hero.title')
- `defaultMessage`: (Optional) Fallback message to display if the translation is not found

## Translation Structure

Translations are organized in a nested structure like:

```json
{
  "common": {
    "buttons": {
      "getStarted": "Get Started"
    }
  },
  "home": {
    "hero": {
      "title": "Transform Memories into Lasting Digital Legacies"
    }
  }
}
```

When accessing these translations in components, use dot notation:
- `common.buttons.getStarted`
- `home.hero.title`

## Managing Translations

### Adding New Translations

1. Add new keys to the English translation file (`public/locales/en/translation.json`)
2. Run the upload script: `node scripts/final-upload-translations.js`
3. (Optional) Force upload translations for other languages: `node scripts/force-upload-translations.js`

### Updating Translations via Locize Dashboard

1. Log in to the [Locize Dashboard](https://locize.app)
2. Navigate to your project (ID: 578277be-b3b6-44f6-ab4f-efefdf5adaeb)
3. Edit translations directly on the dashboard

### Testing Translations

Visit these pages to test the translation system:

```
http://localhost:3000/en/translation-example  # Translation example page
http://localhost:3000/en/locize-test          # Locize API test page
```

## Troubleshooting

### Translations Not Loading

1. Check browser console for errors
2. Verify that Locize API credentials are correct in `src/lib/locizeService.ts`
3. Make sure you have the correct translation keys in your components

### API Errors

If you encounter API errors when uploading translations:

1. Check if the keys are too deeply nested (use `final-upload-translations.js` which flattens the structure)
2. Try the individual key upload method with `force-upload-translations.js`
3. Check your API quota and limits on the Locize dashboard

## Additional Resources

- [Locize Documentation](https://docs.locize.com/)
- [i18next Framework](https://www.i18next.com/)
- [Locize API Reference](https://docs.locize.com/integration/api)
