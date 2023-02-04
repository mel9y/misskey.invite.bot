import { createBot, GatewayIntents, startBot } from '../deps.ts';
import { getEnv } from './utils.ts';

const client = createBot({
  token: getEnv('DISCORD_BOT_TOKEN'),
  intents: GatewayIntents.Guilds | GatewayIntents.GuildMessages |
    GatewayIntents.MessageContent,
  events: {
    ready(_self, payload) {
      console.log(`${payload.user.username} is ready!`);
    },
  },
});

await startBot(client);
