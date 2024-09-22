type Props = {
  title: string;
  description: string;
  defaultTitle?: string;
  Url?: string;
  imgUrl?: string;
};

export function MetaHead({ title, defaultTitle = "Haniep Fathan R", description, Url = "https://haniep-portofolio.vercel.app", imgUrl = "/img/code.webp" }: Props) {
  return (
    <head>
      <title>{title + " | " + defaultTitle}</title>
      <meta name="title" content={title + " | " + defaultTitle} />
      <meta name="author" content="Haniep fathan riziq" />

      {/* 
         Configure the behavior of the web crawler in specific pages.
         Specify the width of the viewport for different devices.
         initial-scale=1.0 : 1:1 pixel ratio.
       */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Mengontrol perilaku crawler mesin pencari di halaman tertentu. */}
      <meta name="robots" content="index, follow" />

      <meta name="description" content={description} />
      <link rel="shortcut icon" href="/img/code.webp" />

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

      {/* Mencegah masalah konten duplikat dengan menunjukkan URL kanonik (utama) dari halaman. */}
      <link rel="canonical" href="https://haniep-fathan.vercel.app" />

      {/* Modern Normalize CSS */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/3.0.1/modern-normalize.min.css" integrity="sha512-q6WgHqiHlKyOqslT/lgBgodhd03Wp4BEqKeW6nNtlOY4quzyG3VoQKFrieaCeSnuVseNKRGpGeDU3qPmabCANg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
    </head>
  );
}
