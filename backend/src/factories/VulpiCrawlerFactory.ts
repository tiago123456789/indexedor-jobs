import FactoryInterface from "./contract/FactoryInterface";
import CrawlerInterface from "../crawler/contract/CrawlerInterface";
import HttpClient from "../utils/HttpClient";
import VulpiCrawler from "../crawler/VulpiCrawler";

export default class VulpiCrawlerFactory implements FactoryInterface<CrawlerInterface> {

    make(values: { [key: string]: any; }): CrawlerInterface {
        return new VulpiCrawler(new HttpClient());
    }

}