/**
 * IntelliDesk AI - TopHeader Component
 *
 * Top application header with search, notifications, and user menu.
 *
 * STAGE 2: Demo notifications and search with frontend-only functionality
 */

'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { getUnreadNotificationCount, getSortedNotifications } from '@/data/demo-notifications';
import { DEMO_TICKETS } from '@/data/demo-tickets';
import { formatTimeAgo } from '@/lib/utils';

export interface TopHeaderProps {
  onMenuClick: () => void;
}

export function TopHeader({ onMenuClick }: TopHeaderProps) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const unreadCount = getUnreadNotificationCount();
  const notifications = getSortedNotifications();

  // Search tickets
  const searchResults = searchQuery.trim().length >= 2
    ? DEMO_TICKETS.filter(ticket =>
        ticket.ticket_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ticket.category?.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setNotificationsOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function getNotificationIcon(type: string) {
    switch (type) {
      case 'critical':
        return (
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
            <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        );
      case 'review':
        return (
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
            <svg className="w-4 h-4 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
        );
      case 'automation':
        return (
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        );
    }
  }

  return (
    <header className="sticky top-0 z-30 bg-surface border-b border-border">
      <div className="flex items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        {/* Left: Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
          aria-label="Open menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Center: Search */}
        <div className="flex-1 max-w-2xl mx-4" ref={searchRef}>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search tickets... (Demo search)"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSearchOpen(e.target.value.trim().length >= 2);
              }}
              onFocus={() => searchQuery.trim().length >= 2 && setSearchOpen(true)}
              className="block w-full pl-10 pr-3 py-2 border border-border rounded-md bg-background text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
            />

            {/* Search Results Dropdown */}
            {searchOpen && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-surface border border-border rounded-md shadow-lg max-h-80 overflow-y-auto">
                {searchResults.map(ticket => (
                  <Link
                    key={ticket.id}
                    href={`/tickets/${ticket.id}`}
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 border-b border-border last:border-0"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-medium text-gray-500 mb-0.5">
                          {ticket.ticket_number}
                        </div>
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-50 mb-1">
                          {ticket.title}
                        </div>
                        <div className="text-xs text-gray-500">
                          {ticket.category} • {ticket.priority}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {searchOpen && searchQuery.trim().length >= 2 && searchResults.length === 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-surface border border-border rounded-md shadow-lg p-4">
                <p className="text-sm text-gray-500">No tickets found matching &ldquo;{searchQuery}&rdquo;</p>
              </div>
            )}
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Notifications Dropdown */}
          <div className="relative" ref={notifRef}>
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="relative p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Notifications"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-5 h-5 bg-danger-600 text-white text-xs font-medium rounded-full flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notifications Panel */}
            {notificationsOpen && (
              <div className="absolute right-0 top-full mt-2 w-80 bg-surface border border-border rounded-md shadow-lg max-h-96 overflow-y-auto">
                <div className="px-4 py-3 border-b border-border">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                      Notifications
                    </h3>
                    <span className="text-xs text-gray-500">(Demo data)</span>
                  </div>
                </div>
                <div>
                  {notifications.map(notif => (
                    <Link
                      key={notif.id}
                      href={notif.link || '#'}
                      onClick={() => setNotificationsOpen(false)}
                      className={`block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 border-b border-border last:border-0 ${
                        !notif.read ? 'bg-blue-50 dark:bg-blue-900/10' : ''
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {getNotificationIcon(notif.type)}
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-gray-900 dark:text-gray-50 mb-1">
                            {notif.title}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                            {notif.message}
                          </div>
                          <div className="text-xs text-gray-500">
                            {formatTimeAgo(notif.timestamp)}
                          </div>
                        </div>
                        {!notif.read && (
                          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-600 mt-1" />
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* User Menu Button (Placeholder) */}
          <button
            className="flex items-center gap-2 p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="User menu"
            disabled
          >
            <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center">
              <span className="text-sm font-medium text-white">U</span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
