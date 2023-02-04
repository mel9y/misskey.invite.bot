# misskey.invite.bot

Misskey インスタンスの招待コードを限られたギルドで共有したいときに利用できる Discord Bot

Deno で書かれています。

- [ ] 複数のギルドを指定できるようにする

> **Warning**
>
> 招待コードの発行自体は Misskey 側で行っているので `misskey.invite.bot` の責務ではありません。(Misskey API の `api/admin/invite` にリクエストを飛ばして取得しています。)

## Usage

### Docker で起動する

1. `cp .env.default .env` で `.env` をコピーする
2. `.env` に環境変数を設定する
3. `docker compose up -d` で起動する

### Cloudflare Worker を使用する

(記述中)

## Environmental variables

| Value | Description |
| --- | --- |
| `DISCORD_BOT_TOKEN` | Discord Bot のトークン |
| `MISSKEY_INSTANCE_DOMAIN` | Misskey のインスタンスのドメイン |
| `DISCORD_GUILD_ID` | インスタンスの招待コードを共有するギルドのID |
| `MISSKEY_INSTANCE_TOKEN` | Misskey のインスタンスのアクセストークン |
