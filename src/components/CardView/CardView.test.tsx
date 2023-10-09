import React from 'react';
import { render, screen } from '@testing-library/react';
import CardView, {CardViewInfo} from './CardView';

test('renders learn react link', () => {
    const cardViewInfo: CardViewInfo = {
        title: "Sample Card",
        description: "This is a sample card view info.",
        owner: "John Doe",
        properties: ["Property 1", "Property 2", "Property 3"],
        metrics: ["Metric 1", "Metric 2", "Metric 3"]
      };
  render(<CardView cardViewInfo={cardViewInfo} onCardClick={jest.fn()} />);
});
