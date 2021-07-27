import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Env } from "../providers/Env";

@Entity({name:Env.configItem('TABLE_PREFIX')+"email_templates"})

export class EmailTemplates{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    slug:string;

    @Column()
    subject:string;

    @Column({type:'text'})
    message:string;

    @CreateDateColumn()
    created_at:Date;

    @Column()
    created_by:number

    @Column()
    updated_at:Date;

    @Column()
    updated_by:number;

    @Column()
    status:number;
}