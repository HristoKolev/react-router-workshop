import { useNavigate, useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';

export const Page1 = (): JSX.Element => {
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleOnNextClick = useCallback(() => {
    setSearchParams(
      `from=${Number(searchParams.get('from')) + 10}&to=${
        Number(searchParams.get('to')) + 10
      }`
    );
  }, [searchParams, setSearchParams]);

  const handleOnGoToPage2Click = useCallback(() => {
    navigate('/page2/42?from=20&to=30');
  }, [navigate]);

  return (
    <div>
      Page1 - {searchParams.get('from')} - {searchParams.get('to')}
      <div>
        <button onClick={handleOnNextClick}>Next</button>
      </div>
      <div>
        <button onClick={handleOnGoToPage2Click}>Go to Page 2</button>
      </div>
    </div>
  );
};
