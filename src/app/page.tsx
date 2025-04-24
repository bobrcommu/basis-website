import { redirect } from 'next/navigation';
import { DEFAULT_LOCALE } from '@/lib/locales';

export const dynamic = 'force-static';

export default function RootPage() {
  // For static export, always redirect to default locale
  redirect(`/${DEFAULT_LOCALE}`);
}
