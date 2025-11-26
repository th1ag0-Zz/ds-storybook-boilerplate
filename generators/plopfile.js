module.exports = function (plop) {
  plop.setGenerator("Component", {
    description: "application component logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name:",
      },
      {
        type: "confirm",
        name: "isCompound",
        message: "Componente Compound Pattern?",
        default: false,
      },
      {
        type: "input",
        name: "subcomponents",
        message: "Digite os subcomponents separados por vírgula:",
        when: (answers) => answers.isCompound,
        filter: (input) =>
          input
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean),
      },
    ],
    actions: function (data) {
      const actions = [];

      if (data.isCompound) {
        actions.push({
          type: "add",
          path: "../src/components/{{ pascalCase name }}/index.tsx",
          templateFile: "templates/compound/index.tsx.hbs",
        });

        data.subcomponents.forEach((sub) => {
          actions.push(
            {
              type: "add",
              path: `../src/components/{{ pascalCase name }}/components/{{ pascalCase sub }}/index.tsx`,
              templateFile: "templates/compound/subComponent/index.tsx.hbs",
              data: { sub },
            },
            {
              type: "add",
              path: `../src/components/{{ pascalCase name }}/components/{{ pascalCase sub }}/styles.ts`,
              templateFile: "templates/compound/subComponent/styles.ts.hbs",
              data: { sub },
            },
            {
              type: "add",
              path: `../src/components/{{ pascalCase name }}/components/{{ pascalCase sub }}/types.ts`,
              templateFile: "templates/compound/subComponent/types.ts.hbs",
              data: { sub },
            }
          );
        });

        actions.push(
          {
            type: "add",
            path: "../src/components/{{ pascalCase name }}/stories/index.stories.tsx",
            templateFile: "templates/compound/stories/index.tsx.hbs",
          },
          {
            type: "add",
            path: "../src/components/{{ pascalCase name }}/stories/docs/props-types/components.ts",
            templateFile: "templates/compound/stories/props-types/components.ts.hbs",
          },
          {
            type: "add",
            path: "../src/components/{{ pascalCase name }}/stories/docs/props-types/propsTable.tsx",
            templateFile: "templates/compound/stories/props-types/propsTable.tsx.hbs",
          },
          {
            type: "add",
            path: "../src/components/{{ pascalCase name }}/stories/docs/props-types/propsTypes.ts",
            templateFile: "templates/compound/stories/props-types/propsTypes.ts.hbs",
          },
          {
            type: "add",
            path: "../src/components/{{ pascalCase name }}/stories/docs/{{ camelCase name }}.mdx",
            templateFile: "templates/compound/stories/doc.mdx.hbs",
          },
          {
            type: "add",
            path: "../src/components/{{ pascalCase name }}/stories/templates/index.tsx",
            templateFile: "templates/compound/stories/template.tsx.hbs",
          },
          {
            type: "add",
            path: "../src/packages/{{ camelCase name }}.ts",
            templateFile: "templates/compound/package/export.ts.hbs",
          }
        );
      } else {
        actions.push(
          {
            type: "add",
            path: "../src/components/{{ pascalCase name }}/index.tsx",
            templateFile: "templates/default/component/index.tsx.hbs",
          },
          {
            type: "add",
            path: "../src/components/{{ pascalCase name }}/styles.ts",
            templateFile: "templates/default/component/styles.ts.hbs",
          },
          {
            type: "add",
            path: "../src/components/{{ pascalCase name }}/types.ts",
            templateFile: "templates/default/component/types.ts.hbs",
          },
          {
            type: "add",
            path: "../src/components/{{ pascalCase name }}/stories/index.stories.tsx",
            templateFile: "templates/default/stories/index.tsx.hbs",
          },
          {
            type: "add",
            path: "../src/components/{{ pascalCase name }}/stories/docs/props-types/props.ts",
            templateFile: "templates/default/stories/propsTypes.ts.hbs",
          },
          {
            type: "add",
            path: "../src/components/{{ pascalCase name }}/stories/docs/{{ camelCase name }}.mdx",
            templateFile: "templates/default/stories/doc.mdx.hbs",
          },
          {
            type: "add",
            path: "../src/components/{{ pascalCase name }}/stories/templates/index.tsx",
            templateFile: "templates/default/stories/template.tsx.hbs",
          },
          {
            type: "add",
            path: "../src/packages/{{ camelCase name }}.ts",
            templateFile: "templates/default/package/export.ts.hbs",
          }
        );
      }
      return actions;
    },
  });
};