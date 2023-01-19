export type RestaurantId = number;

export type RestaurantTitle = string;

export type RestaurantDesc = string;

export type RestaurantItem = {
  id: RestaurantId;
  title: RestaurantTitle;
  description: RestaurantDesc;
};

export type RestaurantState = {
  list: RestaurantItem[];
};

export type RestaurantAction =
  | { type: 'GET_RESTS'; payload: RestaurantItem[] }
  | { type: 'EDIT_REST'; payload: RestaurantItem };
