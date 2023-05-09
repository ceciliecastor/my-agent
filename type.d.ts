type Homes = {
  energylabel: String;
  type: String;
  images: [];
  gross: Number;
  payment: Number;
  price: Number;
  city: String;
  cost: Number;
  basementsize: Number;
  lotsize: Number;
  netto: Number;
  rooms: String;
  adress1: String;
  livingspace: Number;
  built: Number;
  floorplan: [];
  description: String;
  lat: Number;
  long: Number;
  agent: [];
  users: [];
  id: String;
};

type Images = {
  name: String;
  size: number;
  width: number;
  height: number;
  url: string;
};

type Floorplan = {
  name: String;
  size: Number;
};

type Agent = {
  name: String;
  title: String;
  phone: String;
  email: String;
  image: [];
  id: String;
};

type Image = {
  name: String;
  size: number;
};
