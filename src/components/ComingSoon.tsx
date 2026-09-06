'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ComingSoonProps {
    featureName: string
    illustration?: string // e.g. "/images/coming-soon-illustration.svg"
}

export default function ComingSoon({
    featureName,
    illustration = '/images/coming-soon-illustration.svg',
}: ComingSoonProps) {
    const [submitted, setSubmitted] = useState(false)

    return (
        <main className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-md text-center">
                <Image src={illustration} alt="" width={240} height={240} className="mx-auto mb-8" />
                <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                    {featureName} is coming soon
                </h1>
                <p className="text-gray-500 mb-8">
                    I'm building this out. Subscribe and I'll email you the moment it's live.
                </p>

                {submitted ? (
                    <p className="text-[#0F6E56] font-medium">You're on the list — talk soon!</p>
                ) : (
                    <form
                        action="https://app.kit.com/forms/9832242/subscriptions"
                        method="post"
                        target="_blank"
                        onSubmit={() => setSubmitted(true)}
                        className="flex flex-wrap justify-center gap-3"
                    >
                        <input
                            type="email"
                            name="email_address"
                            required
                            placeholder="you@email.com"
                            className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm w-56 focus:outline-none focus:border-[#0F6E56]"
                        />
                        <button
                            type="submit"
                            className="rounded-lg bg-[#0F6E56] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#0c5a46] transition-colors"
                        >
                            Notify me
                        </button>
                    </form>
                )}
            </div>
        </main>
    )
}