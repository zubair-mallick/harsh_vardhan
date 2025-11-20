'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Jump instantly to the top on every route change
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
