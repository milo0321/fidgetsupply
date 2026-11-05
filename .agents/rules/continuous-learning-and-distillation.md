# Continuous Knowledge Distillation & Self-Evolving Invariants

To ensure the codebase guidelines, user preferences, and bug-fix patterns continuously evolve and persist across development sessions:

---

## 1. Trigger Signals for Knowledge Capture
The agent MUST proactively identify and prepare knowledge distillation whenever any of the following events occur during conversation:
1. **User Direct Corrections**: The user explicitly points out a mistake, expresses a firm design preference (e.g. "always center pricing tables to 960px", "use natural B2B enterprise phrasing"), or establishes a new project invariant.
2. **Complex Bug Resolutions**: A non-trivial issue (such as CSS animation-transform conflicts, Vite HMR crashes, SSR cache misses, or broken layout cascading) is diagnosed and solved.
3. **New Workflows or Page Architectures**: A new component architecture, page type, deployment pipeline, or data migration flow is established.

---

## 2. Knowledge Routing Standards (Rules vs. Skills)
When persisting new knowledge, the agent MUST route the information to the correct destination:

| Destination | Scope & Purpose | File Format & Path |
| :--- | :--- | :--- |
| **Project Rule** | Absolute constraints, non-negotiable red lines, coding styles, UI invariants, naming conventions, or SEO requirements. | Markdown file under `.agents/rules/<rule-name>.md` |
| **Project Skill** | Multi-step procedures, runbooks, design systems, debugging SOPs, or complex procedural workflows. | Standard directory under `.agents/skills/<skill-name>/SKILL.md` |

---

## 3. Distillation & Synchronization Procedure
After completing the user's primary technical task, the agent MUST:
1. **Atomic Update**:
   - If an existing Rule or Skill covers the topic, update and refine the existing document using precise content replacement.
   - If the topic is entirely new, create a new rule file (`.agents/rules/*.md`) or skill folder (`.agents/skills/*/SKILL.md`) with valid YAML frontmatter.
2. **Deduplication & Conciseness**:
   - Ensure the rule/skill does not duplicate general coding knowledge the model already possesses.
   - Focus exclusively on project-specific constraints, domain invariants, and proven runbooks.
3. **Explicit Notification**:
   - Explicitly inform the user in the response: *"Synced newly distilled rule/skill to `<filepath>`"*.
