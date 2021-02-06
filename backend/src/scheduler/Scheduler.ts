import schedule, { JobCallback } from "node-schedule";
import SchedulerInterface from "./contract/SchedulerInterface";

class Scheduler implements SchedulerInterface<Scheduler> {

    register(time: string, action: JobCallback): Scheduler {
        schedule.scheduleJob(time, time, action);
        return this;
    }

}


const scheduler = new Scheduler();
export default scheduler;