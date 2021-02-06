import Job from "../model/Job";
import JobRepositoryInterface from "./contract/JobRepositoryInterface";
import algoliasearch, { SearchClient, SearchIndex } from "algoliasearch";

export default class JobRepository implements JobRepositoryInterface {

    private client: SearchClient;

    private index: SearchIndex;

    constructor() {
        // @ts-ignore
        this.client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_APP_KEY);
        this.index = this.client.initIndex("jobs");
    }

    create(job: Job): void {
        this.index.saveObject(job);
    }

    createMany(jobs: Job[]): void {
        this.index.saveObjects(jobs);
    }

    search(search: string): Readonly<Promise<any>> {
        return this.index.search(search);
    }

}