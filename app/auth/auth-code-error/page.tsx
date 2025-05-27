"use client";

import Link from 'next/link';

export default function AuthCodeErrorPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
          Authentication Error
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          There was an error during the authentication process. This could be due to an invalid or expired link.
        </p>
        <div className="mt-6 text-center">
          <Link
            href="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            Go back to Login
          </Link>
        </div>
         <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          If you were trying to confirm your email for signup, please try signing up again or contact support if the issue persists.
        </p>
      </div>
    </div>
  );
}
