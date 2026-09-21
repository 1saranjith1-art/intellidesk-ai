/**
 * IntelliDesk AI - Home Page
 *
 * Redirects to the Overview dashboard.
 */

import { redirect } from 'next/navigation';

export default function HomePage() {
  redirect('/overview');
}
