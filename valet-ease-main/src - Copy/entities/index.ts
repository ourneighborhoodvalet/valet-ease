/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: careers
 * Interface for CareerOpportunities
 */
export interface CareerOpportunities {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  jobTitle?: string;
  /** @wixFieldType text */
  location?: string;
  /** @wixFieldType text */
  jobDescription?: string;
  /** @wixFieldType text */
  department?: string;
  /** @wixFieldType text */
  employmentType?: string;
  /** @wixFieldType date */
  datePosted?: Date | string;
  /** @wixFieldType url */
  applicationUrl?: string;
}


/**
 * Collection ID: services
 * Interface for Services
 */
export interface Services {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  serviceName?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType text */
  detailedDescription?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  serviceImage?: string;
  /** @wixFieldType text */
  serviceCategory?: string;
}
