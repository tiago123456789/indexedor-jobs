import "./LoaderEnvironment";
import scheduler from "../scheduler/Scheduler";
import JobFacadeFactory from "../factories/JobFacadeFactory";

scheduler
    .register("0 52 12 * * *", () => {
        new JobFacadeFactory()
            .make({})
            .updateWithNewJobs();
    })