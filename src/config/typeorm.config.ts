import { TypeOrmModuleOptions } from '@nestjs/typeorm';

console.log("[__dirname + '/../**/*.entity.ts'],", [
  __dirname + '/../**/*.entity.ts',
]);

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'tasksmanagment',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
