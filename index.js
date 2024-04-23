import server from "./src/server.js";
import { PORT } from "./src/config/envs.js";
server.listen(PORT, () => {
  console.log(`Server listening in PORT: ${PORT}`);
});
