import { Box } from "@mui/material";

const MovingText = ({ Letters }) => {
  return (
    <Box my={5} py={5} className="early">
      <article>
        <p className="left">
          HTML . CSS . JAVASCRIPT . REACT . NODE JS . EXPRESS JS . GIT . REDUX .
          MATERIAL UI . BOOTSTRAP . NPM . FIGMA . HTML . CSS . JAVASCRIPT .
          REACT . NODE JS . EXPRESS JS . GIT . REDUX . MATERIAL UI . BOOTSTRAP .
          NPM . FIGMA
        </p>

        <p className="right">
          HTML . CSS . JAVASCRIPT . REACT . NODE JS . EXPRESS JS . GIT . REDUX .
          MATERIAL UI . BOOTSTRAP . NPM . FIGMA . HTML . CSS . JAVASCRIPT .
          REACT . NODE JS . EXPRESS JS . GIT . REDUX . MATERIAL UI . BOOTSTRAP .
          NPM . FIGMA{" "}
        </p>
      </article>
    </Box>
  );
};

export default MovingText;
