import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-behaviour-settings',
  templateUrl: './behaviour-settings.component.html',
  styleUrls: ['./behaviour-settings.component.scss']
})
export class BehaviourSettingsComponent implements OnInit {
  beheviouralData: any = [];
  constructor() { }

  ngOnInit() {
    this.beheviouralData = [
      {
        importance: "low",
        label: "Behavioural settings",
        name: "behaviour",
        optional: true,
        type: "group",
        fields: [
          {
            default: true,
            importance: "low",
            label: 'Enable "Retry" button',
            name: "enableRetry",
            optional: true,
            type: "boolean",
          },
          {
            default: true,
            importance: "low",
            label: 'Enable "Show Solution" button',
            name: "enableSolutionsButton",
            optional: true,
            type: "boolean"
          },
          // {
          //   default: true,
          //   importance: "low",
          //   label: ' "Check" button',
          //   name: "enableCheckButton",
          //   optional: true,
          //   type: "boolean",
          //   widget: "none"
          // },
          {
            default: "auto",
            description: "Select the look and behaviour of the question.",
            importance: "low",
            label: "Question Type",
            name: "type",
            options: [
              { value: "auto", label: "Automatic" },
              { value: "multi", label: "Multiple Choice (Checkboxes)" },
              { value: "single", label: "Single Choice (Radio Buttons)" }
            ],
            type: "select"

          },
          {
            default: false,
            description: 'Enable to give a total of one point for multiple correct answers. This will not be an option in "Single answer" mode.',
            importance: "low",
            label: "Give one point for the whole task",
            name: "singlePoint",
            type: "boolean",
          },
          {
            default: true,
            description: "Enable to randomize the order of the answers on display.",
            importance: "low",
            label: "Randomize answers",
            name: "randomAnswers",
            type: "boolean"

          },
          {
            default: true,
            importance: "low",
            label: "Require answer before the solution can be viewed",
            name: "showSolutionsRequiresInput",
            optional: true,
            type: "boolean"
          },
          {
            default: false,
            importance: "low",
            label: "Disable image zooming for question image",
            name: "disableImageZooming",
            optional: true,
            type: "boolean"
          },
          {
            default: false,
            importance: "low",
            label: 'Show confirmation dialog on "Check"',
            name: "confirmCheckDialog",
            type: "boolean"
          },
          {
            default: false,
            importance: "low",
            label: 'Show confirmation dialog on "Retry"',
            name: "confirmRetryDialog",
            type: "boolean",

          },
          {
            default: false,
            description: "Enabling this option will make accessibility suffer, make sure you know what you're doing.",
            importance: "low",
            label: "Automatically check answers",
            name: "autoCheck",
            type: "boolean",
          },
          {
            default: 100,
            description: "This setting often won't have any effect. It is the percentage of the total score required for getting 1 point when one point for the entire task is enabled, and for getting result.success in xAPI statements.",
            label: "Pass percentage",
            max: 100,
            min: 0,
            name: "passPercentage",
            step: 1,
            type: "number"
          },
          {
            default: true,
            description: "Show points earned for each answer. This will not be an option in 'Single answer' mode or if 'Give one point for the whole task' option is enabled.",
            importance: "low",
            label: "Show score points",
            name: "showScorePoints",
            type: "boolean"
          }
        ]
      }
    ]
  }

}
