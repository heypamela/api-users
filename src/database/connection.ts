import { Repository, EntityTarget, DataSource } from "typeorm";

import { AppDataSource } from "src/database/data-source";

export class Database {
  public getConnection(): DataSource {
    return AppDataSource;
  }

  public async createConnection(): Promise<DataSource> {
    return AppDataSource.initialize();
  }

  public async closeConnection(): Promise<void> {
    return AppDataSource.destroy();
  }

  public getRepository(entity: EntityTarget<any>): Repository<any> {
    return AppDataSource.getRepository(entity);
  }
}
