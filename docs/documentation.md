# Documentation

### component.doc.js

You should create one `.doc.js` file per component per engine. That said, be careful about:

- If you have a button component written in AngularJS and a button component written in Vue, both will need their own `.doc.js`.
- You shouldn't ever mix AngularJS examples with Vue examples in the same `doc.js`.

The following is an example of button component documentation:

``` javascript
module.exports = {
  name: 'Button',
  description: 'Trigger for actions in forms, dialogs, and more.',
  properties: [
    {
      name: 'theme',
      type: 'String',
      values: 'primary, secondary',
      required: 'No'
    },
    {
      name: 'size',
      type: 'String',
      values: 'small, large',
      required: 'No'
    }
  ],
  // Angular Examples should be written like below:
  examples: [
    {
      title: 'My Button Example',
      description: 'This is my custom Angular button.'
      controller: function($window){
        const $ctrl = this;
        $ctrl.label = 'Greet';
        $ctrl.greet = () => $window.alert('Hello!');
      },
      dependencies: ['$window'],
      template: `
      <my-button
        ng-click="$ctrl.greet()"
        ng-bind="$ctrl.label">
      </my-button>`
    }
  ]
  // Vue Examples should be written like below:
  examples: [
    {
      title: 'My Button Example',
      description: 'This is my custom Vue button.'
      controller: {
        data(){
          return {
            label: 'Greet'
          };
        },
        methods: {
          greet(){
            window.alert('Hello!');
          }
        }
      },
      template: `
      <my-button @click="greet">
        {{ label }}
      </my-button>`
    }
  ]
};
```