import { JobCallback } from "node-schedule";

export default interface SchedulerInterface<T> {

    register(time: string, action: JobCallback): T;
}