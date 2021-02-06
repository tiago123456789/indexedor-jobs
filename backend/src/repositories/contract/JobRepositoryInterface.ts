import Job from "../../model/Job";

export default interface JobRepositoryInterface {

    create(Job: Job): void;

    createMany(jobs: Job[]): void 

    search(search: string):  Readonly<Promise<any>>;

}