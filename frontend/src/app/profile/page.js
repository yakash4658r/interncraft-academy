"use client";

import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch("http://localhost:5000/api/auth/me", {
        credentials: "include",
      });
      const data = await res.json();
      if (data.success) {
        setUser(data.user);
      }
    };

    getUser();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 p-10">
      <h1 className="text-2xl font-bold text-slate-900">Profile Page</h1>

      {user ? (
        <pre className="mt-6 rounded-xl bg-white p-6 shadow-sm">
          {JSON.stringify(user, null, 2)}
        </pre>
      ) : (
        <p className="mt-4 text-slate-600">Loading user...</p>
      )}
    </main>
  );
}