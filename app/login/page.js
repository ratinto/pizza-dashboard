'use client';
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    await signIn("google", { callbackUrl: "/dashboard" });
    // No setLoading(false) needed; on success, it navigates away, showing the global loader
    // On error, navigation does not happen, so you might want error handling here in a real app
  };

  return (
    <div className="flex min-h-screen bg-gray-50 items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md flex flex-col items-center">
        <div className="mb-6 flex flex-col items-center">
          <div className="bg-indigo-100 rounded-full p-4 mb-2">
            <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <h1 className="text-2xl font-extrabold text-gray-900">Sign in to Pizza Dashboard</h1>
          <p className="text-gray-500 mt-1 text-center">Welcome back! Please sign in to continue.</p>
        </div>
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition mb-4 shadow disabled:opacity-60"
          disabled={loading}
        >
          {loading ? (
            <>
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
              </svg>
              Signing in...
            </>
          ) : (
            <>
              <svg className="w-5 h-5" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M24 9.5c3.54 0 6.7 1.23 9.19 3.25l6.86-6.86C36.14 2.35 30.43 0 24 0 14.71 0 6.55 5.29 2.72 13l7.98 6.21C13.13 13.26 18.18 9.5 24 9.5z"/><path fill="#34A853" d="M46.14 24.56c0-1.64-.15-3.22-.44-4.74H24v9.21h12.43c-.54 2.87-2.18 5.31-4.69 6.96l7.26 5.65C42.67 39.41 46.14 32.83 46.14 24.56z"/><path fill="#FBBC05" d="M10.7 28.14a15.06 15.06 0 0 1-.82-4.73c0-1.65.29-3.25.82-4.73l-7.98-6.21C1.23 16.62 0 20.15 0 24c0 3.85 1.23 7.38 3.26 10.53l7.44-6.39z"/><path fill="#EA4335" d="M24 48c6.48 0 11.92-2.13 15.9-5.82l-7.26-5.65c-2.02 1.35-4.61 2.16-8.64 2.16-5.82 0-10.87-3.75-12.72-9.05l-7.44 6.39C6.55 42.71 14.71 48 24 48z"/></g></svg>
              Sign in with Google
            </>
          )}
        </button>
        <div className="text-xs text-gray-400 mt-2 text-center">
          By signing in, you agree to our <span className="underline">Terms of Service</span>.
        </div>
      </div>
    </div>
  );
}