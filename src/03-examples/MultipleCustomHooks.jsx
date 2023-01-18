import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { data, isLoading, hasErrror } = useFetch(
    "https://api.breakingbadquotes.xyz/v1/quotes/1"
  );
  console.log({ data, isLoading, hasErrror });
  return (
    <>
      <h1>BreakingBad Quotes</h1>
    </>
  );
};
