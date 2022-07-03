import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class User1656868787256 implements MigrationInterface {
    private table = 'user';

    private columns = {
        id: 'id',
        first_name: 'first_name',
        last_name: 'last_name',
        age: 'age',
    };

    public async up(queryRunner: QueryRunner): Promise<void> {
        const hasTable = await queryRunner.hasTable(this.table);
        if (!hasTable) {
            await queryRunner.createTable(
                new Table({
                    name: this.table,
                    columns: [
                        {
                            name: this.columns.id,
                            type: 'varchar',
                            isPrimary: true,
                            length: '40',
                        },
                        {
                            name: this.columns.first_name,
                            type: 'varchar',
                            isPrimary: true,
                            length: '40',
                        },
                        {
                            name: this.columns.last_name,
                            type: 'varchar',
                            isPrimary: true,
                            length: '40',
                        },
                        {
                            name: this.columns.age,
                            type: 'int',
                            isPrimary: true,
                            length: '2',
                        },
                    ],
                }),
            );
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const hasTable = await queryRunner.hasTable(this.table);
        if (hasTable) {
            await queryRunner.dropTable(this.table);
        }
    }
}
