import { TestWatcher } from 'jest';
import getStatusOfHealth from '../app';

test('status healthy', () => {
    const result = getStatusOfHealth({ name: 'Маг', health: 80 });
    expect(result).toBe('healthy');
});

test('status wounded', () => {
    const result = getStatusOfHealth({ name: 'Маг', health: 45 });
    expect(result).toBe('wounded');
  });
  
  
  test('status critical', () => {
    const result = getStatusOfHealth({ name: 'Маг', health: 10 });
    expect(result).toBe('critical');
  });