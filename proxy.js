import { NextResponse } from "next/server";

export default function proxy(request) {
  const host = request.headers.get("host") || "";
  const { pathname, search } = request.nextUrl;

  if (host.includes("vercel.app")) {
    const url = new URL(pathname, "https://www.chimakonveksi.my.id");
    url.search = search;
    return NextResponse.redirect(url, 301);
  }

  if (host === "chimakonveksi.my.id") {
    const url = new URL(pathname, "https://www.chimakonveksi.my.id");
    url.search = search;
    return NextResponse.redirect(url, 301);
  }

  const response = NextResponse.next();
  response.headers.set("Cache-Control", "no-cache, no-store, must-revalidate");
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
};
