import { ADD_TODO, MARK_AS_DONE, DELETE } from '../todos';

describe('todos constants', () => {
  it('should match ADD_TODO constant', () => {
    expect(ADD_TODO).toBe('TODOS:ADD');
  });
});
