import CrawlerInterface from "./contract/CrawlerInterface";
import puppeteer from "puppeteer";
import cheerio from "cheerio";
import UuidUtil from "../utils/UuidUtil";
import moment from "moment";

export default class ProgramathorCrawler implements CrawlerInterface {

    async execute(options: { [key: string]: any; }): Promise<any> {
        const browser = await puppeteer.launch({
            headless: true,
        });

        const page = await browser.newPage();
        await page.setViewport({
            width: 1300,
            height: 700
        });
        await page.goto(`https://programathor.com.br/jobs`, { waitUntil: 'load', timeout: 0 });
        // @ts-ignore
        const html = await page.evaluate(() => document.querySelector('*').outerHTML);
        const $ = cheerio.load(html);
        const links: string[] = [];
        const jobElements = $(".cell-list");
        const jobs: any[] = [];

        jobElements.each(function () {
            jobs.push({
                objectID: UuidUtil.get(),
                // @ts-ignore
                title: $(this).find(".cell-list-content > h3").text(),
                // @ts-ignore
                link: $(this).find("a").attr("href"),
                // @ts-ignore
                location: $(this).find(".cell-list-content-icon > span:nth-child(2)").text(),
                company: {
                    // @ts-ignore
                    logo: $(this).find(".logo-list > img").attr("src"),
                    // @ts-ignore
                    name: $(this).find(".cell-list-content-icon > span:first-child").text()
                },
                extracted_at: moment.utc()
            })
        });
        await browser.close();
        return jobs;
    }


}