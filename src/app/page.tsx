import { ModeToggle } from "@/components/ModeToggle";
import ServiceListingCards from "@/components/service-listing-cards";

export default function Home() {
  return (
    <>
      <div className="fixed top-4 right-4">
        <ModeToggle />
        <ServiceListingCards />
      </div>
    </>
  );
}
