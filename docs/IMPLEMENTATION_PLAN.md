# IntelliDesk AI — Implementation Plan

**Version**: 1.0  
**Last Updated**: 2026-09-22  
**Status**: Stages 0 and 1A Complete

---

## Implementation Philosophy

This plan follows a **stage-based incremental approach**:

1. **Foundation First**: Set up infrastructure, design system, and architecture before features
2. **Mock Before Real**: Build with mock data/automation, then integrate real systems
3. **Horizontal Slicing**: Complete full user flows before adding advanced features
4. **Validation Points**: Run build/lint/type checks after meaningful changes
5. **No Premature Optimization**: Focus on working software first, optimize later

Each stage should produce **working, demonstrable functionality**.

---

## Stage Overview

| Stage | Name | Status | Est. Duration |
|-------|------|--------|---------------|
| 0 | Repository Inspection | ✅ Complete | — |
| 1A | Project Documentation | ✅ Complete | — |
| 1B | Foundation & Configuration | ⏳ Next | 1-2 hours |
| 1C | Design System Setup | ⏳ Pending | 2-3 hours |
| 2 | Complete Mock UI | ⏳ Pending | 8-12 hours |
| 3 | Supabase Database | ⏳ Pending | 4-6 hours |
| 4 | Authentication & Roles | ⏳ Pending | 4-6 hours |
| 5 | Real Ticket System | ⏳ Pending | 6-8 hours |
| 6 | Mock Agentic AI | ⏳ Pending | 4-6 hours |
| 7 | IT Agent Workspace | ⏳ Pending | 6-8 hours |
| 8 | Human Review System | ⏳ Pending | 4-6 hours |
| 9 | Admin & Analytics | ⏳ Pending | 6-8 hours |
| 10 | Automation Center | ⏳ Pending | 6-8 hours |
| 11 | UiPath Workflow Upgrade | ⏳ Pending | 8-12 hours |
| 12 | Real UiPath Integration | ⏳ Pending | 6-8 hours |
| 13 | Reliability & Edge Cases | ⏳ Pending | 6-8 hours |
| 14 | UI Polish & Mobile | ⏳ Pending | 6-8 hours |
| 15 | Demo Dataset | ⏳ Pending | 2-4 hours |
| 16 | Deployment & Final Testing | ⏳ Pending | 4-6 hours |

**Total Estimated Time**: 80-120 hours (10-15 working days)

---

## Detailed Stage Breakdown

---

### Stage 0 — Repository Inspection ✅ COMPLETE

**Status**: ✅ Completed 2026-09-22

**Goal**: Verify the repository is a clean foundation for IntelliDesk AI development.

**Deliverables**:
- ✅ Repository structure inspection
- ✅ Technology stack audit
- ✅ Build verification (`npm run build`)
- ✅ Lint verification (`npm run lint`)
- ✅ TypeScript verification (`tsc --noEmit`)
- ✅ Security audit (`npm audit`)
- ✅ Git status verification
- ✅ Stage 0 report

**Key Findings**:
- Clean Next.js 16 foundation with App Router
- Modern tech stack (React 19, TypeScript, Tailwind v4)
- Zero technical debt or configuration issues
- No security vulnerabilities
- Approved for Stage 1

---

### Stage 1A — Project Documentation and Architecture Baseline ✅ COMPLETE

**Status**: ✅ Completed 2026-09-22

**Goal**: Create comprehensive project documentation to guide all future implementation.

**Deliverables**:
- ✅ `PROJECT_STATUS.md` — Current status, decisions, risks
- ✅ `docs/ARCHITECTURE.md` — System architecture, data models, integration points
- ✅ `docs/IMPLEMENTATION_PLAN.md` — This file

**Validation**:
- ✅ Files created
- ✅ Documentation reviewed
- ⏳ Git status checked (pending)
- ⏳ Ready for Stage 1B (pending approval)

---

### Stage 1B — Foundation & Configuration ⏳ NEXT

**Goal**: Set up project metadata, folder structure, and base TypeScript types.

**Tasks**:
1. Update `package.json`:
   - Change `name` to `"intellidesk-ai"`
   - Update `description` to "Intelligent Helpdesk Automation powered by Agentic AI + RPA"
   - Add project repository URL

2. Update `src/app/layout.tsx`:
   - Change metadata `title` to "IntelliDesk AI"
   - Change metadata `description` to match package.json

3. Create folder structure:
   ```
   src/
   ├── components/      (UI components)
   ├── lib/             (utilities, clients, helpers)
   ├── types/           (TypeScript type definitions)
   ├── hooks/           (React hooks)
   └── constants/       (app constants, enums)
   ```

4. Create base TypeScript types (`src/types/index.ts`):
   - `TicketStatus`
   - `TicketCategory`
   - `TicketPriority`
   - `AutomationStatus`
   - `UserRole`
   - Base interfaces (Ticket, User, etc.)

5. Create constants file (`src/constants/index.ts`):
   - Ticket categories array
   - Ticket priorities array
   - Ticket statuses array
   - Team names mapping

