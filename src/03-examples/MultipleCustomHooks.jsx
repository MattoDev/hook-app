import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement, reset } = useCounter();
  const { data, isLoading, hasErrror } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );
  console.log({ data, isLoading, hasErrror });

  const { author, quote } = !!data && data[0];

  /*   if (isLoading) {
    return <h1>Loading...</h1>;
  }
 */
  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment()}
      >
        Next quote
      </button>
    </>
  );
};
