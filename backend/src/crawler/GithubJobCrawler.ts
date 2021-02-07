import CrawlerInterface from "./contract/CrawlerInterface";
import axios from "axios";
import UuidUtil from "../utils/UuidUtil";
import moment from "moment";
import Httpclient from "../utils/HttpClient";

export default class GithubJobCrawler implements CrawlerInterface {

    constructor(private readonly httpClient: Httpclient) {}

    private extractJob(item: any) {
        let company = (item.title.split("@")[1] || '').trim();
        let location = item.title.split(/]/);
        location = location[0];
        location = location.replace("[", '')
        location = location.replace("]", '')

        return {
            objectID: UuidUtil.get(),
            title: item.title,
            // @ts-ignore
            link: item.html_url,
            // @ts-ignore
            location: location,
            company: {
                // @ts-ignore
                logo: "",
                // @ts-ignore
                name: company
            },
            extracted_at: moment.utc()
        }
    }

    async execute(options: { [key: string]: any; }): Promise<any> {
        let frontendbrJobs = await this.httpClient.get("https://api.github.com/repos/frontendbr/vagas/issues");
        let result = await this.httpClient.get("https://api.github.com/repos/backend-br/vagas/issues");
        result = result.data.map((item: any) => {
            return this.extractJob(item);
        });
        frontendbrJobs = frontendbrJobs.data.map((item: any) => {
            return this.extractJob(item);
        });
        // @ts-ignore
        return [...result, ...frontendbrJobs];
    }


}