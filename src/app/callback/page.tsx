'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { SpotifyApi } from "@spotify/web-api-ts-sdk";

export default function Callback() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleCallback = async () => {
      const code = searchParams.get('code');
      if (code) {
        try {
          const api = SpotifyApi.withUserAuthorization(
            "2ed4fc268c514d97999c37c2c9773243",
            `${window.location.origin}/callback`,
            ["user-read-private", "user-read-email"]
          );
          await api.authenticate();
          router.push('/');
        } catch (error) {
          console.error("Error during authentication:", error);
        }
      } else {
        console.error("No authorization code found in URL");
      }
    };

    handleCallback();
  }, [searchParams, router]);

  return <div>Processing login...</div>;
}