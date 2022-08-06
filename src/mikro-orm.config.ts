import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from 'path';

export default {
  migrations :{
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  dbName: 'fsreddit',
  type: 'postgresql',
  debug: !__prod__,
  password:"emmanuel2001",
} as Parameters<typeof MikroORM.init>[0];