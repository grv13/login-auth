'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleLoginRedirect = () => {
    router.push('/login');
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to the Next.js OAuth App</h1>
      <button onClick={handleLoginRedirect} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Login
      </button>
    </div>
  );
}
