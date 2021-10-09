import { useRouter } from "next/router";
const article = ({ article }) => {
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.id}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();
  return (props = {
    article,
  });
};
export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
};

export default article;
