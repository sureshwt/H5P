import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mutli-choice',
  templateUrl: './mutli-choice.component.html',
  styleUrls: ['./mutli-choice.component.scss']
})
export class MutliChoiceComponent implements OnInit {
  questions: any = [];
  addOptions:any = [0,1];
  i : any ;
  constructor() { }

  ngOnInit() {
  
    this.questions = [
      {
        "name": "answers",
        "type": "list",
        "importance": "high",
        "label": "Available options",
        "entity": "option",
        "min": 1,
        "defaultNum": 2,
        "field": {
          "name": "answer",
          "type": "group",
          "label": "Option",
          "importance": "high",
          "fields": [
            {
              "name": "text",
              "type": "text",
              "importance": "medium",
              "widget": "html",
              "label": "Text",
              "tags": ["strong", "em", "sub", "sup"]
            },
            {
              "name": "correct",
              "type": "boolean",
              "label": "Correct",
              "importance": "low"
            },
            {
              "name": "tipsAndFeedback",
              "type": "group",
              "label": "Tips and feedback",
              "importance": "low",
              "optional": true,
              "fields": [
                {
                  "name": "tip",
                  "type": "text",
                  "widget": "html",
                  "label": "Tip text",
                  "importance": "low",
                  "description": "Hint for the user. This will appear before user checks his answer\/answers.",
                  "optional": true,
                  "tags": ["p", "br", "strong", "em", "a"]
                },
                {
                  "name": "chosenFeedback",
                  "type": "text",
                  "widget": "html",
                  "label": "Message displayed if answer is selected",
                  "importance": "low",
                  "description": "Message will appear below the answer on \"check\" if this answer is selected.",
                  "optional": true,
                  "tags": ["strong", "em", "sub", "sup", "a"]
                },
                {
                  "name": "notChosenFeedback",
                  "type": "text",
                  "widget": "html",
                  "label": "Message displayed if answer is not selected",
                  "importance": "low",
                  "description": "Message will appear below the answer on \"check\" if this answer is not selected.",
                  "optional": true,
                  "tags": ["strong", "em", "sub", "sup", "a"]
                }
              ]
            }
          ]
        }
      }
    ]
  }
  addOption(event) {
    debugger
  this.i = this.addOptions.length;
  this.addOptions.push(this.i);  
  }

  expand(ele) {
    debugger
  }

  onActivate(e){
debugger
  }

}
