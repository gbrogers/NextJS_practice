import styles from "./ArticleList.module.scss";
import ArticleItem from "../ArticleItem/ArticleItem";
export default function ArticleList({ articles }) {
  return (
    <div className={styles.grid}>
      {articles.map((article) => (
        <ArticleItem article={article} />
      ))}
    </div>
  );
}
