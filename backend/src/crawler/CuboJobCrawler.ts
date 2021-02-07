import CrawlerInterface from "./contract/CrawlerInterface";
import puppeteer from "puppeteer";
import cheerio from "cheerio";
import UuidUtil from "../utils/UuidUtil";
import moment from "moment";

export default class CuboJobCrawler implements CrawlerInterface {

    async execute(options: { [key: string]: any; }): Promise<any> {
        const browser = await puppeteer.launch({
            headless: true,
        });
    
        const page = await browser.newPage();
        await page.setViewport({
            width: 1300,
            height: 700
        });
        await page.goto(`https://cubo.network/jobs/search?area=&level=&startup=&city=&remote=true`, { waitUntil: 'networkidle0', timeout: 0 });
        // @ts-ignore
        const html = await page.evaluate(() => document.body.outerHTML);
        const $ = cheerio.load(html);
        const jobs: string[] = [];
        const elementJobs = $(".jobs__item");

        elementJobs.each(function() {
            // @ts-ignore
            jobs.push({
                objectID: UuidUtil.get(),
                // @ts-ignore
                title: $(this).find(".content__info > .title").text(),
                // @ts-ignore
                link: `https://cubo.network/jobs${$(this).attr("href")}`,
                // @ts-ignore
                location: "",
                company: {
                    // @ts-ignore
                    logo: $(this).find(".cb-card-image > img").attr('src'),
                    // @ts-ignore
                    name: $(this).find(".pretitle").text().trim()
                },
                extracted_at: moment.utc()
            })
        });
        await browser.close();
        return jobs;
    }


};