import { fakeListings } from "./fake-data";

export const getListingRoute = {
  method: "GET",
  path: "/api/listings/{id}",
  handler: (req, h) => {
    const id = req.params.id;
    return fakeListings.find((listing) => listing.id === id);
  },
};
