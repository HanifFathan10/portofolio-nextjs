type Props = {
  title: string;
  description: string;
  defaultTitle?: string;
  Url?: any;
  imgUrl?: any;
};

export async function MetaHead({ title, defaultTitle = "Huhuy", description, Url = "http://localhost:3000", imgUrl = "https://metatags.io/images/meta-tags.png" }: Props) {
  return (
    <head>
      <title>{title + " | " + defaultTitle}</title>
      <meta name="title" content={title + " | " + defaultTitle} />
      <meta name="description" content={description} />

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
