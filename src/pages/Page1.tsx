import { useSearchParams } from 'react-router-dom';

export const Page1 = (): JSX.Element => {
  let [searchParams] = useSearchParams();

  return (
    <div>
      Page1 - {searchParams.get('from')} - {searchParams.get('to')}
    </div>
  );
};
