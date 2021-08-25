import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const memberDirectory = path.join(process.cwd(), "posts");

export function getSortedMembers() {
  // Get file names under /posts
  const directoryNames = fs.readdirSync(memberDirectory);
  const allPostsDirectory = directoryNames.map((directoryName) => {
    // posts/[member]
    const name: string = directoryName;

    return { name };
  });
  return allPostsDirectory;
  /* return allPostsDirectory.sort((a, b) => {
    a.name = a.toString().toLowerCase();
    b.name = b.toString().toLowerCase();
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    }
    return 0;
  }); */
}

export function getAllMembers() {
  const directoryNames = fs.readdirSync(memberDirectory);
  return directoryNames.map((directoryName) => {
    // posts/[member]
    return {
      params: {
        name: directoryName,
      },
    };
  });
}

export function getSortedPostsData(name: any) {
  const postsDirectory = path.join(memberDirectory, name);
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      name,
      ...(matterResult.data as { date: string; title: string }),
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
export function getAllPostIds() {
  const paths = [];
  
  const names = fs.readdirSync(memberDirectory);
  names.map((name) => {
    const namePath = path.join(memberDirectory, name);
    const fileNames = fs.readdirSync(namePath);
    fileNames.forEach((fileName) => {
      var id = fileName.replace(/\.md$/, "");
      
      paths.push({ params: {name: name, id: id } });
    });
  });
  return paths;
}

export async function getPostData(params: any) {
  const id = params.id;
  const name = params.name;
  const fullPath = path.join(memberDirectory, name, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string }),
  };
}
