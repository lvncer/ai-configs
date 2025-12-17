# Custom Prompts

[![CC BY 4.0][cc-by-shield]][cc-by]

Custom Prompts は、開発効率と品質を向上させるための独自のプロンプト集です。

[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg

## 対応 AI

### Agents

- [Agents.md](./AGENTS.md)

### Cursor

- [Cursor Rules](./.cursor/rules/)

  | ファイル名                              | 概要                               | 編集する必要 |
  | --------------------------------------- | ---------------------------------- | ------------ |
  | [index.mdc](/.cursor/rules/index.mdc)   | 基本的な開発原則など               |              |
  | [uiux.mdc](/.cursor/rules/uiux.mdc)     | UI/UX 設計ルール                   |              |
  | [mcps.mdc](/.cursor/rules/mcps.mdc)     | 使用する MCP のツールなど          | 必要に応じて |
  | [nextjs.mdc](/.cursor/rules/nextjs.mdc) | Next.js におけるベストプラクティス |              |

- [Cursor Custom Slash Commands](./.cursor/commands/): / [README.md](./.cursor/slash-commands.md)

- [Cursor MCP](./.cursor/mcp.json)

### Claude Code

- [Claude Code Rules](./CLAUDE.md)
- [Claude Code MCP](./mcp.json)
- [Claude Code Settings](./.claude/settings.local.json)

### Windsurf

- [Windsurf Rules](./.windsurf/rules/index.md)
- [Windsurf Workflows](./.windsurf/workflows/)
- [Windsurf MCP](https://docs.windsurf.com/windsurf/cascade/mcp)
  - The `~/.codeium/windsurf/mcp_config.json` file is a JSON file that contains a list of servers that Cascade can connect to.
- [Cascade Hooks](https://docs.windsurf.com/windsurf/cascade/hooks)
  - User-level hooks are perfect for personal preferences and optional workflows.`~/.codeium/windsurf/hooks.json`

## ルール構成

| Agenda              | 説明                                                                |
| ------------------- | ------------------------------------------------------------------- |
| instructions        | AI に指示する内容                                                   |
| Global Rules        | 基本的な開発原則                                                    |
| Execution Workflows | 実行フロー （段階的にスラッシュコマンドへ移行）                     |
| Tech Stack          | 使用技術とバージョン管理 （廃止。`documents/`にまとめる）           |
| MCP                 | 使用する MCP のツールと使用タイミング、簡単な説明                   |
| Directory Structure | プロジェクト構造とファイル命名規則 （廃止。`documents/`にまとめる） |
| UI/UX Guidelines    | UI/UX 設計・実装ルール                                              |

### MCPs (Model Context Protocol)

| MCP              | 説明                                                                                                                                            |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| GitKraken        | ブランチ管理、コミット履歴の確認、変更のステージング/コミット、プルリクエストの作成・レビュー、イシュー管理など、Git ワークフローに関連する操作 |
| Next.js DevTools | Next.js 16 以降の開発サーバーと統合し、リアルタイムでアプリケーション情報にアクセス                                                             |
| Chrome DevTools  | Chrome DevTools を MCP 経由で操作し、ブラウザの開発者ツール機能を利用可能に                                                                     |
| Playwright       | ブラウザの自動操作とエンドツーエンドテストを行う                                                                                                |
| DeepWiki         | 外部ナレッジベースから GitHub リポジトリのドキュメントを検索                                                                                    |
| Supabase         | PostgreSQL データベース、認証、ストレージ、リアルタイム API を提供（アクセストークン不要、プロジェクトリファレンス ID 必要）                    |
