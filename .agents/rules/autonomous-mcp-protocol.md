# Autonomous MCP Evaluation & Dynamic Subagent Protocol

This rule governs how Antigravity autonomously determines the necessity of installing external Model Context Protocol (MCP) servers, discovers trusted endpoints, configures them seamlessly, and delegates operations to specialized AI subagents.

---

## 1. Tool Decision Hierarchy (Three-Tier Evaluation Funnel)

To protect the model's context window from unnecessary token overhead and maintain a minimal attack surface, the agent MUST evaluate tool requirements through a strict 3-tier decision funnel:

```
[ Tier 1: Local Execution ] ──> Native tools (Bash, Node.js, Python, AST/Regex, Git)
          │  (If insufficient for external proprietary systems)
          ▼
[ Tier 2: Generic Web Retrieval ] ──> search_web, read_url_content (Static & Public Docs)
          │  (If high-frequency, bidirectional, authenticated RPC is required)
          ▼
[ Tier 3: Autonomous MCP Integration ] ──> Dynamic MCP Discovery & Configuration
```

---

## 2. MCP Installation Trigger Criteria

The agent MUST autonomously initiate the MCP evaluation workflow ONLY when at least one of the following criteria is met:
1. **Authenticated Live Ecosystem Operations**: The task requires ongoing, bidirectional API access to an external SaaS or platform (e.g., live SEO ranking indexes like Ubersuggest/Ahrefs, GitHub PR/Issue management, Cloudflare edge APIs, Figma design token extraction, or live SQL/PostgreSQL databases).
2. **Protocol-Level Interactivity**: The interaction requires streaming, complex schema negotiation, or live stateful sessions that cannot be reliably reproduced using simple one-off `curl` or Node.js scripts.
3. **User-Instructed External Service Hook**: The user requests ongoing monitoring, direct tool integration, or deep synchronization with an external software service.

---

## 3. Autonomous Discovery & Security Verification SOP

When a capability gap is confirmed, the agent MUST execute the following standard operating procedure:

1. **Discovery via Verified Registries**:
   - Use `search_web` to search for official or community-verified MCP servers across reputable sources (e.g., official vendor documentation, Smithery.ai, Glama.ai, or authoritative GitHub repositories).
2. **Transport & Safety Assessment**:
   - **Remote SSE / Stream (Preferred for cloud SaaS)**: Verify endpoint URL format (`https://<vendor-mcp-endpoint>/mcp` or `/sse`).
   - **Local Stdio (Preferred for local databases & dev tools)**: Verify standard runtime dependencies (Node.js/npx, Python/uvx, Docker) and ensure read-only safety flags are used where applicable.
3. **Deduplication Check**:
   - Inspect existing configuration in `.agents/mcp_config.json` and `~/.gemini/antigravity/mcp_config.json` to avoid redundant server registrations.

---

## 4. Configuration & Multi-Tier Persistence Standard

Once an MCP server is verified, the agent MUST persist the configuration across all active configuration layers:

```json
{
  "mcpServers": {
    "<server-id>": {
      "serverUrl": "https://<endpoint-url>/mcp",
      "url": "https://<endpoint-url>/mcp"
    }
  }
}
```

### Target Configuration Paths:
- **Workspace Priority**: `.agents/mcp_config.json` (checked into project VCS for team sharing).
- **Global Antigravity**: `~/.gemini/antigravity/mcp_config.json` (available across all workspaces).
- **Global Gemini Config**: `~/.gemini/config/mcp_config.json` (cross-tool fallback).

---

## 5. Dynamic Subagent Specialization & Delegation

To prevent context contamination in the primary orchestration session:

1. **Context Isolation**: When a specialized MCP server provides numerous heavy schemas (e.g., > 10 distinct API methods), the main agent SHOULD delegate MCP-heavy tasks to a dedicated subagent via `invoke_subagent` or `define_subagent`.
2. **Subagent Role Archetypes**:
   - **SEO & Growth Specialist**: Paired with Ubersuggest / GSC MCP tools for live keyword tracking and competitor SERP intelligence.
   - **Infrastructure & Deployment Specialist**: Paired with Cloudflare / Cloud Provider MCP for edge worker deployments and KV state inspection.
   - **Database & Data Migration Specialist**: Paired with SQL/ORM MCP with strict read-only / staging safety constraints.
3. **Execution Reporting**: The specialized subagent reports the synthesized analytical summary back to the main agent, keeping the primary user conversation clean, actionable, and token-efficient.
