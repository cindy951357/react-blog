"use client";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = "Cindy's Blog";
  }, []);
  
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Blog      
      </main>
    </>
    
  );
}
