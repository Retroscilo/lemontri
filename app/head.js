import Script from "next/script";

export default function Head() {
  return (
    <>
      <title>LemonTri</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
      <Script src="/__vh.js" async />
    </>
  );
}
