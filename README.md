# Custom Prompts

[![CC BY 4.0][cc-by-shield]][cc-by]

Custom Prompts は、開発効率と品質を向上させるための独自のプロンプト集です。

[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg

## 対応 AI

### Cursor

- [Cursor Rules](./.cursor/rules/)
- [Cursor Custom Slash Commands](./.cursor/commands/)
- [Cursor Skills](.cursor/skills/)
- [Cursor MCP](./.cursor/mcp.json)
- Cursor Hooks
  - [Cursor hook settings](./.cursor/hooks.json)
  - [Cursor hook shell script files](/.cursor/hooks/)
- Execution Controls
  - [sandbox.json](/.cursor/sandbox.json)

### Claude Code（停止中）

- [Claude Code Rules](./CLAUDE.md)
- [Claude Code MCP](./mcp.json)
- [Claude Code Settings](./.claude/settings.local.json)

### Windsurf（停止中）

- [Windsurf Rules](./.windsurf/rules/index.md)
- [Windsurf Workflows](./.windsurf/workflows/)
- [Windsurf MCP](https://docs.windsurf.com/windsurf/cascade/mcp)
  - The `~/.codeium/windsurf/mcp_config.json` file is a JSON file that contains a list of servers that Cascade can connect to.
- [Cascade Hooks](https://docs.windsurf.com/windsurf/cascade/hooks)
  - User-level hooks are perfect for personal preferences and optional workflows.`~/.codeium/windsurf/hooks.json`

### 追加予定 AI

- AGENTS.md

## ルール構成

| ファイル名                            | 概要                      | 編集する必要 | Always Apply |
| ------------------------------------- | ------------------------- | ------------ | ------------ |
| [index.mdc](/.cursor/rules/index.mdc) | 基本的な開発原則など      |              | Yes          |
| [uiux.mdc](/.cursor/rules/uiux.mdc)   | UI/UX 設計ルール          |              | Yes          |
| [mcps.mdc](/.cursor/rules/mcps.mdc)   | 使用する MCP のツールなど | 必要に応じて | Yes          |

## スラッシュコマンド一覧

| command             | description              |
| ------------------- | ------------------------ |
| `/logs`             | プロンプトログ保存       |
| `/git-sync`         | Git 同期・プッシュ解決   |
|                     |                          |
| `/test`             | テスト・ビルド実行       |
| `/coverage`         | テストカバレッジ検証     |
|                     |                          |
| `/issue`            | GitHub Issue 作成・管理  |
| `/branch`           | ブランチ作成・Git 操作   |
| `/worktree`         | Worktree 作成・起動      |
| `/worktree-cleanup` | Worktree 整理・削除      |
| `/commit`           | コミット管理・規約       |
| `/pr`               | プルリクエスト作成・管理 |
| `/pr-review`        | プルリクエストレビュー   |

### 追加予定コマンド

- 依存関係解消
- テスト駆動開発ワークフロー
- データベース確認
- セキュリティチェック
- AWSデプロイ、監視

## Hooks 一覧

| ファイル名                                             | 実行タイミング                    | 内容                                                             |
| ------------------------------------------------------ | --------------------------------- | ---------------------------------------------------------------- |
| [on-tool-use.sh](.cursor/hooks/on-tool-use.sh)         | ツール実行のたび                  | 効果音（Morse）                                                  |
| [on-notification.sh](.cursor/hooks/on-notification.sh) | AI がユーザーの入力を待っている時 | 効果音（Bottle）+ 通知「Action required for your next command.」 |
| [on-stop.sh](.cursor/hooks/on-stop.sh)                 | タスク完了時                      | 効果音（Hero）+ 通知「Task completed successfully!」             |

## MCPs (Model Context Protocol)

| MCP              | 説明                                                                                                                                            |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| GitKraken        | ブランチ管理、コミット履歴の確認、変更のステージング/コミット、プルリクエストの作成・レビュー、イシュー管理など、Git ワークフローに関連する操作 |
| Next.js DevTools | Next.js 16 以降の開発サーバーと統合し、リアルタイムでアプリケーション情報にアクセス                                                             |
| Chrome DevTools  | Chrome DevTools を MCP 経由で操作し、ブラウザの開発者ツール機能を利用可能に                                                                     |
| Playwright       | ブラウザの自動操作とエンドツーエンドテストを行う                                                                                                |
| DeepWiki         | 外部ナレッジベースから GitHub リポジトリのドキュメントを検索                                                                                    |
| Supabase         | PostgreSQL データベース、認証、ストレージ、リアルタイム API を提供（アクセストークン不要、プロジェクトリファレンス ID 必要）                    |
