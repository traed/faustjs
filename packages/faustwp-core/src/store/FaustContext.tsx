import { createContext } from 'react';
import { FaustPageProps } from '../components/FaustProvider.js';

export const FaustContext = createContext<
  | ({
      __FAUST_QUERIES__?: {
        [key: string]: any;
      };
    } & FaustPageProps)
  | undefined
>(undefined);
