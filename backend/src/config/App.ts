import "./LoaderEnvironment";
import scheduler from "../scheduler/Scheduler";
import JobFacadeFactory from "../factories/JobFacadeFactory";

scheduler
    .register("0 8 22 * * *", () => {
        new JobFacadeFactory()
            .make({})
            .updateWithNewJobs();
    })