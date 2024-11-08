import "@/styles/globals.css";

import { type Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { zhCN } from "@clerk/localizations";
import zhCNlocales from "@/locales/zh.json";
import merge from "lodash.merge";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const localization = merge(zhCN, zhCNlocales);
  return (
    <ClerkProvider localization={localization}>
      <html lang="zh-CN">
        <body>
          {/* 注释或删除下面这段代码，在使用路由保护的时候会导致错误 */}
          <header>
            <SignedOut>
              <SignInButton>登录</SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
