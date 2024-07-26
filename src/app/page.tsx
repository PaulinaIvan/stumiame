'use client';

import { useEffect, useState } from "react";
import { SpotifyApi } from "@spotify/web-api-ts-sdk";

type UserData = {
  display_name: string;
  images: { url: string }[];
};

export default function Home() {
  const [isRolling, setIsRolling] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  const rollBall = () => {
    setIsRolling(true);
    setTimeout(() => {
      setIsRolling(false);
    }, 3000);
  };

  const handleLogin = () => {
    SpotifyApi.performUserAuthorization(
      "2ed4fc268c514d97999c37c2c9773243", //Hardcoded
      `${window.location.origin}/callback`,
      ["user-read-private", "user-read-email"],
      `${window.location.origin}/api/accept-user-token`
    );
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const api = SpotifyApi.withUserAuthorization(
          "2ed4fc268c514d97999c37c2c9773243", //Hardcoded
          `${window.location.origin}/callback`,
          ["user-read-private", "user-read-email"]
        );
        
        if (await api.authenticate()) {
          const profile = await api.currentUser.profile();
          setUserData(profile);
        } else {
          console.log("Not authenticated");
        }
      } catch (error) {
        console.error('Error checking auth:', error);
      }
    };

    checkAuth();
  }, []);

  console.log("Current userData:", userData);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="hill"></div>

      {userData ? (
        <div className="welcome-message">
          <p>Mes tave stebime, {userData.display_name}...</p>
        </div>
      ) : (
        <button 
          className="login-button" 
          aria-label="Login with Spotify"
          onClick={handleLogin}
        >
          <img src="/spotify.png" alt="Spotify Logo" className="round-image" />
        </button>
      )}

      <div className={`stickman ${isRolling ? "pushing" : ""}`}>
        <div className="head"></div>
        <div className="body"></div>
        <div className="arm left"></div>
        <div className="arm right"></div>
        <div className="leg left"></div>
        <div className="leg right"></div>
      </div>

      <button
        className={`rolling-ball-button ${isRolling ? "rolling" : ""}`}
        onClick={rollBall}
        aria-label="Start rolling animation"
      >
        {userData && userData.images && userData.images.length > 0 ? (
          <img 
            src={userData.images[1].url} 
            alt={`${userData.display_name}'s profile`} 
            className="round-image"
          />
        ) : (
          <img src="/logo.png" alt="Logo" className="round-image" />
        )}
      </button>
    </main>
  );
}