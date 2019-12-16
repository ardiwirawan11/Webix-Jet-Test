import { JetView } from "webix-jet";
import { getData, postData } from "models/records";

export default class SomeView extends JetView {
    config() {
        return {
            rows: [
                {
                    view: "datatable",
                    url: getData,
                    editable: true,
                    columns: [
                        { header: "Id", id: "_id", adjust: true },
                        { header: "Title", id: "title", adjust: true },
                        { header: "Complate", id: "isComplete", adjust: true },
                    ]
                },
                {
                    view: "button", id: "btn_save", value: "Save", click: postData
                }

            ]
        } 
    }
    
}