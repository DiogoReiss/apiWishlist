
export type Products = {
  id: number;
  title: string;
  image: {
    id: number;
    src: string;
  };
  wish: boolean;
}

export type Costumer = {
  id: number; 
  first_name: string;
  last_name: string;
  emaiL?: string;
}