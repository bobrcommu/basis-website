import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Grave QR Code Video Showdown – Evere vs Turning Hearts & Remember Well',
  description: 'Compare grave QR code video brands. Unlimited 4K and AI grief support only at Evere.',
}

export default function GraveQrCodeReviewsPage({ params: { locale } }: { params: { locale: string } }) {
  // Redirect to the actual article
  redirect(`/${locale}/blog/grave-qr-code-video-comparison`)
} 