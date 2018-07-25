import {get} from 'lodash';

const sizes = {
  roundButton: {
    size: '36px',
  },
};

export const size = s => get(sizes, s);
