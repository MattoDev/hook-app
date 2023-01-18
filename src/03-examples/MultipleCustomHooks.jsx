import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

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

      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

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
