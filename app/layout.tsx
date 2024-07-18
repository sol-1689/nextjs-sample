import '@/app/ui/global.css';  // 追加
import { inter } from '@/app/ui/fonts'; //追加 部分

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
