import "./LoaderEnvironment";
import scheduler from "../scheduler/Scheduler";
import JobFacadeFactory from "../factories/JobFacadeFactory";

scheduler
    .register("0 0 1 * * *", () => {
        new JobFacadeFactory()
            .make({})
            .updateWithNewJobs();
    })