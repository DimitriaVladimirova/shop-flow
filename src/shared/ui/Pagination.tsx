import { Button } from './Button';

type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const isFirstPage = page <= 1;
  const isLastPage = page >= totalPages;
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-2">
      <Button
        size="sm"
        variant="outline"
        disabled={isFirstPage}
        onClick={() => onPageChange(page - 1)}
      >
        Previous
      </Button>

      {pageNumbers.map((pageNumber) => (
        <Button
          key={pageNumber}
          size="sm"
          variant={pageNumber === page ? 'primary' : 'outline'}
          aria-current={pageNumber === page ? 'page' : undefined}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </Button>
      ))}

      <Button
        size="sm"
        variant="outline"
        disabled={isLastPage}
        onClick={() => onPageChange(page + 1)}
      >
        Next
      </Button>
    </nav>
  );
}
