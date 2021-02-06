import GithubJobCrawler from "../crawler/GithubJobCrawler";
import HipterJobCrawler from "../crawler/HispterJobCrawler";
import JobFacade from "../facade/JobFacade";
import JobRepository from "../repositories/JobRepository";
import FactoryInterface from "./contract/FactoryInterface";
import logger from "../config/Logger";
import ProgramathorCrawler from "../crawler/ProgramathorCrawler";

export default class JobFacadeFactory implements FactoryInterface<JobFacade> {

    make(values: { [key: string]: any; }): JobFacade {
        return new JobFacade(
            new JobRepository(),
            new GithubJobCrawler(),
            new HipterJobCrawler(),
            new ProgramathorCrawler(),
            logger
        )
    }

}