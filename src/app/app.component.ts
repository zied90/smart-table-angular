import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  listPassed: any;
  settings: any;
  source: LocalDataSource;
  ngOnInit() {
    this.listPassed = ["yes", "not"];
    this.settings = {
      delete: {
        confirmDelete: true
      },
      columns: {
        id: {
          title: "ID"
        },
        name: {
          title: "Full Name",
          filter: {
            type: "list",
            config: {
              selectText: "Select...",
              list: [
                { value: "Glenna Reichert", title: "Glenna Reichert" },
                { value: "Kurtis Weissnat", title: "Kurtis Weissnat" },
                { value: "Chelsey Dietrich", title: "Chelsey Dietrich" }
              ]
            }
          }
        },
        email: {
          title: "Email",
          filter: {
            type: "completer",
            config: {
              completer: {
                data: this.data,
                searchFields: "email",
                titleField: "email"
              }
            }
          }
        },
        passed: {
          editor: {
            type: "list",
            config: {
              list: [
                { title: "Yes", value: "yes" },
                { title: "Not", value: "not" }
              ]
            }
          },
          title: "Passed",
          filter: {
            type: "checkbox",
            config: {
              true: "Yes",
              false: "No",
              resetText: "clear"
            }
          }
        }
      }
    };
  }
  title = "AngularRedux";

  data = [
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "Julianne.OConner@kory.org",
      passed: "Yes"
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      email: "Lucio_Hettinger@annie.ca",
      passed: "No"
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      email: "Karley_Dach@jasper.info",
      passed: "Yes"
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      email: "Telly.Hoeger@billy.biz",
      passed: "No"
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      email: "Sherwood@rosamond.me",
      passed: "Yes"
    },
    {
      id: 9,
      name: "Glenna Reichert",
      email: "Chaim_McDermott@dana.io",
      passed: "No"
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      email: "Rey.Padberg@karina.biz",
      passed: "No"
    },
    {
      id: 11,
      name: "Nicholas DuBuque",
      email: "Rey.Padberg@rosamond.biz",
      passed: "Yes"
    }
  ];
  onDeleteConfirm(event) {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
