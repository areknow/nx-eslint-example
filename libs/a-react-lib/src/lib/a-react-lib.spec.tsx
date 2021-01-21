import React from 'react';
import { render } from '@testing-library/react';

import AReactLib from './a-react-lib';

describe('AReactLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AReactLib />);
    expect(baseElement).toBeTruthy();
  });
});
