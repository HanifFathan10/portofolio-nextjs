import { JetBrains_Mono, Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetBrains",
  display: "swap",
  preload: true,
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});
