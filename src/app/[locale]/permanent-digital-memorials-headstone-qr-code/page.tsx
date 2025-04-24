import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Permanent Digital Memorials: Headstone QR Code Guide | Evere',
  description: 'Weather-resistant QR plaques link graves to digital stories. See plans from Free to €97.',
}

export default function PermanentDigitalMemorialsPage({ params: { locale } }: { params: { locale: string } }) {
  // Redirect to the actual article
  redirect(`/${locale}/blog/grave-qr-code-video-comparison`)
} 