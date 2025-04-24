# JavaScript Usage Analysis

## Large Files (>50 KB)


## Unused Dependencies
- `@heroicons/react`
- `@netlify/plugin-nextjs`
- `@next/bundle-analyzer`
- `@stripe/stripe-js`
- `@types/node`
- `@types/react`
- `@types/react-dom`
- `autoprefixer`
- `critters`
- `cross-env`
- `eslint`
- `eslint-config-next`
- `framer-motion`
- `glob`
- `i18next`
- `image-size`
- `imagemin`
- `netlify-plugin-cache`
- `next`
- `next-i18next`
- `postcss`
- `react`
- `react-dom`
- `react-i18next`
- `sharp`
- `stripe`
- `tailwindcss`
- `terser-webpack-plugin`
- `typescript`

## Code Splitting Candidates


## Recommendations
1. Add dynamic imports for large components that aren't immediately needed
   ```jsx
   const HeavyComponent = dynamic(() => import('./HeavyComponent'))
   ```
2. Convert large utility files to ES modules with named exports
3. Use tree-shakable libraries when possible
4. Lazy load components below the fold
5. Remove unused dependencies identified above
