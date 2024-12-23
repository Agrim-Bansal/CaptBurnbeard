import { Pirata_One } from "next/font/google";
import "./globals.css";

const pirataOne = Pirata_One({
  subsets: ["latin"],
  weight : '400',
});


export const metadata = {
  title: "Capt. Burnbeard",
  description: "Fun app to get roasted by a pirate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${pirataOne.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
