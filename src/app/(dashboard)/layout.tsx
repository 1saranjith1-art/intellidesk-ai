/**
 * IntelliDesk AI - Dashboard Layout
 *
 * Wraps dashboard pages with the AppShell.
 */

import { AppShell } from '@/components/layout/AppShell';
import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <AppShell>{children}</AppShell>;
}
