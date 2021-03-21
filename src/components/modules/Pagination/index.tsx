import { Container } from './styles';

const MAX_ITEMS = 9;
const CURRENT_ITEM = 1;
const MAX_LEFT = (MAX_ITEMS - CURRENT_ITEM) / 2;

export default function Pagination({ limit, total, offset, setOffset }) {
  const currentPage = offset ? offset / limit + 1 : 1;
  const countPages = Math.ceil(total / limit);
  const firstPage = Math.max(currentPage - MAX_LEFT, 1);

  return (
    <Container>
      <ul>
        {Array.from({ length: Math.min(MAX_ITEMS, countPages) })
          .map((_, index) => index + firstPage)
          .map((page) => (
            <li key={page}>
              <button
                onClick={() => setOffset((page - 1) * limit)}
                className={
                  page === currentPage ? 'current-page' : ''
                }
              >
                {page}
              </button>
            </li>
          ))}
      </ul>
    </Container>
  );
}