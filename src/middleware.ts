import { NextRequest, NextResponse } from 'next/server';

// eslint-disable-next-line consistent-return
export function middleware(request: NextRequest) {
  const isAuth = request.cookies.get('token-test')?.value;
  const protectedPaths = ['/users', '/profile'];
  const authProtectedPaths = ['/login'];
  const { pathname } = request.nextUrl;

  if (
    authProtectedPaths.some((protectedPath) => pathname.startsWith(protectedPath))
    && isAuth
  ) {
    return NextResponse.redirect(
      new URL('/', request.url),
    );
  }

  if (
    protectedPaths.some((protectedPath) => pathname.startsWith(protectedPath))
    && !isAuth
  ) {
    return NextResponse.redirect(
      new URL('/login', request.url),
    );
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