6. Create `.env.local.example`:
   - Document all required environment variables
   - Add placeholder values

**Deliverables**:
- Updated package.json metadata
- Updated layout.tsx metadata
- Folder structure created
- `src/types/index.ts` with core types
- `src/constants/index.ts` with enums
- `.env.local.example` template

**Validation**:
- `npm run build` succeeds
- `npm run lint` passes
- `tsc --noEmit` passes
- No build warnings

**Estimated Time**: 1-2 hours

---

### Stage 1C — Design System Setup ⏳ PENDING

**Goal**: Define IntelliDesk AI visual identity and design tokens.

**Tasks**:
1. Define color palette in `src/app/globals.css`:
   - Primary colors (blue/indigo for interactions)
   - Secondary colors (violet for AI elements)
   - Priority colors (red=critical, orange=high, yellow=medium, green=low)
   - Neutral grays (backgrounds, text, borders)
   - Semantic colors (success, warning, error, info)

2. Update Tailwind theme configuration:
   - Use `@theme` directive in globals.css
   - Define custom colors
   - Define spacing scale
   - Define typography scale
   - Define border radius values

3. Create design token documentation (`docs/DESIGN_SYSTEM.md`):
   - Color usage guidelines
   - Typography scale
   - Spacing principles
   - Component patterns

4. Create base UI components (`src/components/ui/`):
   - `Button.tsx` (primary, secondary, ghost variants)
   - `Badge.tsx` (status, priority, category badges)
   - `Card.tsx` (content container)
   - `Input.tsx` (text input with validation)
   - `Select.tsx` (dropdown)
   - `Textarea.tsx` (multiline input)

5. Create layout components (`src/components/layout/`):
   - `AppShell.tsx` (sidebar + header + main content)
   - `Sidebar.tsx` (collapsible navigation)
   - `Header.tsx` (top navigation bar)
   - `PageHeader.tsx` (page title + actions)

**Deliverables**:
- Color palette defined in globals.css
- Tailwind theme configured
- `docs/DESIGN_SYSTEM.md` created
- Base UI components implemented
- Layout components implemented
- Example page using design system

**Validation**:
- Design tokens consistent with ITSM aesthetic
- Components render correctly
- Dark mode support works
- Responsive behavior works
- Build/lint/type checks pass

**Estimated Time**: 2-3 hours

---

### Stage 2 — Complete Mock UI ⏳ PENDING

**Goal**: Build all pages with mock data (no database, no authentication yet).

**Tasks**:

1. **Create mock data** (`src/lib/mockData.ts`):
   - Sample tickets (various statuses, priorities, categories)
   - Sample users (employees, agents, admins)
   - Sample AI decisions
   - Sample automation runs
   - Sample comments

2. **Implement routing structure**:
   ```
   /                          → Home / Overview
   /tickets/create            → Create Ticket
   /tickets                   → All Tickets (table view)
   /tickets/[id]              → Ticket Detail
   /queue/my-tickets          → My Tickets
   /queue/critical            → Critical Incidents
   /review/human-review       → Human Review Queue
   /review/ai-triage          → AI Triage Results
   /automation                → Automation Center
   /automation/[runId]        → Automation Run Detail
   /analytics                 → Analytics Dashboard
   /admin/teams               → Teams Management
   /admin/users               → User Management
   /admin/settings            → System Settings
   /profile                   → User Profile
   ```

3. **Implement core pages**:
   - Overview dashboard (ticket stats, recent activity)
   - Create Ticket form (title, description, category selector)
   - Ticket list (table with filters, search, pagination)
   - Ticket detail (all ticket info, comments, history, AI decision)
   - My Tickets queue
   - Critical Incidents queue
   - Human Review queue (tickets flagged for review)
   - AI Triage results page

4. **Create ticket components**:
   - `TicketCard.tsx` (compact ticket display)
   - `TicketTable.tsx` (data table with sorting/filtering)
   - `TicketDetail.tsx` (full ticket view)
   - `TicketStatusBadge.tsx`
   - `PriorityBadge.tsx`
   - `CategoryBadge.tsx`
   - `AIDecisionCard.tsx` (show AI triage result)
   - `CommentThread.tsx` (ticket comments)
   - `ActivityTimeline.tsx` (ticket history)

5. **Navigation**:
   - Implement sidebar navigation
   - Active route highlighting
   - Role-based navigation items (hardcoded for now)
   - Mobile-responsive hamburger menu

**Deliverables**:
- All routes implemented
- Mock data generators
- All core pages functional with mock data
- Ticket components complete
- Navigation working
- Forms functional (no submission yet)
- Responsive design

**Validation**:
- All pages render correctly
- Navigation works
- Mock data displays properly
- Forms have proper validation UI
- Responsive on mobile/tablet/desktop
- Build/lint/type checks pass

**Estimated Time**: 8-12 hours

---

### Stage 3 — Supabase Database ⏳ PENDING

**Goal**: Set up Supabase project and implement database schema.

**Tasks**:

