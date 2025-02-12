"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSessionToken = async () => {
      try {
        const tokenResponse = await fetch(
          "https://easework-auth.agreeablemeadow-f51dff9d.centralindia.azurecontainerapps.io/auth/authenticate",
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (!tokenResponse.ok) {
          throw new Error("Backend authentication failed");
        }

        const data = await tokenResponse.json();
        
        // If the specific success message and user structure is expected
        if (data.message === "Logged in successfully" && data.user) {
          setUser(data.user);
        } else {
          throw new Error("Invalid authentication response");
        }
      } catch (error) {
        console.error("Authentication error:", error);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchSessionToken();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>
        Welcome, <strong>{user.name}</strong>!
      </p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default DashboardPage;