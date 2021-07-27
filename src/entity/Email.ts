import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";
import { Env } from "../providers/Env";

@Entity({name:Env.configItem('TABLE_PREFIX')+"email"})

export class Emails{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    user_id:number;

    @Column()
    email_type:number;

    @Column()
    from:string;

    @Column()
    to:string;

    @Column()
    cc:string;

    @Column()
    bcc:string;

    @Column()
    subject:string;

    @Column({type:'text'})
    message:string;

    @CreateDateColumn()
    created_at:Date;

    @Column()
    created_by:number;

    @CreateDateColumn()
    updated_at:Date;

    @Column()
    updated_by:number;

    @CreateDateColumn()
    sent_at:Date;

    @Column()
    sent_by:number;

    @Column()
    sent_count:number;

    @Column({type:'tinyint',width:1})
    status:number;
}