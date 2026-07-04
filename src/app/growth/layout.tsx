import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const TITLE = 'AI Growth Agents — SEO & GEO Content Engine for Your Agency | ProspectAI';
const DESC = 'Five AI agents research keywords, plan a 90-day content calendar, write blog posts, and generate schema markup and llms.txt — so your agency ranks on Google and gets cited by AI assistants.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: `${SITE_URL}/growth` },
  keywords: [
    'SEO tool for web design agencies', 'AI SEO content generator for agencies',
    'AI content calendar generator', 'automated SEO report for clients',
    'llms.txt generator', 'GEO optimization tool', 'AI schema markup generator',
    'website growth plan generator',
  ],
  openGraph: {
    title: TITLE, description: DESC,
    url: `${SITE_URL}/growth`, siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: [`${SITE_URL}/og-image.png`] },
};

export default function GrowthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
