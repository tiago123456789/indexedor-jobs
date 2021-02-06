import CrawlerInterface from "./contract/CrawlerInterface";
import axios from "axios";
import UuidUtil from "../utils/UuidUtil";
import moment from "moment";

export default class GithubJobCrawler implements CrawlerInterface {

    async execute(options: { [key: string]: any; }): Promise<any> {
        let result = await axios.get("https://api.github.com/repos/backend-br/vagas/issues");
        result = result.data.map((item: any) => {
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
        });
        return result;
    }


}