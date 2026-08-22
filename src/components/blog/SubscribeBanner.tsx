"use client";

import { useSearchParams } from "next/navigation";

export default function SubscribeBanner() {
    const params = useSearchParams();
    if (params.get("subscribed") !== "1") return null;

    return (
        <div className="mb-8 rounded-lg bg-signal-dim border border-signal/20 px-4 py-3 text-sm text-signal">
            Thanks for subscribing! Check your inbox (and spam folder, just in case) to confirm.
        </div>
    );
}