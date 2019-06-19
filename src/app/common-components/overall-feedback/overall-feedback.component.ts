import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overall-feedback',
  templateUrl: './overall-feedback.component.html',
  styleUrls: ['./overall-feedback.component.scss']
})
export class OverallFeedbackComponent implements OnInit {

  constructor() { }
  overAllFeedback: any = [];
  ngOnInit() {
    this.overAllFeedback = [
      {
        expanded: true,
        importance: "low",
        label: "Overall Feedback",
        name: "overallFeedback",
        type: "group",
        fields: [
          {
            defaultNum: 1,
            description: 'Click the "Add range" button to add as many ranges as you need. Example: 0-20% Bad score, 21-91% Average Score, 91-100% Great Score!',
            entity: "range",
            importance: "high",
            label: "Define custom feedback for any score range",
            min: 1,
            name: "overallFeedback",
            optional: true,
            type: "list",
            field: {
              importance: "low",
              name: "overallFeedback",
              type: "group",
              fields: [
                {
                  default: 0,
                  label: "Score Range",
                  max: 100,
                  min: 0,
                  name: "from",
                  type: "number",
                  unit: "%",
                }, {
                  default: 100,
                  max: 100,
                  min: 0,
                  name: "to",
                  type: "number",
                  unit: "%"
                },
                {
                  importance: "low",
                  label: "Feedback for defined score range",
                  name: "feedback",
                  optional: true,
                  placeholder: "Fill in the feedback",
                  type: "text"
                }
              ]
            },
            widgets: [
              {
                name: "RangeList",
                label: "Default"
              }
            ]
          }
        ]
      }
    ]
  }

}
