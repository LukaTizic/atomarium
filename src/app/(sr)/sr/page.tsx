import { HomeView, homeMetadata } from "@/views/HomeView";

export const metadata = homeMetadata("sr");

export default function Page() {
  return <HomeView lang="sr" />;
}
