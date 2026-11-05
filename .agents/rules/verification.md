# Ironclad Rule: Rigorous Cross-Validation

**Goal**: Never assume a task is complete based solely on successful code compilation or script execution. Always perform independent, rigorous cross-validation (verifying the final user-facing output) before reporting completion.

## Core Philosophy: Zero Self-Trust (Full SDLC Pipeline)
Treat every task like a professional software engineering pipeline. Never assume your own code is flawless. Every change must go through a strict five-step pipeline before it is considered "done":

1. **Requirements (需求)**: Fully understand the user's request or proactively research the objective. Clarify any ambiguities before moving forward.
2. **Design (设计)**: Create a clear architectural and implementation plan (e.g., `implementation_plan.md`). Outline exactly what files will be changed, the data structures involved, and how the components interact. Do not start coding until the design is solid and approved.
3. **Coding (编码)**: Writing the actual code, script, or configuration based strictly on the approved design.
4. **Review (代码审查)**: Once coded, step back and review the implementation with a senior engineer's mindset. Did it meet all requirements? Did it break existing architecture? Are there edge cases?
   - **Feedback Loop (Review 被拒)**: If the Review discovers issues, do not leave it to chance. The task is **rejected back to Step 3 (Coding)** for iteration.
5. **QA (测试验收)**: This is the most critical step. Do NOT skip this. 
   - Execute a local HTTP request (e.g., `curl`) to verify web DOM rendering.
   - Query databases/files to verify data structural integrity.
   - **Feedback Loop (QA 失败 - 逻辑级)**: If the QA testing fails due to a structural logic flaw (e.g. underlying link is completely broken), **reject back to Step 2 (Design)**.
   - **Feedback Loop (QA 失败 - 语法级)**: If the failure is a simple syntax or rendering error, **reject back to Step 3 (Coding)**.
   - **The Only Exit Point (唯一的出口)**: All internal iterations and "rejections" must be handled silently in the background. Only when the QA test report lights up 100% green are you allowed to finish the process and output the words "The task is done" to the user.

## Core Directives

1. **No Premature Declarations**:
   Do NOT report to the user that a bug is fixed or a feature is implemented until the **QA** step has empirically proven the final output.
   
2. **No "People-Pleasing" Apologies**:
   If the Review or QA step fails, fix it silently in the background. Do not waste the user's time with empty apologies. The user demands absolute engineering certainty.

**Enforcement**:
This pipeline is non-negotiable. Before typing "The task is done", you must have concrete evidence from the QA phase. If you haven't run a test to verify it, you are still in the Coding phase.
