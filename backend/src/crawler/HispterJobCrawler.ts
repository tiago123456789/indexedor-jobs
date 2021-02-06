import CrawlerInterface from "./contract/CrawlerInterface";
import puppeteer from "puppeteer";
import cheerio from "cheerio";
import UuidUtil from "../utils/UuidUtil";
import moment from "moment";

export default class HipterJobCrawler implements CrawlerInterface {

    async execute(options: { [key: string]: any; }): Promise<any> {
        const browser = await puppeteer.launch({
            headless: true,
        });
    
        const page = await browser.newPage();
        await page.setViewport({
            width: 1300,
            height: 700
        });
        await page.goto(`https://hipsters.jobs/jobs/`, { waitUntil: 'load', timeout: 0 });
        // @ts-ignore
        const html = await page.evaluate(() => document.querySelector('*').outerHTML);
        const $ = cheerio.load(html);
        const jobs: string[] = [];
        const elementJobs = $(".listing-item__jobs");

        elementJobs.each(function() {
            // @ts-ignore
            jobs.push({
                objectID: UuidUtil.get(),
                // @ts-ignore
                title: $(this).find(".media-body > .listing-item__title > a").text(),
                // @ts-ignore
                link: $(this).find(".media-body > .listing-item__title > a").attr("href"),
                // @ts-ignore
                location: $(this).find(".media-body > .listing-item__info > .listing-item__info--item-location").text().trim(),
                company: {
                    // @ts-ignore
                    logo: $(this).find(".listing-item__logo > a > img").attr("src"),
                    // @ts-ignore
                    name: $(this).find(".media-body > .listing-item__info > .listing-item__info--item-company").text().trim()
                },
                extracted_at: moment.utc()
            })
        });
        await browser.close();
        return jobs;
    }


};