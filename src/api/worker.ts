import {setupWorker} from "msw/browser";
import {getInterviewAPIMock} from "./endpoint.msw.ts";

const worker = setupWorker(...getInterviewAPIMock())

worker.start()