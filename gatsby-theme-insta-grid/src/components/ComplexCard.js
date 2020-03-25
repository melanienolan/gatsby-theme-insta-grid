/** @jsx jsx  */
import { jsx, Card, Text } from "theme-ui";
import Image from "./Image";
import HeartIcon from "./HeartIcon";
import { formatNumber } from "../utils/utils";

const ComplexCard = ({ post }) => {
  return (
    <Card key={post.id} variant="complex">
      <a href={`https://www.instagram.com/p/${post.id}/`}>
        <Image fluid={post.image} alt={post.caption} />
      </a>

      <Text
        variant="bold"
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start"
        }}
      >
        <div
          sx={{
            display: "flex",
            alignItems: "center",
            margin: "0"
          }}
        >
          <HeartIcon width="1rem" height="1rem" />

          <p sx={{ px: 2, fontSize: 1 }}>{`${
            post.likes ? formatNumber(post.likes) : ""
          }`}</p>
        </div>
      </Text>

      <Text
        sx={{
          fontSize: 1,
          lineHeight: "body"
        }}
      >
        {post.caption}
      </Text>
    </Card>
  );
};

export default ComplexCard;
