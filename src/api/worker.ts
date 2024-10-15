import {setupWorker} from "msw/browser";
import {getCustomerDataAPIMock} from "./endpoint.msw.ts";

const worker = setupWorker(...getCustomerDataAPIMock())

worker.start()