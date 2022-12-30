import { TItems } from "../pages/types";

export const getElementById = (id: string, elementList: TItems) => {
    return elementList.find((element) => {
      return element.id === Number(id);
    });
  };

export const getIndexById = (id: string, elementList: TItems) => {
  return elementList.findIndex((element) => {
    return element.id === Number(id);
  });
};