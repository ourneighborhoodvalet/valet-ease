export const SITE = {
  brandName: "Neighborhood Valet Services",
  domain: "neighborhoodvalet.com",
  serviceArea: "Myrtle Beach & Horry County, SC",

  // Update these if needed:
  phoneE164: "+18432518798",
  phoneDisplay: "(843) 251-8798",
  email: "",

  // If you want the contact form to save leads to Wix CMS, create a CMS collection
  // (example: contact_submissions) and put the collection ID here:
  contactCollectionId: "contact_submissions",
} as const;

export type SiteConfig = typeof SITE;
