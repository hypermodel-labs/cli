import { server } from "./init";
import { createTools } from "./createTools";
import { connectServer } from "./connectServer";


async function main() {
  createTools(server);
  await connectServer(server);
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});