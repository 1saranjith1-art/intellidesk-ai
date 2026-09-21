# IntelliDesk AI — System Architecture

**Version**: 1.0  
**Last Updated**: 2026-09-22  
**Status**: Architecture Baseline

---

## Table of Contents

1. [System Overview](#system-overview)
2. [Core Architecture Principle](#core-architecture-principle)
3. [Technology Stack](#technology-stack)
4. [System Boundaries](#system-boundaries)
5. [User Roles & Permissions](#user-roles--permissions)
6. [Data Models](#data-models)
7. [Ticket Lifecycle](#ticket-lifecycle)
8. [AI Triage System](#ai-triage-system)
9. [Automation Architecture](#automation-architecture)
10. [Database Architecture](#database-architecture)
11. [Security & Authentication](#security--authentication)
12. [Reliability Principles](#reliability-principles)
13. [Deployment Architecture](#deployment-architecture)

---

## System Overview

IntelliDesk AI is an **Intelligent Helpdesk Automation platform** that combines:
- Modern web application (employee portal, agent workspace, admin dashboard)
- Agentic AI for intelligent ticket triage
- UiPath RPA for workflow automation
- Real-time collaboration and notifications

### Key Capabilities
- **Employee Self-Service**: Submit tickets, track status, add comments
- **AI-Powered Triage**: Automatic classification, prioritization, and routing
- **Smart Routing**: Deterministic team assignment based on validated categories
- **Human Review**: Override AI decisions when needed, preserve audit trail
- **Automation Monitoring**: Trace automation execution, retry failed jobs
- **Analytics**: Operational dashboard, AI performance metrics, system health
- **Real-Time Updates**: Live notifications and status changes

---

## Core Architecture Principle

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  Website         = INTERACT   (User Interface & API)        │
│  Agentic AI      = UNDERSTAND + DECIDE  (Classification)    │
│  UiPath          = ACT   (Execute Automation Workflows)     │
│  Database        = REMEMBER   (Persistent State Store)      │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Responsibility Separation

| Component | Responsibility | NOT Responsible For |
|-----------|----------------|---------------------|
| **Website** | User interaction, display data, validate inputs, trigger workflows | AI logic, automation execution, business rule processing |
| **Agentic AI** | Analyze tickets, classify category/priority, recommend actions, explain decisions | Storing data, executing automation, user authentication |
| **UiPath** | Execute AI workflow, call AI provider, validate outputs, format results | UI rendering, database queries, user management |
| **Database** | Store all state, provide transaction guarantees, enable querying | AI processing, automation execution, UI rendering |

---

## Technology Stack

### Frontend & Application Framework
```
Next.js 16.3.5 (App Router)
├── React 19.2.8
├── TypeScript 5.9.3 (strict mode)
└── Tailwind CSS 4.3.3
```

### Backend Services
```
Supabase
├── PostgreSQL (database)
├── Auth (authentication & authorization)
├── Storage (file attachments)
└── Realtime (live updates & notifications)
```

### Automation & AI
```
UiPath Automation Cloud
├── Orchestrator (job management)
└── Agentic AI Workflow (triage logic)

AI Provider (via UiPath)
├── OpenAI GPT-4 (or similar)
└── Structured output validation
```

### Deployment & Infrastructure
```
Vercel (hosting)
├── Edge Functions (API routes)
├── Edge Config (feature flags)
└── Analytics

GitHub (version control & CI/CD)
```

---

## System Boundaries

### System Context Diagram

```
┌─────────────┐
│  Employee   │ ──┐
└─────────────┘   │
                  │
┌─────────────┐   │         ┌────────────────────────────────┐
│ IT Agent    │ ──┼────────>│                                │
└─────────────┘   │         │      IntelliDesk AI            │
                  │         │      (Next.js App)             │
┌─────────────┐   │         │                                │
│   Admin     │ ──┘         └────────────────────────────────┘
└─────────────┘                      │         │         │
                                     │         │         │
                        ┌────────────┘         │         └────────────┐
                        │                      │                      │
                        V                      V                      V
              ┌──────────────────┐   ┌─────────────────┐   ┌──────────────────┐
              │    Supabase      │   │     UiPath      │   │   AI Provider    │
              │                  │   │  Orchestrator   │   │  (via UiPath)    │
              │  - PostgreSQL    │   │  - Workflows    │   │  - GPT-4 / etc   │
              │  - Auth          │   │  - Job Queue    │   │  - Structured    │
              │  - Storage       │   │  - Monitoring   │   │    Outputs       │
              │  - Realtime      │   └─────────────────┘   └──────────────────┘
              └──────────────────┘
```

### Integration Points

1. **Website ↔ Supabase**
   - Protocol: Supabase Client SDK (REST + WebSocket)
   - Auth: JWT tokens (anon key for client, service role for server)
   - Purpose: CRUD operations, real-time subscriptions, file uploads

2. **Website ↔ UiPath**
   - Protocol: HTTPS REST API (Orchestrator)
   - Auth: OAuth2 client credentials
   - Purpose: Trigger workflows, check job status, retrieve results

3. **UiPath ↔ AI Provider**
   - Protocol: HTTPS REST API (OpenAI/Anthropic/etc)
   - Auth: API keys (stored in UiPath credential store)
   - Purpose: Send prompts, receive structured classifications

4. **UiPath ↔ Supabase** (optional future enhancement)
   - Protocol: REST API (service role key)
   - Auth: Service role key (stored in UiPath credential store)
   - Purpose: Direct status updates, result storage

5. **Website ↔ Excel** (secondary audit log)
   - Protocol: UiPath writes Excel files
   - Auth: N/A (local file system)
   - Purpose: Audit trail, backup log (NOT primary data source)

---

## User Roles & Permissions

### Role Hierarchy

```
Admin
  ├── IT Support Agent
  │     └── Employee (implicit for all users)
  └── Full system access
```

### Role Definitions

#### 1. Employee (Base Role)
**Purpose**: End users who need IT support

**Permissions**:
- ✅ Create tickets
- ✅ View own tickets
- ✅ Add comments to own tickets
- ✅ View AI triage results for own tickets
- ✅ Mark own tickets as resolved (where appropriate)
- ✅ Upload attachments to own tickets
- ✅ Receive notifications about own tickets
- ❌ View other users' tickets
- ❌ Assign tickets
- ❌ Access admin features

**Pages**:
- Home / Dashboard
- Create Ticket
- My Tickets
- Ticket Detail (own tickets only)
- Profile / Settings

#### 2. IT Support Agent
**Purpose**: Support staff who handle and resolve tickets

**Permissions**:
- ✅ All Employee permissions
- ✅ View all tickets
- ✅ View ticket queues (My Queue, All Tickets, Critical)
- ✅ Assign tickets to self
- ✅ Change ticket status (Open → In Progress → Resolved → Closed)
- ✅ Add internal and public comments
- ✅ View AI triage details
- ✅ Access Human Review queue
- ✅ Override AI decisions
- ✅ View automation run details
- ❌ Manage users or teams
- ❌ Access analytics or admin settings

**Pages**:
- Overview / Dashboard
- Create Ticket (on behalf of users)
- My Queue
- All Tickets
- Critical Incidents
- Human Review Queue
- Ticket Detail (all tickets)

#### 3. Admin
**Purpose**: System administrators with full access

**Permissions**:
- ✅ All IT Support Agent permissions
- ✅ View analytics and reports
- ✅ Manage teams and users
- ✅ Access Automation Center
- ✅ View all automation runs
- ✅ Retry or cancel automation jobs
- ✅ Configure system settings
- ✅ Manage categories and priorities
- ✅ Access AI performance metrics
- ✅ Full system audit trail

**Additional Pages**:
- Admin Dashboard
- Analytics
- Automation Center
- Teams Management
- User Management
- System Settings

---

## Data Models

### Core Entities

#### Ticket
```typescript
interface Ticket {
  id: string                    // UUID
  ticket_number: string          // Display ID (e.g., "DESK-1234")
  title: string
  description: string
  status: TicketStatus
  category: TicketCategory | null
  priority: TicketPriority | null
  
  // Relationships
  requester_id: string           // User who created ticket
  assigned_to_id: string | null  // Agent assigned to ticket
  assigned_team_id: string | null
  
  // AI & Automation
  ai_decision_id: string | null  // Link to AI triage result
  automation_run_id: string | null
  
  // Metadata
  created_at: timestamp
  updated_at: timestamp
  resolved_at: timestamp | null
  closed_at: timestamp | null
  
  // Flags
  is_critical: boolean
  requires_review: boolean
  review_completed: boolean
}
```

#### AI Decision
```typescript
interface AIDecision {
  id: string                     // UUID
  ticket_id: string
  
  // Original AI Output
  original_summary: string
  original_category: TicketCategory
  original_priority: TicketPriority
  original_impact: string
  original_urgency: string
  original_recommended_actions: string[]
  original_assigned_team: string
  original_review_required: boolean
  original_review_reason: string | null
  original_decision_explanation: string
  
  // Final Decision (after human review)
  final_category: TicketCategory
  final_priority: TicketPriority
  final_assigned_team: string
  final_decision_explanation: string | null
  
  // Decision Metadata
  decision_source: 'AI_AUTOMATED' | 'HUMAN_REVIEWED_AI' | 'MANUALLY_CLASSIFIED'
  reviewed_by_id: string | null
  reviewed_at: timestamp | null
  review_notes: string | null
  
  // Timestamps
  created_at: timestamp
}
```

#### Automation Run
```typescript
interface AutomationRun {
  id: string                     // UUID
  ticket_id: string
  
  // Job Details
  provider: 'mock' | 'uipath'
  job_id: string | null          // UiPath job ID
  status: AutomationStatus
  
  // Inputs
  input_data: {
    ticketId: string
    title: string
    description: string
    requesterName: string
    requesterEmail: string
  }
  
  // Outputs
  output_data: {
    summary?: string
    category?: string
    priority?: string
    impact?: string
    urgency?: string
    recommendedActions?: string[]
    assignedTeam?: string
    reviewRequired?: boolean
    reviewReason?: string | null
    decisionExplanation?: string
    processingSuccess?: boolean
    errorMessage?: string | null
  } | null
  
  // Metadata
  started_at: timestamp
  completed_at: timestamp | null
  error_message: string | null
  retry_count: number
  parent_run_id: string | null   // If this is a retry
  
  // Audit
  created_at: timestamp
  updated_at: timestamp
}
```

### Enumerations

#### TicketStatus
```typescript
type TicketStatus =
  | 'AI_TRIAGE'              // Initial state, automation running
  | 'OPEN'                   // Triaged, awaiting assignment
  | 'IN_PROGRESS'            // Agent actively working
  | 'WAITING_FOR_USER'       // Blocked on user response
  | 'RESOLVED'               // Fix implemented, awaiting confirmation
  | 'CLOSED'                 // Confirmed resolved
  | 'TRIAGE_FAILED'          // AI/automation failed, needs manual classification
```

#### TicketCategory
```typescript
type TicketCategory =
  | 'Hardware'
  | 'Software'
  | 'Network'
  | 'Account Access'
  | 'Infrastructure'
  | 'General Support'
```

#### TicketPriority
```typescript
type TicketPriority =
  | 'Critical'               // Business-critical, immediate response
  | 'High'                   // Important, same-day response
  | 'Medium'                 // Standard, 1-2 day response
  | 'Low'                    // Nice to have, best effort
```

#### AutomationStatus
```typescript
type AutomationStatus =
  | 'QUEUED'                 // Job submitted, waiting to start
  | 'PROCESSING'             // Actively running
  | 'SUCCESS'                // Completed successfully
  | 'SUCCESS_WITH_WARNING'   // Completed but with warnings
  | 'FAILED'                 // Failed, can be retried
  | 'HUMAN_REVIEW_REQUIRED'  // Needs manual intervention
  | 'CANCELLED'              // Manually cancelled
```

---

## Ticket Lifecycle

### State Machine

```
┌─────────────┐
│   CREATED   │
└──────┬──────┘
       │
       │ Save to DB first
       │
       V
┌─────────────┐    Automation    ┌─────────────┐
│ AI_TRIAGE   │ ───── Fails ────>│TRIAGE_FAILED│
└──────┬──────┘                  └──────┬──────┘
       │                                │
       │ Automation Success             │ Manual Classification
       │                                │
       V                                V
┌─────────────┐                  ┌─────────────┐
│    OPEN     │<─────────────────│Review Queue │
└──────┬──────┘                  └─────────────┘
       │
       │ Agent assigns to self
       │
       V
┌─────────────┐
│ IN_PROGRESS │<────┐
└──────┬──────┘     │
       │            │
       ├────────────┘ Agent continues work
       │
       │ Agent marks resolved
       │
       V
┌─────────────┐    Reopen    ┌─────────────┐
│  RESOLVED   │ ───────────> │ IN_PROGRESS │
└──────┬──────┘              └─────────────┘
       │
       │ Requester confirms OR auto-close after N days
       │
       V
┌─────────────┐
│   CLOSED    │ (Terminal state)
└─────────────┘
```

### Lifecycle Rules

1. **Creation**
   - Ticket saved to database FIRST
   - Automation triggered asynchronously (non-blocking)
   - Initial status: `AI_TRIAGE`

2. **AI Triage**
   - If automation succeeds: → `OPEN`
   - If automation fails: → `TRIAGE_FAILED`
   - Ticket is NEVER deleted if automation fails

3. **Assignment**
   - Agent can "Assign to Me" from any queue
   - Changes status: `OPEN` → `IN_PROGRESS`

4. **Resolution**
   - Agent marks ticket as `RESOLVED`
   - Requester can reopen if issue persists
   - Auto-closes after 7 days if no response

5. **Critical Tickets**
   - If `priority=Critical` AND `requires_review=true`:
     - Immediate notification to admins
     - Appears in "Critical Incidents" queue
     - High priority for human review

---

## AI Triage System

### AI Workflow Architecture

```
Employee Creates Ticket
         │
         V
┌────────────────────────────────────────┐
│  Website Backend (Next.js)             │
│  1. Validate inputs                    │
│  2. Save ticket to database            │
│  3. Create automation_run record       │
│  4. Return ticket ID to user           │
└────────┬───────────────────────────────┘
         │
         │ Trigger async (webhook/API)
         │
         V
┌────────────────────────────────────────┐
│  UiPath Orchestrator                   │
│  - Queue job                           │
│  - Launch workflow                     │
└────────┬───────────────────────────────┘
         │
         V
┌────────────────────────────────────────┐
│  UiPath Agentic AI Workflow            │
│  1. Receive ticket data                │
│  2. Call AI provider with prompt       │
│  3. Request structured output          │
│  4. Validate response schema           │
│  5. Apply business rule checks         │
│  6. Format final output                │
└────────┬───────────────────────────────┘
         │
         │ Return structured JSON
         │
         V
┌────────────────────────────────────────┐
│  Website Backend (Next.js)             │
│  1. Receive automation result          │
│  2. Validate output                    │
│  3. Create ai_decision record          │
│  4. Perform deterministic team routing │
│  5. Update ticket status               │
│  6. (Optional) Write Excel audit log   │
│  7. Trigger notifications              │
└────────────────────────────────────────┘
```

### Structured AI Output

The AI triage system produces a **strict JSON schema**:

```json
{
  "summary": "Brief summary of the issue",
  "category": "Infrastructure",
  "priority": "Critical",
  "impact": "Organization-wide | Department | Team | Individual",
  "urgency": "Immediate | Same Day | Within Week | When Possible",
  "recommendedActions": [
    "Action 1",
    "Action 2"
  ],
  "assignedTeam": "Infrastructure Support Team",
  "reviewRequired": false,
  "reviewReason": null,
  "decisionExplanation": "Concise user-facing rationale (2-3 sentences max)"
}
```

### Validation Rules

1. **Category Validation**
   - Must be one of: `Hardware`, `Software`, `Network`, `Account Access`, `Infrastructure`, `General Support`
   - Invalid value → Set to `null`, flag `reviewRequired=true`

2. **Priority Validation**
   - Must be one of: `Critical`, `High`, `Medium`, `Low`
   - Invalid value → Set to `null`, flag `reviewRequired=true`

3. **Team Routing**
   - Deterministic mapping: `category` → `assigned_team`
   - Cannot route if `category=null`

4. **Review Triggers**
   - AI explicitly sets `reviewRequired=true`
   - Invalid enum values detected
   - Low confidence (if AI provides confidence score)
   - Critical priority + ambiguous category

5. **Fallback Behavior**
   - AI unavailable → Status `TRIAGE_FAILED`, manual classification required
   - Invalid output → Save what we can, flag for review
   - No infinite retries

### AI Decision Preservation

**Critical Rule**: Always preserve BOTH the original AI decision AND the final human-reviewed decision.

**Storage**:
- `ai_decisions` table contains `original_*` and `final_*` columns
- `decision_source` tracks: `AI_AUTOMATED`, `HUMAN_REVIEWED_AI`, `MANUALLY_CLASSIFIED`
- `reviewed_by_id`, `reviewed_at`, `review_notes` capture human intervention

**Purpose**:
- Measure AI performance (agreement rate, correction rate)
- Audit trail for decision overrides
- Improve AI prompts based on common corrections
- Regulatory compliance

---

## Automation Architecture

### Automation Providers

#### Mock Provider (Development)
```typescript
// Environment: AUTOMATION_PROVIDER=mock
interface MockProvider {
  triggerTriage(ticket: Ticket): Promise<{ runId: string }>
  checkStatus(runId: string): Promise<AutomationStatus>
  getResult(runId: string): Promise<AITriageResult>
}
```

**Behavior**:
- Simulates 2-5 second processing delay
- Returns realistic structured outputs
- Can simulate failures (10% random fail rate)
- No external dependencies

**Purpose**:
- Full UI development without UiPath
- Testing error handling
- Demo mode

#### UiPath Provider (Production)
```typescript
// Environment: AUTOMATION_PROVIDER=uipath
interface UiPathProvider {
  triggerTriage(ticket: Ticket): Promise<{ runId: string, jobId: string }>
  checkStatus(runId: string): Promise<AutomationStatus>
  getResult(runId: string): Promise<AITriageResult>
}
```

**Integration**:
- UiPath Orchestrator REST API
- OAuth2 client credentials flow
- Process name: `IntelliDesk_AI_Triage`
- Folder path: Configured via env var

**UiPath Workflow Inputs**:
```json
{
  "in_TicketID": "uuid",
  "in_TicketTitle": "string",
  "in_TicketDescription": "string",
  "in_RequesterName": "string",
  "in_RequesterEmail": "email"
}
```

**UiPath Workflow Outputs**:
```json
{
  "out_Summary": "string",
  "out_Category": "Hardware | Software | ...",
  "out_Priority": "Critical | High | Medium | Low",
  "out_Impact": "string",
  "out_Urgency": "string",
  "out_RecommendedAction": ["string[]"],
  "out_AssignedTeam": "string",
  "out_ReviewRequired": boolean,
  "out_ReviewReason": "string | null",
  "out_DecisionExplanation": "string",
  "out_ProcessingSuccess": boolean,
  "out_ErrorMessage": "string | null"
}
```

### Automation Reliability

1. **Idempotency**
   - Retry creates NEW `automation_run` record
   - Original run preserved for audit
   - `parent_run_id` links retries

2. **Failure Handling**
   - Ticket status → `TRIAGE_FAILED`
   - Manual classification still possible
   - Retry button available to admins

3. **Timeout Handling**
   - Max processing time: 60 seconds
   - After timeout → check status manually
   - Webhook callback preferred

4. **No Infinite Loops**
   - Max retry count: 3
   - After 3 failures → require manual intervention

---

## Database Architecture

### Schema Overview

**Planned Tables**:

1. **`profiles`** — User accounts and metadata
2. **`teams`** — Support teams (Infrastructure, Software, etc.)
3. **`tickets`** — Core ticket entity
4. **`ai_decisions`** — AI triage results (original + final)
5. **`ticket_comments`** — Comments and discussions
6. **`ticket_history`** — Audit trail of state changes
7. **`automation_runs`** — Job execution records
8. **`notifications`** — User notifications
9. **`ticket_attachments`** — File uploads (metadata, S3 URLs)
10. **`automation_run_events`** (optional) — Granular automation telemetry

### Database Principles

1. **Single Source of Truth**
   - Database is authoritative
   - Excel is secondary audit log ONLY
   - Never query Excel instead of database

2. **Transactional Integrity**
   - Use database transactions for multi-step operations
   - Prevent race conditions (e.g., double assignment)

3. **Audit Trail**
   - `ticket_history` captures all status changes
   - `ai_decisions` preserves original + final states
   - `automation_runs` never deleted (soft delete if needed)

4. **Soft Deletion**
   - No hard delete of tickets (use `deleted_at` timestamp)
   - Close/archive instead of delete
   - Admins can restore if needed

5. **Real-Time Updates**
   - Supabase Realtime for live ticket updates
   - Subscribe to ticket changes in relevant queues
   - Notifications for assigned tickets

---

## Security & Authentication

### Authentication Strategy

**Provider**: Supabase Auth

**Methods**:
1. **Email/Password** (primary)
2. **Google OAuth** (optional)
3. **Microsoft Azure AD** (optional for enterprise)

### Authorization Model

**Row-Level Security (RLS)** via Supabase:

1. **Employees**:
   - Can only read own tickets (`requester_id = auth.uid()`)
   - Can only write comments on own tickets

2. **IT Agents**:
   - Can read all tickets
   - Can update assigned tickets
   - Can comment on any ticket

3. **Admins**:
   - Full read/write access
   - Can manage users and teams

### API Security

1. **Client-Side (Browser)**:
   - Use `NEXT_PUBLIC_SUPABASE_ANON_KEY` (RLS enforced)
   - JWT tokens for authenticated requests

2. **Server-Side (Next.js API Routes)**:
   - Use `SUPABASE_SERVICE_ROLE_KEY` (bypasses RLS)
   - Validate user permissions manually
   - Never expose service role key to client

3. **UiPath Integration**:
   - Store credentials in UiPath credential store
   - Use OAuth2 client credentials (not user credentials)
   - Rotate secrets regularly

### Data Protection

1. **Secrets Management**:
   - Never commit `.env` files
   - Use Vercel environment variables for production
   - Use UiPath Orchestrator credential store

2. **File Uploads**:
   - Scan for malware before storage
   - Validate file types and sizes
   - Use Supabase Storage with signed URLs

3. **API Rate Limiting**:
   - Prevent abuse of automation triggers
   - Throttle ticket creation (max 10/hour per user)

---

## Reliability Principles

### Core Reliability Rules

1. **Database Save Before Automation**
   - ✅ Save ticket to DB first
   - ✅ Then trigger automation
   - ✅ If automation fails, ticket still exists
   - ❌ Never delete ticket if automation fails

2. **Prevent Duplicate Submissions**
   - Client-side: Disable submit button after click
   - Server-side: Check for recent duplicate (same user + title within 5 min)

3. **Validate AI Output**
   - Strict schema validation
   - Enum value checking
   - Fallback to safe defaults

4. **Invalid Enum Handling**
   - If `category` invalid → set to `null`, flag review
   - If `priority` invalid → set to `null`, flag review
   - Never crash on bad AI output

5. **AI Unavailable Fallback**
   - If AI provider down → allow manual triage
   - Status: `TRIAGE_FAILED`
   - Agent can manually classify

6. **UiPath Unavailable Fallback**
   - If UiPath down → same as AI unavailable
   - Preserve ticket
   - Manual classification still works

7. **Retry Strategy**
   - Failed jobs can be retried manually (Automation Center)
   - Retry creates NEW run (preserves history)
   - No infinite retry loops (max 3)

8. **Critical Ticket Handling**
   - If `Critical` + `reviewRequired` → urgent notification
   - Appears in "Critical Incidents" queue
   - Admin/agent must review ASAP

9. **Decision Preservation**
   - Always store original AI decision
   - Always store final decision (after human review)
   - Never overwrite original data

10. **Audit Trail**
    - All meaningful events logged to `ticket_history`
    - All automation runs preserved
    - All comments timestamped

11. **User-Facing Error Messages**
    - No technical stack traces
    - No secrets or internal URLs
    - Clear, actionable messages

12. **No Fake Data**
    - No fake analytics
    - No fake automation status
    - No fake confidence percentages
    - Only display real system state

13. **Excel Secondary Only**
    - Excel write failure → log warning, continue
    - Never block ticket processing for Excel
    - Database is source of truth

---

## Deployment Architecture

### Development Environment

```
Local Machine
├── Next.js Dev Server (localhost:3000)
├── Supabase Local (optional) or Supabase Cloud Dev Project
├── AUTOMATION_PROVIDER=mock
└── Environment: .env.local
```

### Staging Environment

```
Vercel (Preview Deployment)
├── Next.js Production Build
├── Supabase Staging Project
├── AUTOMATION_PROVIDER=mock or limited UiPath
└── Environment: Vercel Environment Variables (Preview)
```

### Production Environment

```
Vercel (Production)
├── Next.js Production Build
├── Supabase Production Project
├── UiPath Orchestrator (Production Folder)
├── AUTOMATION_PROVIDER=uipath
└── Environment: Vercel Environment Variables (Production)
```

### CI/CD Pipeline

```
GitHub Push
     │
     V
GitHub Actions (optional)
     │
     ├─> Lint (ESLint)
     ├─> Type Check (tsc)
     ├─> Build (next build)
     └─> Deploy to Vercel
```

### Monitoring & Observability

1. **Application Monitoring**:
   - Vercel Analytics (Web Vitals)
   - Error tracking (Sentry or Vercel)

2. **Database Monitoring**:
   - Supabase Dashboard (query performance)
   - Connection pooling metrics

3. **Automation Monitoring**:
   - UiPath Orchestrator (job success rate)
   - IntelliDesk Automation Center (custom UI)

4. **AI Performance**:
   - Agreement rate (AI vs human)
   - Correction rate
   - Review required rate

---

## Future Enhancements

### Planned (Not Yet Implemented)

1. **Email Notifications**
   - Send email on ticket creation, assignment, resolution
   - Digest emails for agents

2. **Slack Integration**
   - Post critical tickets to Slack channel
   - Notify on-call engineer

3. **SLA Tracking**
   - Response time targets by priority
   - Alert if SLA breach imminent

4. **Knowledge Base**
   - Self-service articles
   - AI suggests relevant articles

5. **Multi-Tenant**
   - Support multiple organizations in single deployment
   - Row-level security by organization

6. **Advanced Analytics**
   - Trend analysis
   - Predictive ticket volume
   - Agent performance metrics

---

## Document Maintenance

This document should be updated when:
- Major architectural decisions are made
- New integrations are added
- Database schema significantly changes
- Security model changes
- Deployment strategy changes

**Last Review**: 2026-09-22  
**Next Review**: After Stage 5 (Real Ticket System) completion
