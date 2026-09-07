import type { Metadata } from 'next'
import ComingSoon from '@/components/ComingSoon'

export const metadata: Metadata = {
    title: 'Services — Coming Soon | Vidit Code',
    description: 'Freelance and consulting services are on the way. Subscribe to get notified when they launch.',
    alternates: { canonical: '/services' },
    robots: { index: false, follow: true },
}

export default function ServicesPage() {
    return (
        <ComingSoon
            featureName="Services"
            illustration="/images/coming-soon-illustration.svg"
        />
    )
}