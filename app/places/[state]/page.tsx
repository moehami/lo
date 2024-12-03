import { Metadata } from 'next';
import { StatePageContent } from '@/components/states/state-page-content';

// List of all US states for static generation
const states = [
  "alabama", "alaska", "arizona", "arkansas", "california", "colorado", "connecticut",
  "delaware", "florida", "georgia", "hawaii", "idaho", "illinois", "indiana", "iowa",
  "kansas", "kentucky", "louisiana", "maine", "maryland", "massachusetts", "michigan",
  "minnesota", "mississippi", "missouri", "montana", "nebraska", "nevada", "new-hampshire",
  "new-jersey", "new-mexico", "new-york", "north-carolina", "north-dakota", "ohio",
  "oklahoma", "oregon", "pennsylvania", "rhode-island", "south-carolina", "south-dakota",
  "tennessee", "texas", "utah", "vermont", "virginia", "washington", "west-virginia",
  "wisconsin", "wyoming"
];

export async function generateMetadata({ params }: { params: { state: string } }): Promise<Metadata> {
  const stateFormatted = params.state
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `Bin Stores in ${stateFormatted} | Find Discount Stores`,
    description: `Discover the best bin stores and liquidation centers in ${stateFormatted}. Find great deals and discounts near you.`,
  };
}

export async function generateStaticParams() {
  return states.map((state) => ({
    state: state,
  }));
}

export default function StatePage({ params }: { params: { state: string } }) {
  return <StatePageContent state={params.state} />;
}