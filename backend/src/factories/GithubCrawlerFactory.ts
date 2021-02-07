import FactoryInterface from "./contract/FactoryInterface";
import CrawlerInterface from "../crawler/contract/CrawlerInterface";
import GithubJobCrawler from "../crawler/GithubJobCrawler";
import HttpClient from "../utils/HttpClient";

export default class GithubCrawlerFactory implements FactoryInterface<CrawlerInterface> {

    make(values: { [key: string]: any; }): CrawlerInterface {
        return new GithubJobCrawler(new HttpClient());
    }

}