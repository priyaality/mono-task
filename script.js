import {Low} from "lowdb";
import { JSONFile } from "lowdb/node";
import lodash from "lodash";

const defaultData = {
    users: [], //for user info
    tasks: [], //for all the tasks
    lists: [], //for the lists that a task would be categorised into
    tags: [], //for tags that would be assigned to a task
    taskTags: [] //junction table for the many to many relationships between tags and tasks
}

const adapter = new JSONFile('db.json');
const db = new Low(adapter, defaultData);