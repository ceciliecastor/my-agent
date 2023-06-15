type Homes = {
  energylabel: string;
  type: string;
  images: {
    name: string;
    size: number;
    width: number;
    height: number;
    url: string;
    formats: {
      thumbnail: {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        width: number;
        height: number;
        size: number;
        path: null;
        url: string;
        provider_metadata: {
          public_id: string;
          resource_type: string;
        };
      };
    };
    provider_metadata: {
      public_id: string;
      resource_type: string;
      id: string;
    };
  }[];
  gross: number;
  payment: number;
  price: number;
  city: string;
  cost: number;
  basementsize: number;
  lotsize: number;
  netto: number;
  postalcode: number;
  rooms: string;
  adress1: string;
  adress2: string;
  livingspace: number;
  built: number;
  remodel: number;
  floorplan?: {
    name: string;
    size: number;
    url: string;
    formats: {
      thumbnail: {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        width: number;
        height: number;
        size: number;
        path: null;
        url: string;
        provider_metadata: {
          public_id: string;
          resource_type: string;
        };
      };
    };
    provider_metadata: {
      public_id: string;
      resource_type: string;
      width: number;
      height: number;
      id: string;
    };
  };
  description: string;
  lat: number;
  long: number;
  agent: {
    name: string;
    title: string;
    phone: string;
    email: string;
    image: {
      name: string;
      size: number;
      url: string;
      formats: {
        thumbnail: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          width: number;
          height: number;
          size: number;
          path: null;
          url: string;
          provider_metadata: {
            public_id: string;
            resource_type: string;
          };
        };
      };
      provider_metadata: {
        public_id: string;
        resource_type: string;
        width: number;
        height: number;
        id: string;
      };
    };
  };
  users: [];
  id: string;
};

type Agent = {
  name: string;
  title: string;
  phone: string;
  email: string;
  image: {
    name: string;
    size: number;
    url: string;
    formats: {
      thumbnail: {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        width: number;
        height: number;
        size: number;
        path: null;
        url: string;
        provider_metadata: {
          public_id: string;
          resource_type: string;
        };
      };
    };
    width: number;
    height: number;
    id: string;
  };
  id: string;
};
