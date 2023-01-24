import { useParams } from 'react-router-dom';

export const Page2 = (): JSX.Element => {
  const { petId } = useParams<{ petId: string }>();
  return <div>Page1 - {petId}</div>;
};
