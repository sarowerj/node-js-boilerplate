import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn} from "typeorm";
import { Env } from "../providers/Env";

export enum UserRole {
    ADMIN = 1,
    DRIVER = 2,
    BRAND = 3,
    SUSPENDED="0",
}


@Entity({name: Env.configItem('TABLE_PREFIX')+"users_temp"})
export class UsersTemp {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email:string;

    @Column({type:'tinyint',width:1})
    email_verified:number;

    @Column()
    password:string;

    @Column()
    token:string;

    @Column('varchar', {length:16})
    phone:string;

    @Column({type:'tinyint',width:1})
    phone_verified:number;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.DRIVER
    })
    role: UserRole

    @CreateDateColumn()
    created_at: Date;

    @Column()
    created_by: number;

    @CreateDateColumn()
    updated_at: Date;

    @Column()
    updated_by: number;

    @Column({type:'tinyint',width:1})
    status:number;
}