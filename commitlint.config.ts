/* eslint-disable hexagonal-architecture/enforce */
export default {
  extends: ['@commitlint/config-angular'],
  rules: {
    'subject-case': [2, 'always', ['sentence-case']]
  }
};
