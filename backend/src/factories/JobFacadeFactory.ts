import HipterJobCrawler from "../crawler/HispterJobCrawler";
import JobFacade from "../facade/JobFacade";
import JobRepository from "../repositories/JobRepository";
import FactoryInterface from "./contract/FactoryInterface";
import logger from "../config/Logger";
import ProgramathorCrawler from "../crawler/ProgramathorCrawler";
import CuboJobCrawler from "../crawler/CuboJobCrawler";
import GithubCrawlerFactory from "./GithubCrawlerFactory";
import VulpiCrawlerFactory from "./VulpiCrawlerFactory";

export default class JobFacadeFactory implements FactoryInterface<JobFacade> {

    make(values: { [key: string]: any; }): JobFacade {
        return new JobFacade(
            new JobRepository(),
            new GithubCrawlerFactory().make({}),
            new HipterJobCrawler(),
            new ProgramathorCrawler(),
            new CuboJobCrawler(),
            new VulpiCrawlerFactory().make({}),
            logger
        )
    }

}