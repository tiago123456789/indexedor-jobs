import CrawlerInterface from "./contract/CrawlerInterface";
import UuidUtil from "../utils/UuidUtil";
import moment from "moment";
import axios from "axios";

export default class VulpiCrawler implements CrawlerInterface {

    async execute(options: { [key: string]: any; }): Promise<any> {
        const response = await axios.get("https://api.vulpi.com.br/v1/board");
        // @ts-ignore
        const jobs = response.data.results.map((item: any) => {
            return {
                objectID: UuidUtil.get(),
                title: item.title,
                link: `https://app.vulpi.com.br/job/${item.id}`,
                location: item.locations[0]['title'],
                company: {
                    name: item.company.company_name,
                    logo: item.company.logo
                },
                extracted_at: moment.utc()
            }
        });
        return jobs;
    }


};