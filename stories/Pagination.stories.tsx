import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationButton,
  PaginationPrevious,
  PaginationNext,
} from '../src/components/ui/pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
};
export default meta;

const Example = ({ total }: { total: number }) => {
  const [current, setCurrent] = useState(1);
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`?page=${current - 1}`}
            onClick={(e) => {
              e.preventDefault();
              setCurrent((c) => Math.max(1, c - 1));
            }}
          />
        </PaginationItem>
        {Array.from({ length: total }, (_, i) => i + 1).map((page) => (
          <PaginationItem key={page}>
            <PaginationButton
              page={page}
              isActive={page === current}
              onClick={(e) => {
                e.preventDefault();
                setCurrent(page);
              }}
            />
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href={`?page=${current + 1}`}
            onClick={(e) => {
              e.preventDefault();
              setCurrent((c) => Math.min(total, c + 1));
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export const OnePage: StoryObj<typeof Pagination> = {
  render: () => <Example total={1} />,
};

export const FivePages: StoryObj<typeof Pagination> = {
  render: () => <Example total={5} />,
};

export const TenPages: StoryObj<typeof Pagination> = {
  render: () => <Example total={10} />,
};
