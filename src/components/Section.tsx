import { ReactNode } from 'react'

interface SectionProps {
  title: string;
  children: ReactNode;
  backgroundColor?: string;
}

export default function Section({ title, children, backgroundColor = 'bg-white' }: SectionProps) {
  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        {children}
      </div>
    </section>
  )
}
