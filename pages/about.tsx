import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function About() {
  const router = useRouter();
  const { q } = router.query;

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    console.log(`useEffect triggered`);
    router.isReady
      ? setSearchQuery(q as string)
      : console.log("router is not ready");
  }, [q]);
  return (
    <>
      <p>q: {q}</p>
      <p>searchQuery: {searchQuery}</p>
      <p>bar: {router.query.bar}</p>

      <form>
        <label>Search Query:</label>
        <input
          type="text"
          name="q"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
