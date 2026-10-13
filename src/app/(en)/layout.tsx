import { SiteShell, shellMetadata, shellViewport } from "@/views/SiteShell";

export const metadata = shellMetadata("en");
export const viewport = shellViewport;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="en">{children}</SiteShell>;
}
