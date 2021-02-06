export default interface CrawlerInterface {

    execute(options: { [key: string]: any }): Promise<any>;
}