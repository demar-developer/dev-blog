import { NextApiHandler } from "next";
import matter from "gray-matter";
import fs from "fs";
import path from "path";

const handler: NextApiHandler = (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      const data = readPostsInfo();
      return res.json({ postInfo: data });
    default:
      return res.status(404).send('Not found');
  };
};

const readPostsInfo = () => {
  const dirPathToPost = path.join(process.cwd(), "posts");
  const dirs = fs.readdirSync(dirPathToPost);
  const data = dirs.map((filename) => {
    const filePathToRead = path.join(process.cwd(), "posts/" + filename);
    const fileContent = fs.readFileSync(filePathToRead, {encoding: "utf8"});

    return matter(fileContent).data;
  });
  return data;
};

export default handler;