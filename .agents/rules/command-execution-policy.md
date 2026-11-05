# Automated Command Execution Policy & Security Blacklist

To ensure seamless, uninterrupted agent execution without frequent manual confirmation modals, all tool invocations must adhere to the following automation, whitelisting, and strict blacklist rules.

---

## 1. Zero-Interruption Execution Protocol (Sandbox First)
1. **Always Default to Standard Sandbox Mode (`BypassSandbox: false`)**:
   - Commands executed with `BypassSandbox: false` run within the secure workspace sandbox and are executed **automatically without requiring user confirmation prompts**.
   - Do NOT set `BypassSandbox: true` for regular builds (`npm run build`), test scripts, Python image processing, or workspace file queries.
2. **Transparent Command Logging**:
   - Whenever executing a command, provide a clear, user-facing summary of the command's purpose and log the executed command and its output.

---

## 2. Strict Command Blacklist (PROHIBITED)
The agent is strictly forbidden from running the following dangerous or destructive commands under any circumstances:

| Category | Prohibited Commands / Patterns | Rationale |
| :--- | :--- | :--- |
| **Destructive File Removal** | `rm -rf /`, `rm -rf ~`, `rm -rf *`, `rm -rf .*` | Risk of accidental workspace or system file deletion |
| **VCS Push Operations** | `git push`, `git push origin ...` | Strictly prohibited from autonomous execution. The user will manually review and push after task completion. |
| **VCS Force Operations** | `git push --force`, `git push -f`, `git reset --hard HEAD~*`, `git clean -fdx` | Destroys uncommitted code, git history, or workspace branches |
| **Privilege Escalation** | `sudo`, `su`, `chmod -R 777 /` | Security hazard outside workspace isolation |
| **Secret / Credential Leakage** | `cat ~/.ssh/*`, `cat ~/.aws/*`, printing raw `.env` secrets to logs | Security and privacy violation |
| **Disk & System Modification** | `mkfs`, `fdisk`, `dd if=...`, modifying system root `/etc`, `/usr` | Unsafe system operations |

---

## 3. Allowed Whitelist (Auto-Executed by Default)
The following commands are pre-approved to run automatically within the workspace:

- **Build & Quality Assurance**:
  - `npm run build`, `npm run dev`, `npx astro check`, `npx prettier`, `npm test`
- **Asset & Image Processing**:
  - `python3 -c "..."` (Pillow/PIL image optimization, dimension inspection, montage generation within workspace/artifact directories)
- **Safe Version Control**:
  - `git status`, `git diff`, `git log -n ...`, `git branch`, `git add ...`, `git commit -m "..."`
  - **Local Git Commit Invariant**: After completing any task, refactoring, or dependency update, the agent MUST run rule verification (`node scripts/verify_all_rules.cjs`), verify production build (`npm run build`), and commit changes locally to git (`git commit`). NEVER run `git push` autonomously unless explicitly commanded by the user.
- **Headless Browser Verification**:
  - Headless Chrome screenshot verification against local dev server `http://127.0.0.1:4323/`

---

## 4. Shell Variable Expansion Invariant for Scripting

Never execute inline Python scripts containing unescaped dollar signs (`$`) via `python3 -c "..."` in `zsh` or `bash`.
The shell will silently expand `$0`, `$1`, `$2` into empty strings or shell names (e.g. `zsh.75` or `.65`).

**Mandatory Protocol**:
1. Always create a standalone `.py` file in `scripts/` or `scratch/` using the `write_to_file` tool.
2. Execute the script via `python3 <path_to_script>.py`.
