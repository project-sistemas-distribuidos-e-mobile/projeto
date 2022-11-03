import axios from "axios";
import {db} from "../keys";

axios.get(db)
.then(response => {
    console.log(response);
})