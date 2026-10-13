import { SiteShell, shellMetadata, shellViewport } from "@/views/SiteShell";

export const metadata = shellMetadata("sr");
export const viewport = shellViewport;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="sr">{children}</SiteShell>;
}
