import { IControl } from '../interfaces';
import { and } from './and';

describe('The `and()` operator function', () => {
  const controlA: IControl<boolean> = {
    label: '[A]',
    query: () => false,
  };

  const controlB: IControl<boolean> = {
    label: '[B]',
    query: () => true,
  };

  const control = and(controlA, controlB);

  it('correctly combines labels', () => {
    expect(control.label).toEqual('[A] + [B]');
  });

  it('makes the combined query work as expected', () => {
    expect(control.query()).toEqual(false);
  });

  it('throws an error when less than two controls are specified', () => {
    expect(() => and(controlA)).toThrow(Error);
  });
});
