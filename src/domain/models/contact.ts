export type ContactModel = {
  status: string;
  results: Contact[];
  requestedAt: Date;
  startedAt: Date;
  completedAt: Date;
  links: any;
};

type Contact = {
  id: number;
  properties: {
    company: string;
    createdate: Date;
    email: string;
    firstname: string;
    lastmodifieddate: Date;
    lastname: string;
    phone: string;
    website: string;
  };
  createdAt: Date;
  updatedAt: Date;
  archived: boolean;
};
