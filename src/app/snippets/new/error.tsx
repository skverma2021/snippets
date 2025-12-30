'use client';

interface errorPageProps {
    error: Error;
    // reset: () => void;
}

export default function ErrorPage({ error }: errorPageProps) {
    return (
        <div className="p-4 bg-red-100 border border-red-400 rounded">
            {error.message}
        </div>
    );
}