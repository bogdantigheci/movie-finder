import _ from 'lodash';

export const getUsers = (state) => _.get(state, 'users', []);
