import {defineRouting} from 'next-intl/routing';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
    // Used when no locale matches
  defaultLocale: 'en',
  // A list of all locales that are supported
  locales: ['ro','en']
});
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation(routing);