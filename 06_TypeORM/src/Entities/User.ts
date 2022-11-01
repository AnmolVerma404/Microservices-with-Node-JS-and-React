import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity{//Here user will be a table in DB
    @PrimaryGeneratedColumn()
    id!:number;
    
    @Column()
    firstName!:string;
    @Column()
    lastName!:string;
    @Column()
    userName!:string;
}