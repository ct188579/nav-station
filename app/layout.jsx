import "./globals.css";

export const metadata = {
  title: "陈涛のNav Station",
  description: "陈涛のNav Station, 导航站, 导航, 导航网站, 导航网站建设, 导航网站设计, 导航网站制作, 导航网站开发, 导航网站托管, 导航网站托管服务, 导航网站建设公司, 导航网站设计公司, 导航网站制作公司, 导航网站开发公司, 导航网站托管公司, 导航网站托管服务公司, 导航网站建设服务, 导航网站设计服务, 导航网站制作服务, 导航网站开发服务, 导航网站托管服务, 导航网站建设项目, 导航网站设计项目, 导航网站制作项目, 导航网站开发项目, 导航网站托管项目, 导航网站托管服务项目, 导航网站建设公司, 导航网站设计公司, 导航网站制作公司, 导航网站开发公司, 导航网站托管服务",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
