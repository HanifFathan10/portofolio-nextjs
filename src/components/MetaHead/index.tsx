type Props = {
  title: string;
  description: string;
  defaultTitle?: string;
  Url?: string;
  imgUrl?: string;
};

export async function MetaHead({
  title,
  defaultTitle = "Haniep Fathan R",
  description,
  Url = "https://haniep-portofolio.vercel.app",
  imgUrl = "/img/portogw.png",
}: Props) {
  return (
    <head>
      <title>{title + " | " + defaultTitle}</title>
      <meta name="title" content={title + " | " + defaultTitle} />
      <meta name="description" content={description} />
      <link rel="shortcut icon" href="/img/hanif.webp" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={Url} />
      <meta property="og:title" content={title + " | " + defaultTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imgUrl} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={Url} />
      <meta property="twitter:title" content={title + " | " + defaultTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imgUrl} />
    </head>
  );
}
