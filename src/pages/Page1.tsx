import { useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';

export const Page1 = (): JSX.Element => {
  let [searchParams, setSearchParams] = useSearchParams();

  const handleOnNextClick = useCallback(() => {
    setSearchParams(
      `from=${Number(searchParams.get('from')) + 10}&to=${
        Number(searchParams.get('to')) + 10
      }`
    );
  }, [searchParams, setSearchParams]);

  return (
    <div>
      Page1 - {searchParams.get('from')} - {searchParams.get('to')}
      <div>
        <button onClick={handleOnNextClick}>Next</button>
      </div>
    </div>
  );
};
