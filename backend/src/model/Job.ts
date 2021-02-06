import JobCompany from "./JobCompany"

export default class Job {

    constructor(
        public readonly title: string,
        public readonly link: string,
        public readonly location: string,
        public readonly company: JobCompany
    ) {}
}