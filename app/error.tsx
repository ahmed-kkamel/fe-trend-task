"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
    const router = useRouter();

    useEffect(() => {
        console.error("Error occurred:", error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
            <h1 className="text-4xl font-bold text-red-600 mb-4">Something went wrong</h1>
            <p className="text-lg text-gray-600 mb-6">
                An unexpected error has occurred. Please try again.
            </p>
            <div className="flex gap-4">
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    onClick={() => reset()}
                >
                    Retry
                </button>
                <button
                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
                    onClick={() => router.push("/")}
                >
                    Go Home
                </button>
            </div>
        </div>
    );
}
