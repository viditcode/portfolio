import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md text-center">
        <Image
          src="/images/404-illustration.svg"
          alt=""
          width={240}
          height={240}
          className="mx-auto mb-8"
        />
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          This page took a wrong turn
        </h1>
        <p className="text-gray-500 mb-8">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-lg bg-[#0F6E56] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#0c5a46] transition-colors"
          >
            Back to homepage
          </Link>
          <Link
            href="/blog"
            className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:border-gray-400 transition-colors"
          >
            Browse the blog
          </Link>
        </div>
      </div>
    </main>
  )
}