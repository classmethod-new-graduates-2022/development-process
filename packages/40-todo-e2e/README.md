# E2E テスト

この アプリケーションの E2E テストを書いてみよう

## サーバーの起動方法

API サーバー

```console
npm run -w packages/40-todo-api/ start
```

クライアント

```console
npm run -w packages/40-todo-client/ start
```

## テストの実行方法

両サーバーを起動した状態で以下を実行

```console
npx vitest packages/40-todo-e2e/
```
