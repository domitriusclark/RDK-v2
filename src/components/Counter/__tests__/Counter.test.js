import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from 'react-apollo/test-utils';
import {GET_COUNTER} from '../Counter';
import Counter from '../Counter';

const mocks = [
  {
    request: {
      query: GET_COUNTER
    },
    result: {
      data: {
        counter: {
            count: 0,
            incrementBy: 1
        },
      },
    },
  },
];

it('renders without error', () => {
    TestRenderer.create(
        <MockedProvider mocks={mocks} addTypename={false}>
            <Counter />
        </MockedProvider>,
    );
});
