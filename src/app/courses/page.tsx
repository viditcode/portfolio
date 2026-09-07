import type { Metadata } from 'next'
import ComingSoon from '@/components/ComingSoon'

export const metadata: Metadata = {
    title: 'Courses — Coming Soon | Vidit Code',
    description: 'SDET and automation testing courses are on the way. Subscribe to get notified when they launch.',
    alternates: { canonical: '/courses' },
    robots: { index: false, follow: true }, // keep it out of Google until it's actually launched
}

export default function CoursesPage() {
    return (
        <ComingSoon
            featureName="Courses"
            illustration="/images/coming-soon-illustration.svg"
        />
    )
}