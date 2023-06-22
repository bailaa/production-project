import { counterReducer } from './model/slice/counterSlice';
import { Counter } from './ui/Counter';
import { CounterSchema } from './model/types/counterSchema'; // 15.22 возможно поправить импорт

export {
  counterReducer,
  Counter,
  CounterSchema,
};
