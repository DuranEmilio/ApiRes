import Sequalize from 'sequelize';
import {sequalize} from '../database/database';

const Task = sequalize.define('task',{
    id:{
        type: Sequalize.INTEGER,
        primarykey: true
    },
    name:{
        type: sequalize.TEXT
    },
    done:{
        type: Sequalize.BOOLEAN
    },
    projectId:{
        type: Sequalize.INTEGER
    }
}, {
    timestaps: false
});

export default Task;