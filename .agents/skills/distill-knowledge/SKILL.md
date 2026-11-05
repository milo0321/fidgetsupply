---
name: Knowledge Distillation & Skill Evolution
description: >-
  Standard operating procedure for extracting insights, user preferences, architectural decisions, and bug-fix patterns from recent conversations into project rules and skills.
  Use when the user says "沉淀经验", "保存为技能", "/learn", or asks to update documentation based on recent work.
---

# Knowledge Distillation & Skill Evolution Protocol

When requested to distill knowledge, extract learning patterns, or synthesize new skills/rules from the current session:

---

## 1. Step-by-Step Distillation Workflow

1. **Analyze Conversation History & Decisions**:
   - Review recent user prompts, corrections, debugging iterations, and verified solutions.
   - Extract actionable, permanent engineering rules or procedural steps.

2. **Categorize Destination**:
   - **Rules (`.agents/rules/*.md`)**: For non-negotiable constraints, design invariants, coding conventions, and negative prohibitions ("NEVER do X").
   - **Skills (`.agents/skills/<name>/SKILL.md`)**: For actionable step-by-step procedures, component architectures, migration runbooks, and debugging checklists.

3. **Check Existing Artifacts for Updates**:
   - Search `.agents/rules/` and `.agents/skills/` to check if a relevant file already exists.
   - If an existing file exists, update it atomically.
   - If no relevant file exists, create a new file following naming conventions (kebab-case).

4. **Ensure Standard Formatting**:
   - For Skills: Ensure `SKILL.md` has valid YAML frontmatter (`name` and a third-person `description` explaining when to activate).
   - For Rules: Ensure clear markdown headings, rationale, and bad vs. good code examples if applicable.

5. **Run Verification**:
   - Run `node scripts/verify_all_rules.cjs` to confirm syntax and structural integrity.

6. **Report Summary**:
   - Report the newly persisted knowledge and linked file paths to the user.
