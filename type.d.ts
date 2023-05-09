// type Homes = {
//   energylabel: String;
//   type: String;
//   images: [];
//   gross: Number;
//   payment: Number;
//   price: Number;
//   city: String;
//   cost: Number;
//   basementsize: Number;
//   lotsize: Number;
//   netto: Number;
//   rooms: String;
//   adress1: String;
//   livingspace: Number;
//   built: Number;
//   floorplan: [];
//   description: String;
//   lat: Number;
//   long: Number;
//   agent: [];
//   users: [];
//   id: String;
// };

// type Images = {
//   name: String;
//   size: number;
//   width: number;
//   height: number;
//   url: string;
//   formats: [];
// };

// type Formats = {
//     name: String,
//     hash: String,
//     ext: String,
//     mime: String,
//     width: String,
//     height: String,
//     size: String,
//     path: null,
//     url: String,

// }

// type Floorplan = {
//   name: String;
//   size: Number;
// };

// type Agent = {
//   name: String;
//   title: String;
//   phone: String;
//   email: String;
//   image: [];
//   id: String;
// };

// type Image = {
//   name: String;
//   size: number;
// };

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
  livingspace: number;
  built: number;
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