1. **Create Supabase project**:
   - Sign up for Supabase account
   - Create new project (dev/staging)
   - Note project URL and anon key

2. **Install dependencies**:
   ```bash
   npm install @supabase/supabase-js
   ```

3. **Configure environment variables**:
   - Create `.env.local` (DO NOT COMMIT)
   - Add `NEXT_PUBLIC_SUPABASE_URL`
   - Add `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Add `SUPABASE_SERVICE_ROLE_KEY`

4. **Create database schema** (SQL migrations in `supabase/migrations/`):
   - `profiles` table
   - `teams` table
   - `tickets` table
   - `ai_decisions` table
   - `ticket_comments` table
   - `ticket_history` table
   - `automation_runs` table
   - `notifications` table
   - `ticket_attachments` table

5. **Implement Row-Level Security (RLS) policies**:
   - Employees: can only read own tickets
   - Agents: can read all tickets
   - Admins: full access

6. **Create Supabase client utilities** (`src/lib/supabase/`):
   - `client.ts` — Client-side Supabase client
   - `server.ts` — Server-side Supabase client
   - `admin.ts` — Service role client (for server actions)

7. **Create database helper functions** (`src/lib/db/`):
   - `tickets.ts` — CRUD operations for tickets
   - `aiDecisions.ts` — CRUD for AI decisions
   - `automationRuns.ts` — CRUD for automation runs
   - `comments.ts` — CRUD for comments

**Deliverables**:
- Supabase project created
- Database schema implemented
- RLS policies configured
- Supabase client utilities
- Database helper functions
- Environment variables configured

**Validation**:
- Connect to database from Next.js
- Create test ticket via SQL
- Query ticket via Supabase client
- RLS policies work correctly
- Build/lint/type checks pass

**Estimated Time**: 4-6 hours

---

### Stage 4 — Authentication & Roles ⏳ PENDING

**Goal**: Implement authentication and role-based access control.

**Tasks**:

1. **Set up Supabase Auth**:
   - Configure email/password authentication
   - Configure email templates (optional)
   - Enable email confirmation (optional for dev)

2. **Create auth pages**:
   - `/login` — Login form
   - `/signup` — Registration form
   - `/forgot-password` — Password reset
   - `/profile` — User profile and settings

3. **Implement auth utilities** (`src/lib/auth/`):
   - `getSession.ts` — Get current user session (server)
   - `requireAuth.ts` — Protect routes (server)
   - `useAuth.ts` — Auth hook (client)
   - `useUser.ts` — User data hook (client)

4. **Implement role-based access control**:
   - Add `role` column to `profiles` table
   - Create `requireRole()` utility
   - Protect routes based on role
   - Show/hide UI elements based on role

5. **Add role to user context**:
   - Create `AuthProvider` component
   - Wrap app in `AuthProvider`
   - Expose user + role via context

6. **Update navigation**:
   - Filter navigation items by role
   - Employee: Home, Create Ticket, My Tickets, Profile
   - Agent: Add All Tickets, Queues, Human Review
   - Admin: Add Analytics, Automation, Admin pages

**Deliverables**:
- Login/signup pages functional
- Authentication working
- Role-based route protection
- Role-based navigation
- User context provider
- Auth utilities

**Validation**:
- User can sign up
- User can log in
- User can log out
- Protected routes redirect to login
- Role-based navigation shows correct items
- Build/lint/type checks pass

**Estimated Time**: 4-6 hours

---

### Stage 5 — Real Ticket System ⏳ PENDING

**Goal**: Replace mock ticket data with real database operations.

**Tasks**:

1. **Implement ticket creation flow**:
   - Create Server Action (`src/app/actions/tickets.ts`)
   - Validate form inputs
   - Save ticket to database
   - Return ticket ID
   - Handle errors gracefully

2. **Implement ticket listing**:
   - Query tickets from database
   - Apply filters (status, priority, category)
   - Implement search (title, description)
   - Implement pagination
   - Real-time updates via Supabase Realtime

3. **Implement ticket detail page**:
   - Fetch ticket by ID
   - Show AI decision if available
   - Show automation run status if available
   - Show comments (read-only for now)
   - Show activity history

4. **Implement "My Tickets" filtering**:
   - Filter by `requester_id = current_user_id`
   - Sort by most recent

5. **Implement basic ticket updates**:
   - Change status (Open → In Progress → Resolved → Closed)
   - Add validation (only assigned agent can change status)

6. **Implement duplicate prevention**:
   - Check for duplicate tickets (same user + title within 5 min)
   - Show warning if duplicate detected
   - Allow submission anyway (soft warning)

**Deliverables**:
- Real ticket creation working
- Tickets saved to database
- Ticket listing from database
- Ticket detail from database
- Filters and search working
- Duplicate prevention
- Real-time updates (optional)

**Validation**:
- Create ticket → appears in database
- View ticket → data matches database
- Filter tickets → correct results
- Search tickets → correct results
- Real-time updates work (if implemented)
- Build/lint/type checks pass

**Estimated Time**: 6-8 hours

---

### Stage 6 — Mock Agentic AI ⏳ PENDING

**Goal**: Implement mock AI triage system (no real AI, no UiPath yet).

**Tasks**:

1. **Create mock automation provider** (`src/lib/automation/mockProvider.ts`):
   - Implement `triggerTriage(ticket)` — Simulate job start
   - Implement `checkStatus(runId)` — Return mock status
   - Implement `getResult(runId)` — Return mock AI decision
   - Simulate 2-5 second processing delay
   - Return realistic structured JSON

2. **Create automation provider interface** (`src/lib/automation/types.ts`):
   - Define `AutomationProvider` interface
   - `triggerTriage()`, `checkStatus()`, `getResult()`

3. **Implement automation orchestration** (`src/lib/automation/orchestrator.ts`):
   - Load provider based on `AUTOMATION_PROVIDER` env var
   - Provide unified API to rest of app
   - Handle provider-specific quirks

4. **Update ticket creation flow**:
   - After saving ticket to DB → Create `automation_run` record
   - Trigger mock automation via provider
   - Update ticket status to `AI_TRIAGE`
   - Poll for result (or use webhook simulation)
   - When complete:
     - Create `ai_decision` record
     - Update ticket (category, priority, team)
     - Update ticket status to `OPEN`

5. **Implement AI decision display**:
   - Show AI summary, category, priority
   - Show recommended actions
   - Show decision explanation
   - Show "Review Required" flag if applicable

6. **Implement basic automation center**:
   - List all automation runs
   - Show status (Queued, Processing, Success, Failed)
   - Show run details (inputs, outputs, errors)

**Deliverables**:
- Mock automation provider implemented
- Automation orchestrator
- Ticket creation triggers automation
- AI decision stored in database
- AI decision displayed in UI
- Automation Center page

**Validation**:
- Create ticket → automation runs
- Check automation status → shows progress
- Automation completes → ticket updated
- AI decision visible on ticket detail
- Automation Center shows runs
- Build/lint/type checks pass

**Estimated Time**: 4-6 hours

---

### Stage 7 — IT Agent Workspace ⏳ PENDING

**Goal**: Build agent-specific features (queues, assignment, status updates).

**Tasks**:

1. **Implement ticket queues**:
   - "My Queue" — Tickets assigned to current agent
   - "All Tickets" — All tickets (with filters)
   - "Critical Incidents" — Priority=Critical tickets

2. **Implement ticket assignment**:
   - "Assign to Me" button
   - Update `assigned_to_id` in database
   - Change status: Open → In Progress
   - Notify requester

3. **Implement status transitions**:
   - Agent can change: Open → In Progress → Waiting for User → Resolved
   - Validation: only assigned agent can change status
   - Log to `ticket_history`

4. **Implement comments system**:
   - Add comment form on ticket detail
   - Public comments (visible to requester)
   - Internal comments (agent-only)
   - Real-time comment updates

5. **Implement activity timeline**:
   - Query `ticket_history` and `ticket_comments`
   - Display in chronological order
   - Show status changes, assignments, comments

6. **Implement filters for ticket queues**:
   - Filter by: Status, Priority, Category, Team
   - Search by: Title, Description, Ticket Number
   - Sort by: Created Date, Priority, Last Updated

**Deliverables**:
- "My Queue" page functional
- "All Tickets" page with filters
- "Critical Incidents" queue
- Ticket assignment working
- Status updates working
- Comments system complete
- Activity timeline complete

**Validation**:
- Agent can see assigned tickets in "My Queue"
- "Assign to Me" works
- Status transitions work
- Comments appear in timeline
- Filters and search work
- Real-time updates work (if implemented)
- Build/lint/type checks pass

**Estimated Time**: 6-8 hours

---

### Stage 8 — Human Review System ⏳ PENDING

**Goal**: Implement human review of AI decisions.

**Tasks**:

1. **Implement Human Review queue**:
   - Filter tickets where `requires_review=true`
   - Sort by priority (Critical first)
   - Show AI decision + review reason

2. **Implement AI decision override UI**:
   - Show original AI decision (category, priority, team)
   - Allow agent/admin to modify
   - Add "Review Notes" field
   - Save as final decision (preserve original)

3. **Update `ai_decisions` table logic**:
   - Populate `original_*` fields from AI
   - Populate `final_*` fields from human (or copy from original if accepted)
   - Set `decision_source`: `AI_AUTOMATED`, `HUMAN_REVIEWED_AI`, `MANUALLY_CLASSIFIED`
   - Record `reviewed_by_id`, `reviewed_at`, `review_notes`

4. **Implement "Accept AI Decision" button**:
   - Copy `original_*` → `final_*`
   - Mark as reviewed
   - Update ticket status: → Open

5. **Implement "Modify Decision" form**:
   - Pre-populate with original AI values
   - Allow editing category, priority, team
   - Require review notes
   - Save final decision
   - Update ticket

6. **Add decision comparison view**:
   - Show original vs final side-by-side
   - Highlight differences
   - Show review reason

**Deliverables**:
- Human Review queue functional
- AI decision override UI
- Accept/Modify decision flows
- Decision comparison view
- `ai_decisions` table preserves original + final

**Validation**:
- Tickets flagged for review appear in queue
- Agent can accept AI decision
- Agent can modify AI decision
- Original AI decision preserved
- Ticket updates after review
- Build/lint/type checks pass

**Estimated Time**: 4-6 hours

---

### Stage 9 — Admin & Analytics ⏳ PENDING

**Goal**: Build admin dashboard, analytics, and system management.

**Tasks**:

1. **Implement admin dashboard**:
   - Overview stats (total tickets, open, resolved, etc.)
   - AI performance metrics (agreement rate, correction rate)
   - Automation health (success rate, failure rate)
   - Recent activity feed

2. **Implement analytics page**:
   - **Operational Dashboard**:
     - Tickets by status (pie chart)
     - Tickets by priority (bar chart)
     - Tickets by category (bar chart)
     - Open ticket trend (line chart, last 30 days)
   - **AI Decision Metrics**:
     - Auto-accepted count
     - Human-reviewed count
     - Human-corrected count
     - Agreement rate (%)
     - Correction rate (%)
     - Review required rate (%)
   - **Automation Monitoring**:
     - Total runs
     - Success count
     - Failure count
     - Success rate (%)
     - Average processing time

3. **Implement teams management**:
   - List all teams
   - Add/edit/delete teams
   - Assign team members

4. **Implement user management**:
   - List all users
   - View user details
   - Change user role (Employee, Agent, Admin)
   - Deactivate users

5. **Implement system settings**:
   - Configure ticket categories (add/edit/delete)
   - Configure priorities (edit names/colors)
   - Configure automation provider (mock vs uipath)
   - Configure SLA targets (future)

**Deliverables**:
- Admin dashboard functional
- Analytics page with charts
- Teams management
- User management
- System settings

**Validation**:
- Admin can view analytics
- Charts display correct data
- Admin can manage teams
- Admin can manage users
- Settings persist to database
- Build/lint/type checks pass

**Estimated Time**: 6-8 hours

---

### Stage 10 — Automation Center + Trace Automation ⏳ PENDING

**Goal**: Build comprehensive automation monitoring and tracing UI.

**Tasks**:

1. **Enhance Automation Center**:
   - List all automation runs (paginated table)
   - Filter by: Status, Ticket, Date Range
   - Search by: Ticket ID, Ticket Title
   - Sort by: Created Date, Status, Duration
   - Show: Ticket, Status, Provider, Started, Completed, Duration

2. **Implement automation run detail page** (`/automation/[runId]`):
   - Show full run metadata
   - Show inputs (ticket data sent to automation)
   - Show outputs (AI decision returned)
   - Show error messages if failed
   - Show retry history (parent run → child retries)

3. **Implement "Trace Automation" feature**:
   - Visual pipeline diagram:
     ```
     Employee → Database → Backend → UiPath → AI → Validation → Database → Website
     ```
   - Show status of each stage:
     - ✅ Ticket Created
     - ✅ Automation Queued
     - ⏳ Processing
     - ✅ AI Decision Received
     - ✅ Validation Passed
     - ✅ Ticket Updated
   - Only show stages supported by real system state (no fabrication)

4. **Implement retry functionality**:
   - "Retry" button on failed runs
   - Create new `automation_run` record (preserve original)
   - Link via `parent_run_id`
   - Trigger automation provider again
   - Limit: Max 3 retries

5. **Implement cancel functionality**:
   - "Cancel" button on queued/processing runs
   - Update status to `CANCELLED`
   - Stop UiPath job (if provider supports)

6. **Add automation alerts**:
   - Notify admins if automation fails
   - Notify admins if Critical ticket requires review

**Deliverables**:
- Enhanced Automation Center
- Automation run detail page
- Trace Automation visualization
- Retry failed automation
- Cancel running automation
- Automation alerts

**Validation**:
- Automation Center shows all runs
- Filters and search work
- Run detail shows correct data
- Trace Automation displays pipeline
- Retry creates new run
- Cancel stops job
- Build/lint/type checks pass

**Estimated Time**: 6-8 hours

---

### Stage 11 — UiPath Workflow Upgrade ⏳ PENDING

**Goal**: Upgrade UiPath workflow to accept structured inputs (no Input Dialogs).

**Tasks** (UiPath Studio):

1. **Refactor workflow to remove Input Dialogs**:
   - Remove manual `Input Dialog` activities
   - Accept inputs via `in_Arguments` (from Orchestrator)

2. **Define workflow arguments**:
   - **In Arguments**:
     - `in_TicketID` (String)
     - `in_TicketTitle` (String)
     - `in_TicketDescription` (String)
     - `in_RequesterName` (String)
     - `in_RequesterEmail` (String)
   - **Out Arguments**:
     - `out_Summary` (String)
     - `out_Category` (String)
     - `out_Priority` (String)
     - `out_Impact` (String)
     - `out_Urgency` (String)
     - `out_RecommendedAction` (Array of String)
     - `out_AssignedTeam` (String)
     - `out_ReviewRequired` (Boolean)
     - `out_ReviewReason` (String)
     - `out_DecisionExplanation` (String)
     - `out_ProcessingSuccess` (Boolean)
     - `out_ErrorMessage` (String)

3. **Implement Agentic AI activities**:
   - Use UiPath Agentic AI package (or HTTP Request to AI provider)
   - Construct prompt with ticket data
   - Request structured JSON output
   - Parse response

4. **Implement validation logic**:
   - Validate category is valid enum
   - Validate priority is valid enum
   - Set `out_ReviewRequired=true` if validation fails
   - Set `out_ErrorMessage` if processing fails

5. **Implement team routing logic**:
   - Map category → team name
   - Set `out_AssignedTeam`

6. **Implement Excel audit log** (optional, secondary):
   - Write row to Excel file: Ticket ID, Category, Priority, Team, Timestamp
   - Handle Excel write failures gracefully (log warning, don't crash)

7. **Test workflow locally**:
   - Run with sample inputs
   - Verify outputs match expected schema
   - Verify error handling

8. **Publish workflow to Orchestrator**:
   - Publish to dev/staging folder
   - Note process key (needed for API)

**Deliverables**:
- UiPath workflow accepts structured inputs
- UiPath workflow returns structured outputs
- Agentic AI integration working
- Validation logic implemented
- Excel audit log (optional)
- Workflow published to Orchestrator

**Validation**:
- Workflow runs via Orchestrator API
- Inputs passed correctly
- Outputs returned correctly
- AI provider responds
- Excel log written (if implemented)

**Estimated Time**: 8-12 hours

---

### Stage 12 — Real UiPath Integration ⏳ PENDING

**Goal**: Replace mock automation provider with real UiPath Orchestrator integration.

**Tasks**:

1. **Install UiPath Orchestrator client** (if using SDK):
   ```bash
   npm install axios
   ```
   (or use native fetch)

2. **Configure UiPath environment variables**:
   ```bash
   AUTOMATION_PROVIDER=uipath
   UIPATH_TENANT_NAME=yourTenant
   UIPATH_CLIENT_ID=yourClientID
   UIPATH_CLIENT_SECRET=yourSecret
   UIPATH_ORCHESTRATOR_URL=https://cloud.uipath.com/yourOrg/yourTenant/orchestrator_
   UIPATH_FOLDER_PATH=YourFolder
   UIPATH_PROCESS_KEY=IntelliDesk_AI_Triage
   ```

3. **Implement UiPath provider** (`src/lib/automation/uipathProvider.ts`):
   - Implement OAuth2 client credentials flow
   - Implement `triggerTriage(ticket)`:
     - Get access token
     - Start job via Orchestrator API
     - Return job ID
   - Implement `checkStatus(runId)`:
     - Query job status via Orchestrator API
     - Map to `AutomationStatus` enum
   - Implement `getResult(runId)`:
     - Get job output arguments
     - Parse structured JSON
     - Return `AITriageResult`

4. **Update orchestrator to use UiPath provider**:
   - If `AUTOMATION_PROVIDER=uipath` → use UiPath provider
   - Otherwise → use mock provider

5. **Implement webhook receiver** (optional, recommended):
   - Create API route: `/api/webhooks/uipath`
   - Verify webhook signature
   - Update `automation_run` status
   - Update ticket status
   - Trigger notifications

6. **Test end-to-end flow**:
   - Create ticket → UiPath job triggered
   - Monitor job in Orchestrator
   - Job completes → webhook updates ticket
   - Verify AI decision saved
   - Verify ticket updated correctly

**Deliverables**:
- UiPath provider implemented
- OAuth2 authentication working
- Job triggering working
- Status polling working
- Result retrieval working
- Webhook receiver (optional)
- Environment variables configured

**Validation**:
- Create ticket → real UiPath job starts
- UiPath job completes → ticket updates
- AI decision correct
- Errors handled gracefully
- Build/lint/type checks pass

**Estimated Time**: 6-8 hours

---

### Stage 13 — Reliability & Edge Cases ⏳ PENDING

**Goal**: Harden system against failures and edge cases.

**Tasks**:

1. **Implement error handling**:
   - Database connection errors
   - AI provider rate limits
   - UiPath Orchestrator downtime
   - Invalid AI output
   - Network timeouts

2. **Implement fallback behaviors**:
   - AI unavailable → status `TRIAGE_FAILED`, allow manual classification
   - UiPath unavailable → same as AI unavailable
   - Database error → show user-friendly message, log technical error
   - Validation failure → safe defaults + flag for review

3. **Implement duplicate prevention**:
   - Check for duplicate tickets on submission
   - Show warning to user
   - Prevent double-submission (disable button after click)

4. **Implement retry limits**:
   - Max 3 automation retries
   - After 3 failures → require manual intervention
   - Show clear message to user

5. **Implement audit trail preservation**:
   - Never delete tickets (soft delete only)
   - Never delete automation runs (keep history)
   - Never overwrite original AI decisions
   - Log all meaningful events to `ticket_history`

6. **Implement Excel failure handling**:
   - If Excel write fails → log warning, continue processing
   - Never block ticket creation due to Excel

7. **Implement timeout handling**:
   - Automation max processing time: 60 seconds
   - If timeout → mark as failed, allow retry
   - Show timeout reason to admin

8. **Implement rate limiting**:
   - Max 10 ticket creations per user per hour
   - Prevent automation trigger spam

9. **Test edge cases**:
   - Create ticket with extremely long description
   - Create ticket with invalid characters
   - Trigger automation when UiPath is down
   - Modify ticket while automation is running
   - Multiple agents try to assign same ticket

**Deliverables**:
- Comprehensive error handling
- Fallback behaviors implemented
- Duplicate prevention
- Retry limits enforced
- Audit trail preserved
- Excel failure handling
- Timeout handling
- Rate limiting
- Edge cases tested

**Validation**:
- System handles failures gracefully
- User sees helpful error messages
- Admins see technical details in logs
- No data loss on failures
- Build/lint/type checks pass

**Estimated Time**: 6-8 hours

---

### Stage 14 — UI Polish & Mobile ⏳ PENDING

**Goal**: Refine UI, improve mobile experience, add polish.

**Tasks**:

1. **Mobile responsive refinements**:
   - Test all pages on mobile (375px width)
   - Convert tables to card layouts on small screens
   - Optimize sidebar for mobile (hamburger menu)
   - Optimize forms for mobile (larger touch targets)

2. **Add loading states**:
   - Skeleton screens for ticket lists
   - Spinners for form submissions
   - Progress indicators for long operations

3. **Add empty states**:
   - "No tickets found" with helpful message
   - "No automation runs yet"
   - "No comments yet"

4. **Add success/error toasts**:
   - Ticket created successfully
   - Ticket updated successfully
   - Automation triggered successfully
   - Error messages

5. **Improve animations**:
   - Smooth transitions (150-300ms)
   - Hover states on buttons/cards
   - Focus states for accessibility

6. **Improve accessibility**:
   - Proper ARIA labels
   - Keyboard navigation
   - Focus management
   - Color contrast (WCAG AA)

7. **Add keyboard shortcuts**:
   - `C` → Create Ticket
   - `/` → Focus search
   - `Esc` → Close modals

8. **Optimize performance**:
   - Lazy load images
   - Code split routes
   - Optimize Tailwind (purge unused classes)
   - Minimize bundle size

9. **Add confirmation dialogs**:
   - Confirm before deleting (if any delete actions)
   - Confirm before cancelling automation
   - Confirm before closing critical tickets

**Deliverables**:
- Mobile-responsive design complete
- Loading states implemented
- Empty states implemented
- Toast notifications
- Animations and transitions
- Accessibility improvements
- Keyboard shortcuts
- Performance optimizations
- Confirmation dialogs

**Validation**:
- App works well on mobile (iPhone, Android)
- All pages responsive
- Loading states show appropriately
- Toasts appear for actions
- Keyboard navigation works
- Lighthouse score > 90 (Performance, Accessibility)
- Build/lint/type checks pass

**Estimated Time**: 6-8 hours

---

### Stage 15 — Demo Dataset ⏳ PENDING

**Goal**: Create realistic demo data for presentations and testing.

**Tasks**:

1. **Create seed script** (`src/lib/seed.ts`):
   - Seed 3 teams
   - Seed 10 users (2 admins, 3 agents, 5 employees)
   - Seed 50 tickets (various statuses, priorities, categories)
   - Seed AI decisions for tickets
   - Seed automation runs
   - Seed comments and history

2. **Ensure data variety**:
   - All ticket statuses represented
   - All priorities represented
   - All categories represented
   - Some tickets flagged for review
   - Some automation runs failed
   - Some tickets with comments

3. **Create "Demo Mode" toggle**:
   - Environment variable: `DEMO_MODE=true`
   - Shows banner: "Demo Mode — Data resets daily"
   - Prevents email notifications in demo mode

4. **Create reset script**:
   - Clear all demo data
   - Re-seed with fresh data
   - Schedule daily reset (optional)

5. **Document demo credentials** (in README or docs):
   - Admin: admin@intellidesk.demo / password
   - Agent: agent@intellidesk.demo / password
   - Employee: employee@intellidesk.demo / password

6. **Create demo walkthrough guide** (`docs/DEMO_GUIDE.md`):
   - Scenario 1: Employee creates ticket
   - Scenario 2: AI triages ticket
   - Scenario 3: Agent handles ticket
   - Scenario 4: Human reviews AI decision
   - Scenario 5: Admin views analytics

**Deliverables**:
- Seed script implemented
- Demo data created
- Demo mode toggle
- Reset script
- Demo credentials documented
- Demo walkthrough guide

**Validation**:
- Seed script runs successfully
- Demo data looks realistic
- Demo mode works
- Reset script clears data
- Demo credentials work
- Build/lint/type checks pass

**Estimated Time**: 2-4 hours

---

### Stage 16 — Deployment & Final Testing ⏳ PENDING

**Goal**: Deploy to Vercel, configure production environment, final testing.

**Tasks**:

1. **Prepare for deployment**:
   - Review `.gitignore` (no secrets committed)
   - Review environment variables
   - Update README with deployment instructions

2. **Deploy to Vercel**:
   - Connect GitHub repository to Vercel
   - Configure build settings (auto-detected for Next.js)
   - Configure environment variables in Vercel dashboard

3. **Configure production Supabase**:
   - Create production Supabase project
   - Run migrations on production database
   - Configure RLS policies
   - Set up backup schedule

4. **Configure production UiPath**:
   - Publish workflow to production Orchestrator folder
   - Configure production credentials
   - Set up monitoring/alerts

5. **Set up monitoring**:
   - Vercel Analytics
   - Error tracking (Sentry or Vercel)
   - Database monitoring (Supabase Dashboard)
   - Uptime monitoring (optional)

6. **Perform end-to-end testing on production**:
   - Create test ticket
   - Verify AI triage works
   - Verify notifications work
   - Test all roles (employee, agent, admin)
   - Test mobile responsiveness
   - Test error scenarios

7. **Load testing** (optional):
   - Simulate 100 concurrent users
   - Simulate 1000 tickets created per hour
   - Monitor performance

8. **Security review**:
   - Verify RLS policies
   - Verify API authentication
   - Verify no secrets in client code
   - Run security audit (`npm audit`)

9. **Documentation finalization**:
   - Update README with production URLs
   - Document production environment variables
   - Document troubleshooting steps
   - Document deployment process

10. **Handoff** (if applicable):
    - Admin training
    - Agent training
    - User documentation
    - Support contact information

**Deliverables**:
- Application deployed to Vercel
- Production Supabase configured
- Production UiPath configured
- Monitoring set up
- End-to-end testing complete
- Load testing results (optional)
- Security review complete
- Documentation finalized

**Validation**:
- Production app accessible at custom domain
- All features work in production
- No errors in logs
- Performance acceptable (< 2s page load)
- Security audit passes
- Build/lint/type checks pass

**Estimated Time**: 4-6 hours

---

## Validation Checklist (After Each Stage)

After completing each stage, run this checklist:

- [ ] `npm run build` succeeds with no errors
- [ ] `npm run lint` passes with no errors
- [ ] `npx tsc --noEmit` passes with no errors
- [ ] Manual testing of new features complete
- [ ] No secrets or sensitive data committed
- [ ] Documentation updated (if architecture changed)
- [ ] Git commit with clear message
- [ ] PROJECT_STATUS.md updated

---

## Risk Mitigation

### High-Risk Areas

1. **UiPath Integration (Stages 11-12)**
   - Risk: API complexity, authentication issues, webhook reliability
   - Mitigation: Build mock provider first, extensive testing, fallback to manual triage

2. **Real-Time Updates (Stages 5, 7)**
   - Risk: Supabase Realtime subscription limits, connection stability
   - Mitigation: Polling fallback, connection retry logic, graceful degradation

3. **AI Output Validation (Stage 6)**
   - Risk: Invalid outputs, prompt injection, rate limits
   - Mitigation: Strict schema validation, fallback to manual triage, rate limiting

4. **Performance (Stages 2, 14)**
   - Risk: Slow page loads, large bundle size, database query performance
   - Mitigation: Code splitting, lazy loading, database indexing, caching

5. **Mobile Responsiveness (Stage 14)**
   - Risk: Complex tables don't work on small screens
   - Mitigation: Card layouts on mobile, test early and often

---

## Success Criteria

IntelliDesk AI will be considered successfully implemented when:

1. ✅ All 16 stages complete
2. ✅ Employee can create tickets and track status
3. ✅ AI triage classifies tickets correctly (> 80% auto-acceptance rate in demo)
4. ✅ UiPath automation runs reliably (> 95% success rate)
5. ✅ Agent can handle tickets efficiently (< 2 min to assign and start work)
6. ✅ Admin can monitor system health and performance
7. ✅ Human review workflow preserves AI decisions
8. ✅ System handles failures gracefully (no data loss)
9. ✅ Mobile experience is functional
10. ✅ Application deployed to production and accessible

---

## Maintenance Plan

After launch:

1. **Weekly** (Weeks 1-4):
   - Monitor error logs
   - Review AI decision accuracy
   - Review automation success rate
   - Gather user feedback

2. **Monthly**:
   - Review analytics trends
   - Optimize slow queries
   - Update dependencies
   - Review security advisories

3. **Quarterly**:
   - Major feature additions
   - UX improvements based on feedback
   - Performance optimization
   - Security audit

---

## Document Maintenance

This plan should be updated:
- When stages are completed (mark as ✅)
- When stage estimates change significantly
- When new stages are added
- When priorities shift

**Last Updated**: 2026-09-22  
**Next Review**: After Stage 5 completion
