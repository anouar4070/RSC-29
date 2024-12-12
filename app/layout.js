import './globals.css';

export const metadata = {
  title: 'React RSC project',
  description: 'A thorough demo of advanced React features.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}