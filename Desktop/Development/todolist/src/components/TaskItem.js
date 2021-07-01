import { observer, PropTypes } from "mobx-react";


const TaskItem = (props) => {
return(

  <div>
      <center>
        <li className="list-group-item list-group-item-primary">
   {props.task.name}</li><button type="button" class="btn btn-outline-primary">Done</button>
    <button type="button" class="btn btn-outline-danger">Not Done</button>
  </center>
  </div>

);
};

export default observer(TaskItem);