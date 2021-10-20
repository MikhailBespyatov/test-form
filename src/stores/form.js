import { createEvent, createStore } from "effector";
import { deleteValues, getShema, getValues } from "utils/usefulFunc";

const addForm = createEvent();
const removeForm = createEvent();
const changeValues = createEvent();
const init = createEvent();

const formIndexs = createStore([])
  .on(addForm, (state, i) => [...state, i])
  .on(removeForm, (state, i) => {
    console.log(state, i);
    return state.filter((it) => it !== i);
  });

const values = createStore({})
  .on(addForm, (state, i) => {
    return { items: { ...state.items, ...getValues(i) } };
  })
  .on(changeValues, (_, newState) => {
    return { items: { ...newState } };
  })
  .on(removeForm, (state, i) => {
    deleteValues(state, i);
  });

const shema = createStore({})
  .on(addForm, (state, i) => {
    return { shema: { ...state.shema, ...getShema(i) } };
  })
  .on(removeForm, (state, i) => {
    deleteValues(state, i);
  });
export const formEvents = { addForm, removeForm, changeValues, init };

export const formStores = { values, formIndexs, shema };
