export const metadata = {
    title: 'Next.js OAuth App',
    description: 'OAuth login with FastAPI backend',
  };
  
  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }
  