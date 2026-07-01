// Stripe Payment Links (hosted by Stripe — safe to expose publicly).
export const STRIPE_LINKS = {
  regular: "https://buy.stripe.com/7sYbJ33ZM6vOert10K4ko02", // $10/year, recurring
  life: "https://buy.stripe.com/9B6dRb1RE6vOdnp4cW4ko01", // $100, one-time
  donation: "https://buy.stripe.com/7sYbJ3gMy7zSabd7p84ko00", // $20, one-time (repeatable)
};

// Maps a Stripe checkout total (in cents) to a human-readable membership type.
// Update these if the corresponding Payment Link prices change.
export function membershipTypeFromAmount(amountTotalCents: number | null | undefined): string {
  switch (amountTotalCents) {
    case 1000:
      return "Regular Membership (annual)";
    case 10000:
      return "Life Membership";
    case 2000:
      return "Donation";
    default:
      return "Payment";
  }
}
