import winston from "winston";
import CrawlerInterface from "../crawler/contract/CrawlerInterface";
import Job from "../model/Job";
import JobRepositoryInterface from "../repositories/contract/JobRepositoryInterface";
import Uuid from "../utils/UuidUtil";

export default class JobFacade {

    constructor(
        private readonly jobRepository: JobRepositoryInterface,
        private readonly githubCrawler: CrawlerInterface,
        private readonly hiptersCrawler: CrawlerInterface,
        private readonly programathorCrawler: CrawlerInterface,
        private readonly logger: winston.Logger,
    ) {}

    async updateWithNewJobs() {
        try {
            this.logger.info({ message: `Init extraction jobs`});
            let jobs: Job[] = [];
            
            this.logger.info({ message: `Init extraction jobs in github`});
            const githubJobs = await this.githubCrawler.execute({});
            jobs = jobs.concat(...githubJobs);
            this.logger.info({ message: `Finished extraction jobs in github`});
    
            this.logger.info({ message: `Init extraction jobs in hipsters.jobs`});
            const hipstersJobs = await this.hiptersCrawler.execute({});
            jobs = jobs.concat(...hipstersJobs);
            this.logger.info({ message: `finished extraction jobs in hipsters.jobs`});
            
            this.logger.info({ message: `Init extraction jobs in programathor`});
            const programathorJobs = await this.programathorCrawler.execute({});
            jobs = jobs.concat(...programathorJobs);
            this.logger.info({ message: `Finished extraction jobs in programathor`});

            await this.jobRepository.createMany(jobs);
            this.logger.info({ message: `Finished extraction jobs and persist in algolia`});
        } catch(error) {
            this.logger.error({ message: error.message });
        }
    }
}