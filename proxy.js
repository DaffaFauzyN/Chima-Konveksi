import { NextResponse } from "next/server";

export default function proxy(request) {
  const host = request.headers.get("host") || "";
  const fwdHost = request.headers.get("x-forwarded-host") || "";
  const { pathname, search } = request.nextUrl;

  const response = NextResponse.next();
  response.headers.set("x-debug-host", host);
  response.headers.set("x-debug-fwd-host", fwdHost);

  if (host.includes("vercel.app") || fwdHost.includes("vercel.app")) {
    const url = new URL(pathname, "https://www.chimakonveksi.my.id");
    url.search = search;
    return NextResponse.redirect(url, 301);
  }

  if (host === "chimakonveksi.my.id" || fwdHost === "chimakonveksi.my.id") {
    const url = new URL(pathname, "https://www.chimakonveksi.my.id");
    url.search = search;
    return NextResponse.redirect(url, 301);
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
};
