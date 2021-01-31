
export type Products = {
  id: number;
  title: string;
  image: {
    src: string;
  };
  productURL: string;
  userID?: string;
}

export type Costumer = {
  id: number; 
  first_name: string;
  last_name: string;
  emaiL?: string;
}