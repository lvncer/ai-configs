# Custom Prompts

[![CC BY 4.0][cc-by-shield]][cc-by]

Custom Prompts は、開発効率と品質を向上させるための独自のプロンプト集です。

[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg

## 対応 AI

### Cursor

- [Rules](./.cursor/rules/)
- [Custom Slash Commands](./.cursor/commands/)
- [Skills](.cursor/skills/)
- [MCPs](./.cursor/mcp.json)
- Cursor Hooks
  - [Cursor hook settings](./.cursor/hooks.json)
  - [Cursor hook shell script files](/.cursor/hooks/)
- [Subagents](/.cursor/agents/)
- Execution Controls
  - [sandbox.json](/.cursor/sandbox.json)

### 追加予定 AI

- AGENTS.md
- Widnsurf
- Claude Code

## SETUP

他プロジェクトで `.cursor` を使う場合、このリポジトリから取得する:

```sh
tmp_dir="$(mktemp -d)"
curl -L https://github.com/lvncer/ai-configs/archive/refs/heads/main.tar.gz -o "$tmp_dir/ai-configs-main.tar.gz"
tar -xzf "$tmp_dir/ai-configs-main.tar.gz" -C "$tmp_dir"
rm -rf <プロジェクトパス>/.cursor
cp -R "$tmp_dir/ai-configs-main/.cursor" <プロジェクトパス>/.cursor
rm -rf "$tmp_dir"
```

`<プロジェクトパス>` を対象のワークスペースルートに置き換える。

## ルール構成

| ファイル名                                        | 概要                                | 編集する必要 | Always Apply |
| ------------------------------------------------- | ----------------------------------- | ------------ | ------------ |
| [index.mdc](/.cursor/rules/index.mdc)             | 基本的な開発原則など                |              | Yes          |
| [uiux.mdc](/.cursor/rules/uiux.mdc)               | UI/UX 設計ルール                    |              | Yes          |
| [mcps.mdc](/.cursor/rules/mcps.mdc)               | 使用する MCP のツールなど           | 必要に応じて | Yes          |
| [ng-commands.mdc](/.cursor/rules/ng-commands.mdc) | 禁止コマンド（awk/sed/git push 等） |              | Yes          |

## スラッシュコマンド一覧

| command                                                    | description              |
| ---------------------------------------------------------- | ------------------------ |
| [/logs](/.cursor/commands/logs.md)                         | プロンプトログ保存       |
| [/git-sync](/.cursor/commands/git-sync.md)                 | Git 同期・プッシュ解決   |
|                                                            |                          |
| [/test](/.cursor/commands/test.md)                         | テスト・ビルド実行       |
| [/coverage](/.cursor/commands/coverage.md)                 | テストカバレッジ検証     |
|                                                            |                          |
| [/issue](/.cursor/commands/issue.md)                       | GitHub Issue 作成・管理  |
| [/branch](/.cursor/commands/branch.md)                     | ブランチ作成・Git 操作   |
| [/worktree](/.cursor/commands/worktree.md)                 | Worktree 作成・起動      |
| [/worktree-cleanup](/.cursor/commands/worktree-cleanup.md) | Worktree 整理・削除      |
| [/commit](/.cursor/commands/commit.md)                     | コミット管理・規約       |
| [/pr](/.cursor/commands/pr.md)                             | プルリクエスト作成・管理 |
| [/pr-review](/.cursor/commands/pr-review.md)               | プルリクエストレビュー   |

### 追加予定コマンド

- 依存関係解消
- テスト駆動開発ワークフロー
- データベース確認
- セキュリティチェック
- AWSデプロイ、監視

## Hooks 一覧

| Trigger              | Shell Scripts                                        | 内容                                                                                                          |
| -------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| beforeShellExecution | [validate-shell.sh](.cursor/hooks/validate-shell.sh) | 禁止コマンドの検証（awk/sed/git push/git add -A/rm -rf 等）。matcher で git/awk/sed/rm を含むコマンドのみ検証 |
| postToolUse          | [on-tool-use.sh](.cursor/hooks/on-tool-use.sh)       | 効果音（Morse）                                                                                               |
| stop                 | [on-stop.sh](.cursor/hooks/on-stop.sh)               | 効果音（Hero）+ 通知「Task completed. Action required for your next command.」                                |

> **補足**: `afterAgentResponse`（AI が入力を待っている時の通知）は、エージェントループ中に期待通り発火しないため hooks から削除済み。Cursor の仕様上、該当タイミング専用のフックは未提供。

## MCPs (Model Context Protocol)

| MCP              | 説明                                                                                                                                            |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| GitKraken        | ブランチ管理、コミット履歴の確認、変更のステージング/コミット、プルリクエストの作成・レビュー、イシュー管理など、Git ワークフローに関連する操作 |
| Next.js DevTools | Next.js 16 以降の開発サーバーと統合し、リアルタイムでアプリケーション情報にアクセス                                                             |
| Chrome DevTools  | Chrome DevTools を MCP 経由で操作し、ブラウザの開発者ツール機能を利用可能に                                                                     |
| Playwright       | ブラウザの自動操作とエンドツーエンドテストを行う                                                                                                |
| DeepWiki         | 外部ナレッジベースから GitHub リポジトリのドキュメントを検索                                                                                    |
| Supabase         | PostgreSQL データベース、認証、ストレージ、リアルタイム API を提供（アクセストークン不要、プロジェクトリファレンス ID 必要）                    |

## Execution Controls

[sandbox.json](/.cursor/sandbox.json) により、エージェントが実行するコマンドのサンドボックス制御が行われる。

### 制御される操作

| 操作                 | 制御内容                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------ |
| **ネットワーク**     | `networkPolicy` で制御。`default: "deny"` の場合、`allow` に指定したドメイン以外へのアクセスをブロック |
| **ファイルシステム** | ワークスペース内への書き込みのみ許可。それ以外のディレクトリは読み取りのみ                             |

### 設定の反映に必要なこと

**「Auto-Run in Sandbox」を有効にする必要がある。** Cursor の設定（Settings → Features → Agent）で「Auto-Run in Sandbox」をオンにしないと、`sandbox.json` のポリシーが適用されない。

## Subagent 一覧

| name                                                    | description                                              |
| ------------------------------------------------------- | -------------------------------------------------------- |
| [architect](/.cursor/agents/architect.md)               | システム設計・スケーラビリティ・技術判断の専門家         |
| [planner](/.cursor/agents/planner.md)                   | 複雑な機能実装・リファクタの計画立案専門家               |
| [implementer](/.cursor/agents/implementer.md)           | 実装専門家。計画に沿ってコードを書き、既存パターンに従う |
| [verifier](/.cursor/agents/verifier.md)                 | コード品質・動作の検証専門家。マージ前チェック           |
| [debugger](/.cursor/agents/debugger.md)                 | バグ調査・原因特定・修正の専門家                         |
| [test-runner](/.cursor/agents/test-runner.md)           | テスト設計・実装・実行の専門家                           |
| [security-auditor](/.cursor/agents/security-auditor.md) | セキュリティ監査の専門家。脆弱性検出、OWASP Top 10       |
