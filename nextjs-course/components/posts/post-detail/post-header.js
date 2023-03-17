import classes from "./post-header.module.css";
import Image from "next/image";

function PostHeader(props) {
  const { title, image } = props;

  return (
    <header>
      <h1 className={classes.title}>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
}

export default PostHeader;