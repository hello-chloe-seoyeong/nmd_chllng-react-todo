import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export enum Categories {
  "TODO" = "TODO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "categoryState",
  default: Categories.TODO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDoState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});

export const customCategoryState = atom<string[]>({
  key: "customCategoryState",
  default: [],
});

export const allCategoryState = atom<string[]>({
  key: "allCatogoryState",
  default: [...Object.keys(Categories)],
});

export const categorySelector = selector({
  key: "categorySelector",
  get: ({ get }) => {
    const defaultCate = get(allCategoryState);
    const customCate = get(customCategoryState);
    return [...defaultCate, ...customCate];
  },
});
