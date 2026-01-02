import Link from 'next/link';
import { HiHome } from 'react-icons/hi2';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50 px-4">
            <div className="text-center">
                <div className="text-6xl md:text-8xl font-bold text-indigo-600 mb-4">404</div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Page Not Found
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                    <HiHome className="text-xl" />
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
